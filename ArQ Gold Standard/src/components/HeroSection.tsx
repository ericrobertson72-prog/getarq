import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-arq.png";
import bgImage from "@/assets/lifestyle-site.jpg";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex items-start justify-start">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img src={bgImage} alt="" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 dot-grid opacity-50" />
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 pt-32 pb-16 md:pb-24 relative py-[12px]">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sticker mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              LIVE IN SITE IN EU NOW
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[clamp(3.5rem,11vw,10rem)] text-foreground mb-6"
            >
              BUILD MORE.<br />
              FASTER.<br />
              <span className="text-primary">SMARTER.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-foreground/80 text-lg md:text-xl max-w-xl mb-8"
            >
              The execution system for the people who actually build. Less paperwork. More progress.
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
                Book Demo →
              </a>
              <a
                href="#problem"
                className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/20 text-foreground font-mono font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
              >
                See the System
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="relative max-h-[580px]">
              <div className="absolute -inset-6 bg-primary/10 blur-3xl" />
              <img
                src={heroImage}
                alt="ArQ app on a rugged phone at a construction site"
                className="relative w-full h-auto max-h-[580px]"
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
            ["▲ Activity", "● Quality", "■ Finance", "◆ SBEF / BSAB / CoClass", "▲ Built by builders", "● Field-first", "■ Nordic standards"].map(
              (t) => <span key={`${i}-${t}`} className="text-foreground/60">{t}</span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
