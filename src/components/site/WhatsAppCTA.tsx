import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const WHATSAPP_URL = "https://wa.me/917092280024";

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppCTAButton({
  className,
  size = "default",
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "group relative inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-950/30 font-sans font-semibold tracking-wide text-emerald-300 backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_30px_rgba(37,211,102,0.45)]",
        size === "sm" && "h-10 px-4 text-xs",
        size === "default" && "h-[52px] px-6 text-xs",
        size === "lg" && "h-14 px-8 text-sm",
        className,
      )}
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-black transition-transform duration-300 group-hover:scale-110 group-hover:bg-black group-hover:text-emerald-400">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
      <span>Chat on WhatsApp</span>
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      aria-label="WhatsApp quick contact"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp Business"
        className="group relative flex items-center gap-3 rounded-full border border-emerald-500/40 bg-[#061a10]/90 p-2.5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.8),0_0_20px_rgba(37,211,102,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_35px_rgba(37,211,102,0.55)]"
      >
        <span className="relative grid h-11 w-11 place-items-center rounded-full bg-emerald-500 text-black transition-colors duration-300 group-hover:bg-black group-hover:text-emerald-400 shadow-[0_0_15px_rgba(37,211,102,0.4)]">
          <WhatsAppIcon className="h-6 w-6" />
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
          </span>
        </span>
        <span className="hidden pr-3 text-xs font-bold uppercase tracking-wider text-emerald-200 transition-colors duration-300 group-hover:text-black sm:inline-block">
          WhatsApp Us
        </span>
      </a>
    </motion.aside>
  );
}
