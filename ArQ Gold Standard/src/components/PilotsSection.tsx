import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PilotsSection() {
  const { t } = useLanguage();
  const p = t.pilots;

  return (
    <section id="pilots" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">

        <div className="mb-8 md:mb-14">
          <div className="sticker mb-6">◆ Pilots</div>
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
              <div className="flex gap-1" aria-label="4 out of 5 stars">
                {Array.from({ length: 4 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

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
