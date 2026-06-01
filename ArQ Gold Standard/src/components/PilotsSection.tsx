import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PilotsSection() {
  const { t } = useLanguage();
  const p = t.pilots;

  return (
    <section id="pilots" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">

        <div className="mb-14">
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-foreground leading-[0.95]">
            {p.heading} <span className="text-primary">{p.headingAccent}.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-primary/10">
          {p.testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-card p-8 md:p-10 flex flex-col justify-between gap-6"
            >
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
