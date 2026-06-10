import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import screen1 from "@/assets/screen1.png";
import screen2 from "@/assets/screen2.png";
import screen3 from "@/assets/screen3.png";
import screen4 from "@/assets/screen4.png";
import { useLanguage } from "@/contexts/LanguageContext";

const screenImages = [screen1, screen2, screen3, screen4];

export default function SolutionSection() {
  const { t } = useLanguage();
  const s = t.solution;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardWidth = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 0;
    const card = container.children[0] as HTMLElement;
    return card ? card.offsetWidth + 24 : 0; // 24 = gap-6
  }, []);

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const cardWidth = getCardWidth();
      if (!cardWidth) return;
      const idx = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(idx, s.screens.length - 1)));
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [getCardWidth, s.screens.length]);

  return (
    <section id="system" className="relative bg-card py-16 md:py-24 overflow-hidden">
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

      {/* Scrollable carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pl-6 pr-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {s.screens.map((screen, i) => (
          <div key={screen.tag} className="snap-start shrink-0 w-[80vw] md:w-[55vw] lg:w-[42vw]">
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
      </div>

      {/* Navigation: dots + arrows */}
      <div className="container mx-auto px-6 mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {s.screens.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-primary/30"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label="Previous"
            className="p-2 border border-primary/20 text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollTo(Math.min(s.screens.length - 1, activeIndex + 1))}
            disabled={activeIndex === s.screens.length - 1}
            aria-label="Next"
            className="p-2 border border-primary/20 text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} />
          </button>
        </div>
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
