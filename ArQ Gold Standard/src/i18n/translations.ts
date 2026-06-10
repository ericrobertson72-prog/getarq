export type Lang = "sv" | "en";

const sv = {
  meta: {
    title: "ArQ — Bygg mer. Snabbare. Smartare.",
    description:
      "Exekveringssystemet för dig som faktiskt bygger. Mindre papper. Mer framsteg. Boka demo.",
  },
  nav: {
    problem: "Problemet",
    system: "Systemet",
    contact: "Kontakt",
    bookDemo: "Boka Demo →",
    liveOnSites: "Live på platser i SE / FI",
  },
  hero: {
    live: "LIVE PÅ BYGGPLATSER NU",
    line1: "BYGG MER.",
    line2: "SNABBARE.",
    line3: "SMARTARE.",
    sub: "Exekveringssystemet för dig som faktiskt bygger. Mindre papper. Mer framsteg.",
    cta1: "Boka Demo →",
    cta2: "Se Systemet",
    ticker: [
      "▲ Aktivitet",
      "● Kvalitet",
      "■ Ekonomi",
      "◆ SBEF / BSAB / CoClass",
      "▲ Byggt av byggare",
      "● Fältet först",
      "■ Nordiska standarder",
    ],
  },
  problem: {
    tag: "▲ Problemet",
    h2line1: "BYGG-BRANSCHEN",
    h2line2: "ÄR TRASIG.",
    h2accent: "VI FIXAR DET.",
    intro:
      "Varje projekt förlorar pengar på samma tre saker. Vi byggde ArQ för att vi tröttnade på att se det hända.",
    items: [
      {
        no: "01",
        head: "5-8 frånkopplade system.",
        text: "Planer i en fil. Avvikelser i en annan app. Fakturor ingenstans. Ingen ser hela bilden.",
      },
      {
        no: "02",
        head: "Fel kostar en förmögenhet.",
        text: "Hittade veckor för sent. När betongen redan är gjuten. När fakturan är betald.",
      },
      {
        no: "03",
        head: "De bästa slutar.",
        text: "20 år av know-how går ut genom dörren. Inget fångar det. Inget återanvänder det.",
      },
    ],
    quote: '"JAG VILL BARA ',
    quoteAccent: "BYGGA.",
    quoteEnd: '"',
    quoteCredit: "— Varje snickare, någonsin",
  },
  solution: {
    tag: "● Systemet",
    h2line1: "EN APP.",
    h2accent: "HELA BYGGET.",
    sub: "Aktivitet. Kvalitet. Ekonomi. Kopplat till nordiska standarder (SBEF, BSAB, CoClass). Byggt för att köras på bygget, inte i styrelserummet.",
    screens: [
      { tag: "01 / Översikt", title: "Realtidskontroll på plats" },
      { tag: "02 / Projekt", title: "Alla jobb, ett ställe" },
      { tag: "03 / Arbetsflöde", title: "Från plan till faktura" },
      { tag: "04 / Aktivitet", title: "Signering på plats" },
      { tag: "05 / Platsplanering", title: "Heatmaps & APD" },
    ],
    pillars: [
      {
        k: "Aktivitet",
        v: "Rollbaserad arbetsförberedelse. AI sätter upp ditt projekt enligt nordiska standarder.",
      },
      {
        k: "Kvalitet",
        v: "KMA & HSE i arbetsflödet. Avvikelser kopplade till den aktivitet som orsakade dem.",
      },
      {
        k: "Ekonomi",
        v: "Fakturor matchade mot verifierat arbete. Ingen gissning. Inga tvister.",
      },
    ],
  },
  why: {
    tag: "■ Manifest",
    line1: "BYGGT AV",
    line1accent: "BYGGARE",
    line2: "INTE AV",
    line2accent: "KONSULTER",
    body: "20+ år på riktiga byggplatser. ~90 edge ai-funktioner inbyggda i nordiska standarder. ArQ körs i lastbilen, i gropen, på platsen, där jobbet faktiskt händer.",
    tags: ["▲ Fältet först", "● Nordiskbyggt", "■ Inga krumbukter", "◆ Byggt för gänget"],
  },
  pilots: {
    heading: "Hört från våra",
    headingAccent: "Piloter",
    testimonials: [
      {
        q: "If this is an MVP, then it is incredibly comprehensive and well done.",
        who: "Henrik Ljungberg",
        role: "Development Lead, Autodesk Expert · SKANSKA",
      },
      {
        q: "It is basically work preparation on steroids, and that is the most important moment.",
        who: "Lotta Vibeck",
        role: "Digitalization Expert · ReBid, Bygglyftet",
      },
      {
        q: "ArQ has revolutionized how we handle projects. We save countless hours every week on administration.",
        who: "Lucas Ingbro",
        role: "Construction Manager & CEO · AE Byggkvalitet",
      },
      {
        q: "ArQ makes sure you actually report, instead of just not doing it.",
        who: "Daniel Karlström",
        role: "HSE Manager · Finland",
      },
    ],
  },
  contact: {
    tag: "→ Vi ses",
    h2line1: "BOKA",
    h2line2: "EN",
    h2accent: "DEMO",
    h2line3: "30 MIN.",
    sub: "Vi väljer ett begränsat antal pilotteam per kvartal. Om du bygger vill vi höra från dig.",
    labelEmail: "E-post",
    labelWeb: "Webb",
    f01: "01 / Namn",
    f02: "02 / Företag",
    f03: "03 / E-post",
    f04: "04 / Projekt",
    p01: "Ditt namn",
    p02: "Vad du bygger",
    p03: "du@foretag.se",
    p04: "Berätta om projektet",
    submit: "Boka demo →",
    successTitle: "MOTTAGET.",
    successSub: "Vi hör av oss inom 48h.",
  },
  footer: {
    tagline: "Exekveringssystemet byggt för dom som faktiskt bygger.",
    links: [
      { label: "Problem", href: "#problem" },
      { label: "System", href: "#system" },
      { label: "Kontakt", href: "#contact" },
    ],
    copy: "© 2025 ArQ · www.getarq.se",
    built: "Byggt i Norden ▲ För fältet",
  },
};

