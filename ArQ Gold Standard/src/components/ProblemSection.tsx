import { motion } from "framer-motion";
import carpenter from "@/assets/lifestyle-carpenter.jpg";

const problems = [
  {
    no: "01",
    head: "Excel is killing your project.",
    text: "Plans in one file. Deviations in another app. Invoices nowhere. Nobody sees the whole picture.",
  },
  {
    no: "02",
    head: "Errors cost a fortune.",
    text: "Found weeks too late. After the concrete is poured. After the invoice is paid.",
  },
  {
    no: "03",
    head: "The good guys quit.",
    text: "20 years of know-how walks out the door. Nothing captures it. Nothing reuses it.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="sticker mb-6">▲ The Problem</div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-foreground leading-[0.95]">
              CONSTRUCTION<br />
              IS BROKEN.<br />
              <span className="text-primary">WE FIX IT.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-muted-foreground text-lg">
              Every site loses money to the same three things. We built ArQ because we got tired of watching it happen.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 relative aspect-[3/4] overflow-hidden group">
            <img src={carpenter} alt="Carpenter on site" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-3xl text-foreground leading-none">
                "JAG VILL <br/>BARA <span className="text-primary">BYGGA.</span>"
              </p>
              <p className="text-xs font-mono text-muted-foreground mt-3 uppercase tracking-widest">— Every carpenter, ever</p>
            </div>
          </div>

          <div className="lg:col-span-8 grid gap-px bg-primary/10">
            {problems.map((p, i) => (
              <motion.div
                key={p.no}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-background p-8 md:p-10 hover:bg-card transition-colors flex flex-col md:flex-row gap-6 md:items-start"
              >
                <div className="font-mono text-primary text-sm font-bold w-12 shrink-0">{p.no}</div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {p.head}
                  </h3>
                  <p className="text-muted-foreground text-base max-w-xl">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
