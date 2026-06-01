import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PilotsSection() {
  const { t } = useLanguage();
  const p = t.pilots;

  return (
    <section id="pilots" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">

        {/* Stats row */}
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

        {/* Testimonials — 2×2 grid */}
        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-primary/10">
          {p.testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-card p-8 md:p-10 flex flex-col justify-between gap-6"
            >
              {/* Decorative quote mark */}
              <span
                className="absolute top-4 right-6 font-display text-7xl text-primary/10 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </span>

              <p className="font-display text-xl md:text-2xl text-foreground leading-snug relative z-10">
                "{testimonial.q}"
              </p>

              <div>
                <p className="font-mono text-xs text-primary uppercase tracking-widest">{testimonial.who}</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