const en = {
  meta: {
    title: "ArQ — Build More. Faster. Smarter.",
    description:
      "The execution system built for the people who actually build. Less paperwork, more progress. Book a demo now.",
  },
  nav: {
    problem: "The Problem",
    system: "The System",
    contact: "Contact",
    bookDemo: "Book Demo →",
    liveOnSites: "Live on sites in SE / FI",
  },
  hero: {
    live: "LIVE ON SITES IN EU NOW",
    line1: "BUILD MORE.",
    line2: "FASTER.",
    line3: "SMARTER.",
    sub: "The execution system for the people who actually build. Less paperwork. More progress.",
    cta1: "Book Demo →",
    cta2: "See the System",
    ticker: [
      "▲ Activity",
      "● Quality",
      "■ Finance",
      "◆ SBEF / BSAB / CoClass",
      "▲ Built by builders",
      "● Field-first",
      "■ Nordic standards",
    ],
  },
  problem: {
    tag: "▲ The Problem",
    h2line1: "CONSTRUCTION",
    h2line2: "IS BROKEN.",
    h2accent: "WE FIX IT.",
    intro:
      "Every site loses money to the same three things. We built ArQ because we got tired of watching it happen.",
    items: [
      {
        no: "01",
        head: "5-8 disconnected systems.",
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
    ],
    quote: '"I JUST WANT TO ',
    quoteAccent: "BUILD.",
    quoteEnd: '"',
    quoteCredit: "— Every carpenter, ever",
  },
  solution: {
    tag: "● The System",
    h2line1: "ONE APP.",
    h2accent: "THE WHOLE BUILD.",
    sub: "Activity. Quality. Finance. Tied to Nordic standards (SBEF, BSAB, CoClass). Built to run in the mud, not in the boardroom.",
    screens: [
      { tag: "01 / Overview", title: "Real-time site control" },
      { tag: "02 / Projects", title: "Every job, one place" },
      { tag: "03 / Workflow", title: "From plan to invoice" },
      { tag: "04 / Activity", title: "Sign-off on the spot" },
      { tag: "05 / Site planning", title: "Heatmaps & APD" },
    ],
    pillars: [
      {
        k: "Activity",
        v: "Role-based work prep. AI sets up your project on Nordic standards.",
      },
      {
        k: "Quality",
        v: "QA & HSE in the workflow. Deviations linked to the activity that caused them.",
      },
      {
        k: "Finance",
        v: "Invoices matched against verified work. No guessing. No disputes.",
      },
    ],
  },
  why: {
    tag: "■ Manifesto",
    line1: "BUILT BY",
    line1accent: "BUILDERS",
    line2: "NOT BY",
    line2accent: "CONSULTANTS",
    body: "20+ years on real sites. ~90 edge ai functions baked into Nordic standards. ArQ runs in the truck, in the trench, on the site, where the work actually happens.",
    tags: ["▲ Field-first", "● Nordic-built", "■ No BS", "◆ Made for the crew"],
  },
  pilots: {
    heading: "Heard from our",
    headingAccent: "Pilots",
    testimonials: [
      {
        q: "If this is an MVP, then it is incredibly comprehensive and well done.",
        who: "Henrik Ljungberg",
        role: "Development Lead, Autodesk Expert · SKANSKA",
      },
      {
        q: "It is basically work preparation on steroids, and that is the most important moment.",
        who: "Lotta Vibeck",
        role: "Digitalization Expert · ReBid, Bygglyftet",
      },
      {
        q: "ArQ has revolutionized how we handle projects. We save countless hours every week on administration.",
        who: "Lucas Ingbro",
        role: "Construction Manager & CEO · AE Byggkvalitet",
      },
      {
        q: "ArQ makes sure you actually report, instead of just not doing it.",
        who: "Daniel Karlström",
        role: "HSE Manager · Finland",
      },
    ],
  },
  contact: {
    tag: "→ Let's talk",
    h2line1: "BOOK",
    h2line2: "A",
    h2accent: "DEMO",
    h2line3: "30 MIN.",
    sub: "We pick a limited number of pilot crews per quarter. If you build, we want to hear from you.",
    labelEmail: "Email",
    labelWeb: "Web",
    f01: "01 / Name",
    f02: "02 / Company",
    f03: "03 / Email",
    f04: "04 / Project",
    p01: "Your name",
    p02: "What you build",
    p03: "you@company.se",
    p04: "Tell us about the site",
    submit: "Book the demo →",
    successTitle: "GOT IT.",
    successSub: "We'll be in touch inside 48h.",
  },
  footer: {
    tagline: "The execution system built for the people who actually build.",
    links: [
      { label: "Problem", href: "#problem" },
      { label: "System", href: "#system" },
      { label: "Contact", href: "#contact" },
    ],
    copy: "© 2025 ArQ · www.getarq.se",
    built: "Built in the Nordics ▲ Made for the field",
  },
};

export const translations: Record<Lang, typeof sv> = { sv, en };
export type Translations = typeof sv;
