import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expériences - Léo Couchoud",
  description:
    "Parcours professionnel de Léo Couchoud : stages en SEO, consulting et marketing digital.",
};

const experiences = [
  {
    num: "01",
    role: "Stagiaire - Intégration d'IA, SEO & Audits",
    company: "TechGuys",
    location: "Montréal, Canada",
    period: "Mars 2026 - Mai 2026",
    duration: "12 semaines · 40h/semaine",
    tasks: [
      "Audits SEO complets : technique, on-page, analyse concurrentielle",
      "Recherche de mots-clés et optimisation du référencement naturel",
      "Rédaction web, briefs éditoriaux et mise à jour de sites clients",
      "Suivi de positionnement, veille et amélioration UX",
      "Soutien aux projets digitaux et collaboration directe avec la direction",
      "Contact direct avec les clients, présentation d'audits",
    ],
    tags: ["SEO", "Audit", "Semrush", "Screaming Frog", "GSC", "Rédaction web"],
    current: true,
  },
  {
    num: "02",
    role: "Stagiaire - Marketing Digital & SEO",
    company: "Panda Communication",
    location: "Valenciennes, France",
    period: "Mars 2025 - Mai 2025",
    duration: "8 semaines · 32h/semaine",
    tasks: [
      "Automatisation des process marketing grâce à l'Intelligence Artificielle",
      "Rédaction et optimisation SEO de contenus web (articles, pages, fiches produits)",
      "Pilotage de campagnes SEO/SEA (Semrush, WordPress)",
      "Développement de stratégies de mots-clés et netlinking",
      "Création et planification de contenu pour les réseaux sociaux",
      "Analyse des performances via Google Analytics et recommandations data-driven",
    ],
    tags: ["SEO/SEA", "Automatisation IA", "Google Analytics", "WordPress", "Social Media"],
    current: false,
  },
  {
    num: "03",
    role: "Responsable Communication Digitale",
    company: "GreenTC - Association Étudiante",
    location: "IUT de Valenciennes",
    period: "Septembre 2024 - Septembre 2025",
    duration: "1 an",
    tasks: [
      "Planification et exécution de campagnes Instagram : contenu, calendrier éditorial, engagement",
      "Augmentation de l'engagement et de la portée par la création de contenu ciblé",
      "Coordination d'une équipe de contributeurs pour la gestion de la présence digitale",
      "Organisation de collectes de vêtements, friperie solidaire, campagnes écoresponsables",
      "Campagne de prospection pour les Restos du Cœur.",
    ],
    tags: ["Social Media", "Instagram", "Stratégie de contenu", "Coordination"],
    current: false,
  },
  {
    num: "04",
    role: "Stagiaire - Vente & Merchandising",
    company: "JOTT",
    location: "Valenciennes, France",
    period: "Décembre 2023 - Janvier 2024",
    duration: "4 semaines · 35h/semaine",
    tasks: [
      "Vente et conseil client : accueil, analyse des besoins et accompagnement personnalisé",
      "Merchandising : mise en valeur des produits, respect des préconisations visuelles",
      "Gestion des stocks : réception, contrôle de la marchandise, traitement des flux",
      "Organisation logistique : rangement et optimisation de la réserve",
      "Réorganisation de l'espace de vente en période de liquidation",
    ],
    tags: ["Vente", "Merchandising", "Gestion stocks", "Relation client"],
    current: false,
  },
];

export default function Experiences() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-12 bg-white border-b border-[#c6c6c6]">
        <div className="text-[0.75rem] font-black tracking-[0.4em] uppercase mb-8 opacity-40">
          04 - EXPÉRIENCES
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-12">
          PARCOURS<br />PRO
        </h1>
        <div className="w-24 h-1 bg-black" />
      </section>

      {/* Timeline */}
      <section className="bg-[#f9f9f9]">
        {experiences.map((exp, i) => (
          <div
            key={exp.num}
            className={`grid grid-cols-1 md:grid-cols-12 border-b border-[#c6c6c6] ${
              i % 2 === 0 ? "bg-white" : "bg-[#f3f3f3]"
            }`}
          >
            {/* Left - index + period */}
            <div className="md:col-span-3 p-8 md:p-12 border-r border-[#c6c6c6] flex flex-col justify-between gap-8">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-neutral-300 block mb-6">
                  {exp.num}
                </span>
                {exp.current && (
                  <span className="bg-black text-white px-3 py-1 text-[0.6875rem] font-black tracking-widest uppercase inline-block mb-4">
                    EN COURS
                  </span>
                )}
                <p className="font-black text-lg tracking-tighter uppercase leading-tight">
                  {exp.period}
                </p>
                <p className="text-[0.6875rem] font-black tracking-[0.2em] uppercase text-neutral-400 mt-2">
                  {exp.duration}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#e8e8e8] text-black px-2 py-1 font-black text-[0.625rem] tracking-wider uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - content */}
            <div className="md:col-span-9 p-8 md:p-12">
              <div className="text-[0.6875rem] font-black tracking-[0.3em] uppercase mb-4 text-neutral-400">
                {exp.company} · {exp.location}
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-tight mb-8">
                {exp.role}
              </h2>
              <ul className="flex flex-col gap-4">
                {exp.tasks.map((task, j) => (
                  <li key={j} className="flex items-start gap-4">
                    <span className="text-neutral-300 font-black text-sm mt-0.5 shrink-0">
                      -
                    </span>
                    <p className="text-[#5f5e5e] leading-relaxed">{task}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
          Voir mes<br />formations
        </p>
        <a
          href="/formations"
          className="bg-white text-black px-12 py-5 font-black tracking-tighter uppercase text-lg transition-all hover:italic hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          Formations →
        </a>
      </section>
    </>
  );
}
