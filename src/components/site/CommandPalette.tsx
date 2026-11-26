import { Command } from "cmdk";
import {
  ArrowRight,
  Briefcase,
  Crown,
  Globe,
  Home,
  Instagram,
  Mail,
  MessageCircle,
  Search,
  Sparkles,
  TrendingUp,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "./WhatsAppCTA";

const NAV_ITEMS = [
  { label: "Home", href: "#home", icon: Home, group: "Navigation" },
  { label: "Our Services", href: "#services", icon: Sparkles, group: "Navigation" },
  { label: "Selected Work", href: "#work", icon: Briefcase, group: "Navigation" },
  { label: "Our Story", href: "#about", icon: User, group: "Navigation" },
  { label: "Start A Project / Enquiry", href: "#contact", icon: Mail, group: "Navigation" },
];

const SERVICE_ITEMS = [
  { label: "Personal Branding", href: "#services", icon: Crown },
  { label: "Brand Creation", href: "#services", icon: Sparkles },
  { label: "SEO & Google Visibility", href: "#services", icon: Globe },
  { label: "Meta Ads & Performance Marketing", href: "#services", icon: TrendingUp },
];

const CONNECT_ITEMS = [
  { label: "Chat on WhatsApp", href: WHATSAPP_URL, icon: MessageCircle },
  { label: "Instagram (@socialflex.in)", href: "https://www.instagram.com/socialflex.in", icon: Instagram },
  { label: "Email (mail2socialflex@gmail.com)", href: "mailto:mail2socialflex@gmail.com", icon: Mail },
];

/**
 * Spotlight-style quick command palette triggered via Cmd+K / Ctrl+K
 * or the "open-command-palette" window event.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };

    const onOpenEvent = () => setOpen(true);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpenEvent);
    };
  }, []);

  if (!open) return null;

  const navigateTo = (href: string, external = false) => {
    setOpen(false);
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/75 px-4 pt-[15vh] backdrop-blur-md"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation command palette"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-[#090909]/95 shadow-[0_25px_80px_-15px_color-mix(in_oklab,var(--primary)_40%,transparent)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="w-full text-foreground">
          <div className="flex items-center border-b border-border/70 px-4">
            <Search className="mr-3 h-4 w-4 shrink-0 text-primary" />
            <Command.Input
              autoFocus
              placeholder="Jump to a section, service, or contact..."
              className="h-13 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <kbd className="rounded border border-border bg-rich px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-[340px] overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
              No matching results found.
            </Command.Empty>

            <Command.Group
              heading="Navigation"
              className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/70"
            >
              {NAV_ITEMS.map((item) => (
                <Command.Item
                  key={item.label}
                  value={item.label}
                  onSelect={() => navigateTo(item.href)}
                  className="mt-1 flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground/90 transition-colors aria-selected:bg-primary/15 aria-selected:text-primary"
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.label}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-50" />
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Services"
              className="mt-2 px-2 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/70"
            >
              {SERVICE_ITEMS.map((item) => (
                <Command.Item
                  key={item.label}
                  value={item.label}
                  onSelect={() => navigateTo(item.href)}
                  className="mt-1 flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground/90 transition-colors aria-selected:bg-primary/15 aria-selected:text-primary"
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.label}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-50" />
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Direct Connect"
              className="mt-2 px-2 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/70"
            >
              {CONNECT_ITEMS.map((item) => (
                <Command.Item
                  key={item.label}
                  value={item.label}
                  onSelect={() => navigateTo(item.href, item.href.startsWith("http"))}
                  className="mt-1 flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground/90 transition-colors aria-selected:bg-primary/15 aria-selected:text-primary"
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.label}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-50" />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
