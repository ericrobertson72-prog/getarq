import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import screen1 from "@/assets/screen1.png";
import screen2 from "@/assets/screen2.png";
import screen3 from "@/assets/screen3.png";
import screen4 from "@/assets/screen4.png";
import { useLanguage } from "@/contexts/LanguageContext";

const screenImages = [screen1, screen2, screen3, screen4];

export default function SolutionSection() {
  const { t } = useLanguage();
  const s = t.solution;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  return (
    <section ref={ref} id="system" className="relative bg-card py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 md:mb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="sticker mb-6">{s.tag}</div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-foreground leading-[0.95]">
              {s.h2line1}<br />
              <span className="text-primary">{s.h2accent}</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground text-lg">{s.sub}</p>
          </div>
        </div>
      </div>

      {/* Horizontal scroll showcase */}
      <div className="relative">
        <motion.div style={{ x }} className="flex gap-6 will-change-transform pl-6">
          {s.screens.map((screen, i) => (
            <div key={screen.tag} className="shrink-0 w-[80vw] md:w-[55vw] lg:w-[42vw]">
              <div className="relative aspect-[16/10] overflow-hidden bg-background border border-primary/15 corner-brackets">
                <img
                  src={screenImages[i]}
                  alt={screen.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-mono text-xs text-primary uppercase tracking-widest">{screen.tag}</span>
                <h3 className="font-display text-2xl text-foreground">{screen.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-10 md:mt-20">
        <div className="grid md:grid-cols-3 gap-px bg-primary/15">
          {s.pillars.map((b, i) => (
            <motion.div
              key={b.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8"
            >
              <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">0{i + 1}</div>
              <h3 className="font-display text-3xl text-foreground mb-3">{b.k.toUpperCase()}</h3>
              <p className="text-muted-foreground text-sm">{b.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
