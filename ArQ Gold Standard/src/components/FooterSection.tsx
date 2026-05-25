import { Linkedin } from "lucide-react";
import logo from "@/assets/arq-logo.png";

export default function FooterSection() {
  return (
    <footer className="bg-background border-t border-primary/20 relative overflow-hidden">
      {/* Giant brand mark */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="font-display text-[clamp(5rem,22vw,20rem)] text-foreground/[0.04] leading-none select-none pointer-events-none -mb-8">
          BUILD MORE.
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-end relative">
          <div className="md:col-span-5">
            <img src={logo} alt="ArQ" className="h-10 w-auto brightness-0 invert mb-4" />
            <p className="text-muted-foreground text-sm max-w-xs">The execution system built for the people who actually build.</p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-x-6 gap-y-3">
            {[
              { label: "Problem", href: "#problem" },
              { label: "System", href: "#system" },
              { label: "Crew", href: "#crew" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="md:col-span-3 flex md:justify-end items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:eric@getarq.se" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              eric@getarq.se
            </a>
          </div>
        </div>

        <div className="border-t border-primary/15 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">© 2025 ArQ AB · getarq.se</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Built in the Nordics ▲ Made for the field</span>
        </div>
      </div>
    </footer>
  );
}
