import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/arq-logo.png";

const navLinks = [
  { label: "The Problem", href: "#problem" },
  { label: "The System", href: "#system" },
  { label: "Crew", href: "#crew" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-background/95 backdrop-blur-md border-b border-primary/15"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center">
              <img src={logo} alt="ArQ" className="h-7 w-auto brightness-0 invert" />
            </a>
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-widest hover:bg-foreground transition-colors"
          >
            Book Demo →
          </a>

          <button
            className="lg:hidden text-foreground p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              <motion.div
                className="flex-1 flex flex-col justify-center gap-2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center gap-4 py-4 border-b border-primary/10"
                    >
                      <span className="font-mono text-xs text-primary/60 uppercase tracking-widest">
                        0{i + 1}
                      </span>
                      <span className="font-display text-3xl uppercase text-foreground group-hover:text-primary transition-colors tracking-wide">
                        {l.label}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: 0.35 }}
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-6 py-4 bg-primary text-primary-foreground text-sm font-mono font-bold uppercase tracking-widest hover:bg-foreground transition-colors"
                >
                  Book Demo →
                </a>
                <p className="text-center mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Live on sites in SE / FI
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
