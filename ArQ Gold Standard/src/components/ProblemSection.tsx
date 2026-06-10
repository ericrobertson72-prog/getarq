import { motion } from "framer-motion";
import carpenter from "@/assets/lifestyle-carpenter.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProblemSection() {
  const { t } = useLanguage();
  const p = t.problem;

  return (
    <section id="problem" className="relative bg-background py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-12 mb-8 md:mb-16">
          <div className="lg:col-span-5">
            <div className="sticker mb-6">{p.tag}</div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-foreground leading-[0.95]">
              {p.h2line1}<br />
              {p.h2line2}<br />
              <span className="text-primary">{p.h2accent}</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-muted-foreground text-lg">{p.intro}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 relative aspect-[3/4] overflow-hidden group">
            <img
              src={carpenter}
              alt="Carpenter on site"
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-3xl text-foreground leading-none">
                {p.quote}
                <br />
                <span className="text-primary">{p.quoteAccent}</span>
                {p.quoteEnd}
              </p>
              <p className="text-xs font-mono text-muted-foreground mt-3 uppercase tracking-widest">
                {p.quoteCredit}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid gap-px bg-primary/10">
            {p.items.map((item, i) => (
              <motion.div
                key={item.no}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-background p-8 md:p-10 hover:bg-card transition-colors flex flex-col md:flex-row gap-6 md:items-start"
              >
                <div className="font-mono text-primary text-sm font-bold w-12 shrink-0">{item.no}</div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.head}
                  </h3>
                  <p className="text-muted-foreground text-base max-w-xl">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
