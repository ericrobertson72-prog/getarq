import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PilotsSection() {
  const { t } = useLanguage();
  const p = t.pilots;

  return (
    <section id="pilots" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-px bg-primary/15">
          {p.stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background p-8 md:p-10"
            >
              <div className="font-display text-5xl md:text-6xl text-primary leading-none mb-3">{s.k}</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{s.v}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {p.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-primary p-8 bg-card"
            >
              <p className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">"{t.q}"</p>
              <p className="font-mono text-xs text-primary uppercase tracking-widest">{t.who}</p>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
