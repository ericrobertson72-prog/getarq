import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang, Translations, translations } from "@/i18n/translations";

const STORAGE_KEY = "arq-lang";
const SUPPORTED: readonly Lang[] = ["sv", "en"] as const;

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

/**
 * Resolve the initial language with a fail-closed precedence:
 *   1. Persisted user choice (localStorage)
 *   2. Browser language (navigator.language) — only matches a supported lang
 *   3. Fallback: "sv" (product default)
 *
 * SSR-safe: returns "sv" when window is undefined.
 */
function resolveInitialLang(): Lang {
  if (typeof window === "undefined") return "sv";

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && (SUPPORTED as readonly string[]).includes(stored)) {
      return stored as Lang;
    }
  } catch {
    // localStorage blocked (private mode, etc.) — fall through
  }

  const nav = (typeof navigator !== "undefined" && navigator.language) || "";
  const prefix = nav.toLowerCase().split("-")[0];
  if ((SUPPORTED as readonly string[]).includes(prefix)) {
    return prefix as Lang;
  }
  // English is the global default; Swedish only for explicitly Swedish browsers.
  return prefix === "sv" ? "sv" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(resolveInitialLang ?? "en");

  // Sync <html lang>, document.title, meta description, and og:* tags on every change.
  // Critical for screen readers, SEO, OG previews, and browser translation features.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const meta = translations[lang].meta;

    document.documentElement.lang = lang;
    document.title = meta.title;

    const setMeta = (selector: string, content: string) => {
      const el = document.head.querySelector<HTMLMetaElement>(selector);
      if (el) el.content = content;
    };
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage failures — runtime state still works.
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    if ((SUPPORTED as readonly string[]).includes(l)) setLangState(l);
  };
  const toggleLang = () => setLangState((l) => (l === "sv" ? "en" : "sv"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
