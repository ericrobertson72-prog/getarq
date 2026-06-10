import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import screen1 from "@/assets/screen1.png";
import screen2 from "@/assets/screen2.png";
import screen3 from "@/assets/screen3.png";
import screen4 from "@/assets/screen4.png";
import screen5 from "@/assets/screen5.png";
import screen6 from "@/assets/screen6.png";
import screen7 from "@/assets/screen7.png";
import { useLanguage } from "@/contexts/LanguageContext";

const screenImages = [screen1, screen2, screen3, screen4, screen5, screen6, screen7];

type Pos = "active" | "right" | "left" | "hidden";

function getPos(index: number, active: number, total: number): Pos {
  const offset = ((index - active) % total + total) % total;
  if (offset === 0) return "active";
  if (offset === 1) return "right";
  if (offset === total - 1) return "left";
  return "hidden";
}

const variants: Record<Pos, object> = {
  active: { x: "0%",   scale: 1,    rotateY: 0,   opacity: 1,   zIndex: 10, filter: "brightness(1)" },
  right:  { x: "58%",  scale: 0.84, rotateY: -22, opacity: 0.55, zIndex: 5,  filter: "brightness(0.55)" },
  left:   { x: "-58%", scale: 0.84, rotateY:  22, opacity: 0.55, zIndex: 5,  filter: "brightness(0.55)" },
  hidden: { x: "0%",   scale: 0.7,  rotateY: 0,   opacity: 0,   zIndex: 1,  filter: "brightness(0.4)" },
};

const ease = [0.32, 0.72, 0, 1] as const;

export default function SolutionSection() {
  const { t } = useLanguage();
  const s = t.solution;
  const total = s.screens.length;
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive(i => (i + 1) % total), [total]);
  const prev = useCallback(() => setActive(i => (i - 1 + total) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section id="system" className="relative bg-card py-16 md:py-24">
      {/* Heading */}
      <div className="container mx-auto px-6 mb-10 md:mb-16">
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

      {/* 3D carousel */}
      <div className="overflow-hidden py-6">
        <div
          className="grid place-items-center mx-auto"
          style={{
            perspective: "1100px",
            height: "clamp(200px, 26vw, 400px)",
            width: "100%",
          }}
        >
          {screenImages.map((img, i) => {
            const pos = getPos(i, active, total);
            const isClickable = pos === "right" || pos === "left";
            return (
              <motion.div
                key={i}
                className="w-[78vw] md:w-[52vw] lg:w-[38vw]"
                style={{ gridArea: "1/1", transformStyle: "preserve-3d", cursor: isClickable ? "pointer" : "default" }}
                animate={variants[pos]}
                transition={{ duration: 0.52, ease }}
                onClick={() => { if (pos === "right") next(); if (pos === "left") prev(); }}
                drag={pos === "active" ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, { offset }) => { if (offset.x < -60) next(); if (offset.x > 60) prev(); }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-background border border-primary/15 corner-brackets select-none">
                  <img
                    src={img}
                    alt={s.screens[i].title}
                    loading="lazy"
                    draggable={false}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Active card label */}
      <div className="flex justify-center mt-5">
        <div className="flex items-baseline gap-4 min-w-0">
          <motion.span
            key={`tag-${active}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-xs text-primary uppercase tracking-widest whitespace-nowrap"
          >
            {s.screens[active].tag}
          </motion.span>
          <motion.h3
            key={`title-${active}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="font-display text-2xl text-foreground"
          >
            {s.screens[active].title}
          </motion.h3>
        </div>
      </div>

      {/* Dots + arrows */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <button
          onClick={prev}
          aria-label="Previous"
          className="p-2 border border-primary/20 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-2">
          {s.screens.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-primary" : "w-1.5 bg-primary/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="p-2 border border-primary/20 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Pillars */}
      <div className="container mx-auto px-6 mt-10 md:mt-16">
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
