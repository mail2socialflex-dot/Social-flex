import { Dribbble, Facebook, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logoMark from "@/assets/social-flex-logo-main.png";
import { WhatsAppIcon } from "./WhatsAppCTA";

const LINKS = ["Branding", "Digital Marketing", "Content", "Design"];

const ease = [0.22, 1, 0.36, 1] as const;

export function Footer() {
  return (
    <footer className="grain bg-rich">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
          <a href="#home" className="flex items-center" aria-label="Social Flex home">
            <img src={logoMark} alt="Social Flex logo" className="h-12 w-auto object-contain" />
          </a>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 lg:flex-nowrap lg:justify-center"
          >
            {LINKS.map((l) => (
              <motion.li
                key={l}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease },
                  },
                }}
              >
                <a
                  href="#services"
                  className="group flex flex-col items-center gap-1.5 label-xs text-muted-foreground whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_8px_var(--primary)]" />
                  <span className="transition-colors duration-300 group-hover:text-primary">{l}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex gap-3 lg:justify-end">
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
                className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-center text-xs leading-[1.7] text-muted-foreground">
          © 2026 Social Flex. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
