import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import pickup from "@/assets/lifestyle-pickup.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhySection() {
  const { t } = useLanguage();
  const w = t.why;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-center">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img src={pickup} alt="" className="w-full h-[120%] object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl">
          <div className="sticker sticker-solid mb-8">{w.tag}</div>
          <p className="font-display text-[clamp(2.5rem,7vw,6.5rem)] text-foreground leading-[0.95]">
            {w.line1} <span className="text-primary">{w.line1accent}</span>.<br />
            {w.line2} <span className="text-primary">{w.line2accent}</span>.
          </p>
          <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mt-8">{w.body}</p>

          <div className="mt-12 flex flex-wrap gap-3">
            {w.tags.map((tag) => (
              <span key={tag} className="sticker">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
