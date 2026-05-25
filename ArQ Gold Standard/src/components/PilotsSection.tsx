import { motion } from "framer-motion";

const stats = [
  { k: "3+", v: "Active pilots" },
  { k: "SE / FI", v: "On real sites" },
  { k: "2015", v: "Building since" },
  { k: "~90", v: "Proprietary functions" },
];

export default function PilotsSection() {
  return (
    <section id="pilots" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-px bg-primary/15">
          {stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background p-8 md:p-10"
            >
              <div className="font-display text-5xl md:text-6xl text-primary leading-none mb-3">{s.k}</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{s.v}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            { q: "Finally a system that talks the language we actually use on site.", who: "Daniel Karlström", role: "Project Manager · Salbohed Bygg · FI" },
            { q: "We stopped chasing paper. Started chasing progress.", who: "Project Manager", role: "AE Byggkvalitet · SE" },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-primary p-8 bg-card"
            >
              <p className="font-display text-2xl md:text-3xl text-foreground mb-6 leading-tight">"{t.q}"</p>
              <p className="font-mono text-xs text-primary uppercase tracking-widest">{t.who}</p>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
