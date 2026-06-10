import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-arq.png";
import bgImage from "@/assets/lifestyle-site.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[auto] md:min-h-screen overflow-hidden flex items-start justify-start">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img src={bgImage} alt="" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 dot-grid opacity-50" />
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 pt-24 md:pt-32 pb-16 md:pb-12 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sticker mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t.hero.live}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[clamp(3.5rem,11vw,10rem)] text-foreground mb-6"
            >
              {t.hero.line1}<br />
              {t.hero.line2}<br />
              <span className="text-primary">{t.hero.line3}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-foreground/80 text-lg md:text-xl max-w-xl mb-8"
            >
              {t.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 items-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase tracking-widest hover:bg-foreground transition-colors"
              >
                {t.hero.cta1}
              </a>
              <a
                href="#system"
                className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/20 text-foreground font-mono font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
              >
                {t.hero.cta2}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:max-h-[580px] overflow-hidden flex items-center justify-center">
              <div className="absolute -inset-6 bg-primary/10 blur-3xl" />
              <img
                src={heroImage}
                alt="ArQ app on a rugged phone at a construction site"
                className="relative w-full h-full object-contain lg:w-auto lg:h-auto lg:max-w-full lg:max-h-[580px]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-primary/20 bg-background/60 backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex gap-12 marquee-track whitespace-nowrap font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            t.hero.ticker.map((item) => (
              <span key={`${i}-${item}`} className="text-foreground/60">{item}</span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
