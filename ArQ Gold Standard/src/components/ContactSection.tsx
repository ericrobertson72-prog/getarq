import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 -z-10" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
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

          <div className="lg:col-span-6 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-primary/15 p-8 md:p-10 corner-brackets"
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="font-display text-5xl text-primary mb-3">{c.successTitle}</div>
                  <p className="text-muted-foreground">{c.successSub}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">
                      {c.f01}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground font-display text-2xl"
                      placeholder={c.p01}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">
                      {c.f02}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground font-display text-2xl"
                      placeholder={c.p02}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">
                      {c.f03}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground font-display text-2xl"
                      placeholder={c.p03}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">
                      {c.f04}
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground text-base resize-none"
                      placeholder={c.p04}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-6 py-5 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase tracking-widest hover:bg-foreground transition-colors"
                  >
                    {c.submit}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
