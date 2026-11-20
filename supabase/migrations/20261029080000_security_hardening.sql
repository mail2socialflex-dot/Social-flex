-- ============================================================
-- SECURITY HARDENING MIGRATION
-- 1. Remove hardcoded admin email from handle_new_user trigger
-- 2. Add rate-limiting constraints to enquiries table
-- ============================================================

-- 1. Replace handle_new_user: remove the hardcoded admin email check.
--    All users now start as 'client'. Promote admins manually via:
--      INSERT INTO public.user_roles (user_id, role) VALUES ('<uuid>', 'admin');
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, company, phone)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.raw_user_meta_data ->> 'company',
    NEW.raw_user_meta_data ->> 'phone'
  ) ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'client') ON CONFLICT DO NOTHING;

  UPDATE public.enquiries
  SET user_id = NEW.id
  WHERE user_id IS NULL AND lower(email) = lower(NEW.email);

  RETURN NEW;
END; $$;

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- 2. Add field-length constraints to prevent abuse via direct Supabase inserts.
--    These apply regardless of RLS path (form or direct API).
ALTER TABLE public.enquiries
  ADD CONSTRAINT enquiries_name_length CHECK (char_length(name) BETWEEN 2 AND 200),
  ADD CONSTRAINT enquiries_email_length CHECK (char_length(email) BETWEEN 5 AND 320),
  ADD CONSTRAINT enquiries_message_length CHECK (char_length(message) BETWEEN 5 AND 5000),
  ADD CONSTRAINT enquiries_company_length CHECK (company IS NULL OR char_length(company) <= 300),
  ADD CONSTRAINT enquiries_project_type_length CHECK (project_type IS NULL OR char_length(project_type) <= 200),
  ADD CONSTRAINT enquiries_phone_length CHECK (phone IS NULL OR char_length(phone) <= 30);

-- 3. Replace the wide-open anon INSERT policy with one that enforces
--    that anon can only set the allowed columns (no user_id, no status override).
DROP POLICY IF EXISTS "Anyone can submit an enquiry" ON public.enquiries;

CREATE POLICY "Anon enquiry insert (restricted)" ON public.enquiries
  FOR INSERT TO anon
  WITH CHECK (
    user_id IS NULL
    AND status = 'new'
    AND name IS NOT NULL
    AND email IS NOT NULL
  );

CREATE POLICY "Authenticated enquiry insert" ON public.enquiries
  FOR INSERT TO authenticated
  WITH CHECK (
    status = 'new'
  );
