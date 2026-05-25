import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 -z-10" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="sticker sticker-solid mb-6">→ Let's talk</div>
            <h2 className="font-display text-[clamp(3rem,9vw,8rem)] text-foreground leading-[0.9]">
              BOOK<br />
              A <span className="text-primary">DEMO</span>.<br />
              30 MIN.
            </h2>
            <p className="text-muted-foreground text-lg mt-8 max-w-md">
              We pick a limited number of pilot crews per quarter. If you build, we want to hear from you.
            </p>

            <div className="mt-12 space-y-4">
              <a href="mailto:eric@getarq.se" className="flex items-center justify-between border-b border-primary/20 py-4 group hover:border-primary transition-colors">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Email</span>
                <span className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">eric@getarq.se →</span>
              </a>
              <a href="https://getarq.se" className="flex items-center justify-between border-b border-primary/20 py-4 group hover:border-primary transition-colors">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Web</span>
                <span className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">getarq.se →</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-primary/15 p-8 md:p-10 corner-brackets"
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="font-display text-5xl text-primary mb-3">GOT IT.</div>
                  <p className="text-muted-foreground">We'll be in touch inside 48h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">01 / Name</label>
                    <input type="text" required className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground font-display text-2xl" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">02 / Company</label>
                    <input type="text" required className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground font-display text-2xl" placeholder="What you build" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">03 / Email</label>
                    <input type="email" required className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground font-display text-2xl" placeholder="you@company.se" />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-2">04 / Project</label>
                    <textarea rows={3} className="w-full px-0 py-2 bg-transparent border-0 border-b border-border text-foreground placeholder:text-muted-foreground text-base resize-none" placeholder="Tell us about the site" />
                  </div>
                  <button type="submit" className="w-full mt-6 py-5 bg-primary text-primary-foreground font-mono font-bold text-sm uppercase tracking-widest hover:bg-foreground transition-colors">
                    Book the demo →
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
