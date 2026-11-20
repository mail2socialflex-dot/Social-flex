import { ArrowRight, CheckCircle2, Dribbble, Facebook, Instagram, Mail, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { submitEnquiryServerFn } from "@/lib/enquiry-server";
import { Magnetic, Reveal, SectionLabel } from "./primitives";
import { WhatsAppCTAButton, WhatsAppIcon } from "./WhatsAppCTA";

const inputCls =
  "w-full rounded-md border border-border bg-rich/60 px-4 py-3.5 text-sm leading-[1.65] text-foreground placeholder:text-muted-foreground/60 outline-none backdrop-blur-sm transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)] disabled:opacity-60";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(7, "Enter a valid phone number"),
  company: z.string().trim().optional(),
  project_type: z.string().trim().min(1, "Please select a service required"),
  message: z.string().trim().min(5, "Please describe your project details"),
});

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setFieldErrors({});

    const form = e.currentTarget;
    const fd = new FormData(form);

    const rawData = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      project_type: String(fd.get("project") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = enquirySchema.safeParse(rawData);

    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) errors[issue.path[0] as string] = issue.message;
      });
      setFieldErrors(errors);
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }

    setStatus("submitting");

    try {
      // All submission logic runs server-side (Apps Script, email, Supabase)
      // No more client-side fetch to external URLs
      await submitEnquiryServerFn({ data: parsed.data });

      setStatus("success");
      toast.success("Inquiry submitted successfully!");
      form.reset();
    } catch (err) {
      console.error("[Enquiry Submit Error]", err);
      setStatus("error");
      const message =
        err instanceof Error && err.message.includes("Too many submissions")
          ? err.message
          : "YOUR INQUIRY COULD NOT BE SENT. PLEASE TRY AGAIN.";
      setErrorMessage(message);
      toast.error(
        err instanceof Error && err.message.includes("Too many submissions")
          ? err.message
          : "Couldn't send your inquiry. Please try again.",
      );
    }
  };

  return (
    <section id="contact" className="relative grain border-t border-border py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-10">
        <div>
          <Reveal>
            <SectionLabel>Start A Project</SectionLabel>
            <h2 className="mt-6 display text-[clamp(2.6rem,6.5vw,5rem)] leading-[1.08] flex flex-col gap-2 sm:gap-3">
              <span className="block">Let's Make</span>
              <span className="block text-primary">It Matter<span className="inline-block ml-[0.15em] text-primary">.</span></span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 space-y-3.5 font-sans text-base sm:text-lg font-medium leading-[1.6] text-foreground">
              <a href="tel:+918015502024" className="block transition-colors hover:text-primary">
                +91 80155 02024
              </a>
              <a href="tel:+919940167497" className="block transition-colors hover:text-primary">
                +91 99401 67497
              </a>
              <a href="mailto:mail2socialflex@gmail.com" className="block transition-colors hover:text-primary">
                mail2socialflex@gmail.com
              </a>
              <a href="https://www.socialflex.in" className="block transition-colors hover:text-primary">
                www.socialflex.in
              </a>
            </div>

            <div className="mt-7">
              <WhatsAppCTAButton />
            </div>

            <div className="mt-8 flex gap-3">
              {[
                { icon: WhatsAppIcon, href: "https://wa.me/917092280024", label: "WhatsApp" },
                { icon: Instagram, href: "https://www.instagram.com/socialflex.in", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/share/1CFB93LRsq/", label: "Facebook" },
                { icon: Mail, href: "mailto:mail2socialflex@gmail.com", label: "Email Us" },
                { icon: Dribbble, href: "#contact", label: "Dribbble" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border transition-all duration-300 hover:border-primary hover:text-primary hover:red-glow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {status === "success" ? (
            <div className="rounded-xl glass-panel p-8 sm:p-10 text-center border border-primary/40 shadow-[0_0_50px_-20px_var(--primary)] flex flex-col items-center justify-center min-h-[400px]">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary border border-primary/40 mb-5">
                <CheckCircle2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="display text-3xl sm:text-4xl text-foreground">THANK YOU.</h3>
              <p className="mt-2 font-cond text-xl font-bold uppercase tracking-wider text-primary">
                YOUR INQUIRY HAS BEEN RECEIVED.
              </p>
              <p className="mt-3 max-w-sm text-sm sm:text-base leading-[1.75] text-muted-foreground">
                WE'LL BE IN TOUCH SOON.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-7 py-3.5 label-xs text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_var(--primary)]"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 rounded-xl glass-panel p-6 sm:grid-cols-2 sm:p-8">
              {status === "error" && (
                <div className="sm:col-span-2 rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-red-400 uppercase text-xs tracking-wider">YOUR INQUIRY COULD NOT BE SENT.</strong>
                    <p className="mt-1 text-xs text-red-200/90 leading-relaxed">
                      {errorMessage || "Please try again or contact us directly at mail2socialflex@gmail.com"}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <input
                  required
                  name="name"
                  placeholder="Name *"
                  disabled={status === "submitting"}
                  className={inputCls}
                />
                {fieldErrors["name"] && (
                  <span className="mt-1 block text-xs text-red-400">{fieldErrors["name"]}</span>
                )}
              </div>

              <div>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email *"
                  disabled={status === "submitting"}
                  className={inputCls}
                />
                {fieldErrors["email"] && (
                  <span className="mt-1 block text-xs text-red-400">{fieldErrors["email"]}</span>
                )}
              </div>

              <div>
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  disabled={status === "submitting"}
                  className={inputCls}
                />
                {fieldErrors["phone"] && (
                  <span className="mt-1 block text-xs text-red-400">{fieldErrors["phone"]}</span>
                )}
              </div>

              <div>
                <input
                  name="company"
                  placeholder="Company / Brand"
                  disabled={status === "submitting"}
                  className={inputCls}
                />
              </div>

              <div className="sm:col-span-2">
                <select
                  name="project"
                  defaultValue=""
                  className={inputCls}
                  required
                  disabled={status === "submitting"}
                >
                  <option value="" disabled>
                    Service Required *
                  </option>
                  <option>Branding</option>
                  <option>Digital Marketing</option>
                  <option>Content Creation</option>
                  <option>Creative Design</option>
                  <option>Personal Branding</option>
                </select>
                {fieldErrors["project_type"] && (
                  <span className="mt-1 block text-xs text-red-400">{fieldErrors["project_type"]}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Project / Business Details *"
                  disabled={status === "submitting"}
                  className={inputCls + " resize-none"}
                />
                {fieldErrors["message"] && (
                  <span className="mt-1 block text-xs text-red-400">{fieldErrors["message"]}</span>
                )}
              </div>

              <div className="sm:col-span-2">
                <Magnetic>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 label-xs text-primary-foreground transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_40px_-6px_var(--primary)] disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-primary-foreground" />
                        SENDING...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </Magnetic>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
