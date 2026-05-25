import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FoundersSection() {
  const { t } = useLanguage();
  const f = t.founders;

  return (
    <section id="crew" className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <div className="sticker mb-6">{f.tag}</div>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] text-foreground leading-[0.95]">
            {f.h2line1}<br />
            <span className="text-primary">{f.h2accent}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-primary/15">
          {f.members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-10 group"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-primary/10 border border-primary/40 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <span className="font-display text-3xl text-primary group-hover:text-primary-foreground">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl text-foreground">{member.name}</h3>
                  <p className="font-mono text-xs text-primary uppercase tracking-widest mt-1">{member.title}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-base mb-6">{member.text}</p>
              <span className="sticker">{member.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
