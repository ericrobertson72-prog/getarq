import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import screenDash from "@/assets/screen-dashboard.png";
import screenProjects from "@/assets/screen-projects.png";
import screenMap from "@/assets/screen-map.png";
import screenDetail from "@/assets/screen-detail.png";
import screenNav from "@/assets/screen-nav.png";

const screens = [
  { img: screenDash, tag: "01 / Overview", title: "Real-time site control" },
  { img: screenProjects, tag: "02 / Projects", title: "Every job, one place" },
  { img: screenNav, tag: "03 / Workflow", title: "From plan to invoice" },
  { img: screenDetail, tag: "04 / Activity", title: "Sign-off on the spot" },
  { img: screenMap, tag: "05 / Site planning", title: "Heatmaps & APD" },
];

export default function SolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  return (
    <section ref={ref} id="system" className="relative bg-card py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="sticker mb-6">● The System</div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-foreground leading-[0.95]">
              ONE APP.<br />
              <span className="text-primary">THE WHOLE BUILD.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground text-lg">
              Activity. Quality. Finance. Tied to Nordic standards (SBEF, BSAB, CoClass). Built to run in the mud, not in the boardroom.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal scroll showcase */}
      <div className="relative">
        <motion.div style={{ x }} className="flex gap-6 will-change-transform pl-6">
          {screens.map((s) => (
            <div key={s.tag} className="shrink-0 w-[80vw] md:w-[55vw] lg:w-[42vw]">
              <div className="relative aspect-[16/10] overflow-hidden bg-background border border-primary/15 corner-brackets">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-mono text-xs text-primary uppercase tracking-widest">{s.tag}</span>
                <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-px bg-primary/15">
          {[
            { k: "Activity", v: "Role-based work prep. AI sets up your project on Nordic standards." },
            { k: "Quality", v: "QA & HSE in the workflow. Deviations linked to the activity that caused them." },
            { k: "Finance", v: "Invoices matched against verified work. No guessing. No disputes." },
          ].map((b, i) => (
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
