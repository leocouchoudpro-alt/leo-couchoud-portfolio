import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compétences - Léo Couchoud",
  description:
    "Compétences et outils de Léo Couchoud : SEO, IA, stratégie digitale, gestion de projet et langues.",
};

const categories = [
  {
    num: "01",
    title: "Marketing Digital & SEO",
    skills: [
      "Audit SEO complet (technique, on-page, concurrentiel)",
      "SEO/SEA : Semrush, Screaming Frog, Google Search Console",
      "Gestion d'implémentation SEO",
      "Google Analytics - analyse de données & recommandations",
      "WordPress - mise à jour et optimisation",
      "Stratégie de contenu et rédaction web optimisée",
      "Social media management (Instagram, stratégie d'engagement)",
      "Automatisation des process marketing via l'IA",
    ],
  },
  {
    num: "02",
    title: "Gestion & Leadership",
    skills: [
      "Gestion de projet digital",
      "Coordination d'équipe (association, contributeurs)",
      "Décision stratégique et analyse concurrentielle",
      "Pitch & storytelling (pitch investisseurs, Business Game)",
      "Négociation commerciale",
    ],
  },
  {
    num: "03",
    title: "Business & Stratégie",
    skills: [
      "Analyse de marché et veille concurrentielle",
      "Business model et modélisation économique",
      "Stratégie go-to-market et branding",
      "Marketing mix et communication commerciale",
      "E-business et entrepreneuriat",
    ],
  },
  {
    num: "04",
    title: "Tech & Outils",
    skills: [
      "Intelligence artificielle (Claude, ChatGPT, workflows IA)",
      "VS Code / Claude Code",
      "Google Stitch (design IA)",
      "Semrush · Screaming Frog · Google Search Console · GA",
      "WordPress",
      "Systèmes numériques (formation initiale Bac Pro)",
    ],
  },
  {
    num: "05",
    title: "Soft Skills",
    skills: [
      "Communication client (présentation d'audits, conseil)",
      "Leadership (capitaine basket, coordination d'équipe asso)",
      "Adaptabilité",
      "Curiosité intellectuelle (IA, blockchain, Web3, finance)",
      "Curieux",
      "Autonomie et rigueur",
      "Esprit d'initiative (engagement associatif, investissement)",
      "Anticipation & gestion du risque (prévoir des plans B avant d'agir)",
      "Organisation & méthode (workflow structuré avant chaque projet)",
      "Résilience et positivité",
    ],
  },
];

const langues = [
  { langue: "Français", niveau: "Langue maternelle", pct: 100 },
  { langue: "Anglais", niveau: "Courant (B2/C1)", pct: 72 },
  { langue: "Créole", niveau: "Bon", pct: 65 },
  { langue: "Espagnol", niveau: "Notions", pct: 25 },
];

const outils = [
  "Semrush", "Screaming Frog", "Google Search Console",
  "Google Analytics", "WordPress", "Claude AI", "ChatGPT",
  "Google Stitch", "Canva", "Asana", "Slack", "Instagram",
];

export default function Competences() {
  return (
    <>
      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-white border-b border-[#c6c6c6]">
        <div className="text-[0.75rem] font-black tracking-[0.4em] uppercase mb-8 opacity-40">
          06 - COMPÉTENCES
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-12">
          SKILLS &amp;<br />OUTILS
        </h1>
        <div className="w-24 h-1 bg-black" />
      </section>

      {/* Catégories */}
      <section className="bg-[#f9f9f9] border-b border-[#c6c6c6]">
        {categories.map((cat, i) => (
          <div
            key={cat.num}
            className={`grid grid-cols-1 md:grid-cols-12 border-b border-[#c6c6c6] ${
              i % 2 === 0 ? "bg-white" : "bg-[#f3f3f3]"
            }`}
          >
            <div className="md:col-span-3 p-8 md:p-12 border-r border-[#c6c6c6]">
              <span className="text-xs font-black uppercase tracking-widest text-neutral-300 block mb-6">
                {cat.num}
              </span>
              <h2 className="text-2xl font-black tracking-tighter uppercase leading-tight">
                {cat.title}
              </h2>
            </div>
            <div className="md:col-span-9 p-8 md:p-12">
              <ul className="flex flex-col gap-4">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex items-start gap-4 group">
                    <span className="text-neutral-300 font-black text-sm mt-0.5 shrink-0 group-hover:text-black transition-colors">
                      -
                    </span>
                    <p className="text-[#5f5e5e] leading-relaxed group-hover:text-black transition-colors">
                      {skill}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Langues */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-[#c6c6c6]">
        <div className="text-[0.6875rem] font-black tracking-[0.5em] uppercase mb-16 text-neutral-400">
          LANGUES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-[#c6c6c6]">
          {langues.map(({ langue, niveau, pct }) => (
            <div key={langue} className="p-10 border-r border-b border-[#c6c6c6]">
              <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">
                {langue}
              </h3>
              <p className="text-[0.6875rem] font-black tracking-[0.2em] uppercase text-neutral-400 mb-6">
                {niveau}
              </p>
              <div className="w-full h-1 bg-[#e8e8e8]">
                <div className="h-1 bg-black" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outils */}
      <section className="py-24 px-6 md:px-12 bg-[#f3f3f3] border-b border-[#c6c6c6]">
        <div className="text-[0.6875rem] font-black tracking-[0.5em] uppercase mb-16 text-neutral-400">
          OUTILS MAÎTRISÉS
        </div>
        <div className="flex flex-wrap gap-3">
          {outils.map((outil) => (
            <span
              key={outil}
              className="bg-white border border-[#c6c6c6] text-black px-4 py-3 font-black text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-200 cursor-default"
            >
              {outil}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
          Télécharger<br />mon CV
        </p>
        <a
          href="/cv"
          className="bg-white text-black px-12 py-5 font-black tracking-tighter uppercase text-lg transition-all hover:italic hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          Voir le CV →
        </a>
      </section>
    </>
  );
}
