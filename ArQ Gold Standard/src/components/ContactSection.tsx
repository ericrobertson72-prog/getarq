import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Tally embed script loader — idempotent, safe to call multiple times.
function loadTally() {
  if (typeof window === "undefined") return;
  if ((window as any).Tally) {
    (window as any).Tally.loadEmbeds();
    return;
  }
  if (document.querySelector('script[src*="tally.so/widgets/embed.js"]')) return;
  const s = document.createElement("script");
  s.src = "https://tally.so/widgets/embed.js";
  s.async = true;
  s.onload = () => (window as any).Tally?.loadEmbeds();
  document.head.appendChild(s);
}

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const c = t.contact;

  useEffect(() => {
    loadTally();
  }, []);

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 -z-10" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left — heading + contact links */}
          <div className="lg:col-span-6">
            <div className="sticker mb-6">{c.tag}</div>
            <h2 className="font-display text-[clamp(3rem,9vw,8rem)] text-foreground leading-[0.9]">
              {c.h2line1}<br />
              {c.h2line2} <span className="text-primary">{c.h2accent}</span>.<br />
              {c.h2line3}
            </h2>
            <p className="text-muted-foreground text-lg mt-8 max-w-md">{c.sub}</p>

            <div className="mt-12 space-y-4">
              <a
                href="mailto:hello@getarq.se"
                className="flex items-center justify-between border-b border-primary/20 py-4 group hover:border-primary transition-colors"
              >
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {c.labelEmail}
                </span>
                <span className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                  hello@getarq.se →
                </span>
              </a>
              <a
                href="https://www.getarq.se"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-primary/20 py-4 group hover:border-primary transition-colors"
              >
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {c.labelWeb}
                </span>
                <span className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                  www.getarq.se →
                </span>
              </a>
            </div>
          </div>

          {/* Right — Tally embed */}
          <div className="lg:col-span-6 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-primary/15 p-8 md:p-10 corner-brackets"
            >
              <iframe
                key={lang}
                data-tally-src="https://tally.so/embed/RGkrll?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="400"
                title="Book a demo"
                style={{ border: "none" }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
