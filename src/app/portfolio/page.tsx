import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Léo Couchoud",
  description: "Projets et réalisations de Léo Couchoud : audits SEO, projets entrepreneuriaux, communication digitale.",
};

const projects = [
  {
    num: "01",
    title: "Audits SEO & Stratégie Digitale",
    company: "TechGuys",
    location: "Montréal, Canada",
    period: "Mars — Mai 2026",
    tags: ["SEO Technique", "On-page", "Semrush", "Screaming Frog", "GSC"],
    desc: "Réalisation d'audits SEO complets (technique, on-page, concurrentiel), recherche de mots-clés et optimisation du référencement naturel. Rédaction web, briefs éditoriaux, suivi de positionnement et collaboration directe avec la direction.",
    results: null, // TODO: contenu à fournir
  },
  {
    num: "02",
    title: "Marketing Digital & SEO",
    company: "Panda Communication",
    location: "Valenciennes, France",
    period: "Mars — Mai 2025",
    tags: ["SEO/SEA", "Automatisation IA", "Google Analytics", "WordPress"],
    desc: "Automatisation des process marketing grâce à l'IA. Rédaction et optimisation SEO de contenus web. Pilotage de campagnes SEO/SEA, développement de stratégies de mots-clés et analyse des performances.",
    results: null, // TODO: contenu à fournir
  },
  {
    num: "03",
    title: "WaterBreaker",
    company: "Projet Entrepreneurial",
    location: "IUT de Valenciennes",
    period: "2024 — 2025",
    tags: ["Business Model", "Pitch", "Analyse de marché", "Domotique"],
    desc: "Concept de start-up anti-inondations développé dans le cadre du BUT. Système de prévention basé sur la domotique. Co-conception du modèle économique, analyse de marché et pitch investisseurs.",
    results: "Modèle économique complet, étude de marché, présentation investisseurs.",
  },
  {
    num: "04",
    title: "MateBoost",
    company: "Projet Entrepreneurial",
    location: "IUT de Valenciennes",
    period: "2024 — 2025",
    tags: ["Branding", "Go-to-market", "Marketing mix", "Communication digitale"],
    desc: "Création d'une marque de maté commerce équitable. Création de l'identité de marque, plan de communication digitale et stratégie go-to-market.",
    results: "Identité de marque complète, plan de communication, stratégie de lancement.",
  },
  {
    num: "05",
    title: "Business Game UPHF",
    company: "Université Polytechnique Hauts-de-France",
    location: "Valenciennes",
    period: "2024",
    tags: ["Finance", "Stratégie", "Leadership", "Décision sous pression"],
    desc: "Simulation compétitive inter-équipes. Leadership décisionnel, gestion finance/marketing/opérations, analyse stratégique en temps réel.",
    results: "2ème place sur l'ensemble des équipes participantes.",
  },
  {
    num: "06",
    title: "Communication Digitale GreenTC",
    company: "Association Étudiante GreenTC",
    location: "IUT de Valenciennes",
    period: "Sept. 2024 — Sept. 2025",
    tags: ["Social Media", "Stratégie de contenu", "Instagram", "Coordination"],
    desc: "Responsable Communication Digitale. Planification et exécution de campagnes Instagram, coordination d'une équipe de contributeurs, organisation d'événements associatifs.",
    results: "Augmentation de l'engagement et de la portée sur Instagram.",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-white border-b border-[#c6c6c6]">
        <div className="text-[0.75rem] font-black tracking-[0.4em] uppercase mb-8 opacity-40">
          03 — PORTFOLIO
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-12">
          PROJETS &amp;<br />RÉALISATIONS
        </h1>
        <div className="w-24 h-1 bg-black" />
      </section>

      {/* Projects grid */}
      <section className="bg-[#f9f9f9] border-b border-[#c6c6c6]">
        {projects.map((project, i) => (
          <div
            key={project.num}
            className={`grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-[#c6c6c6] ${
              i % 2 === 0 ? "bg-white" : "bg-[#f3f3f3]"
            }`}
          >
            {/* Number column */}
            <div className="md:col-span-1 p-8 md:p-12 border-r border-[#c6c6c6] flex items-start">
              <span className="text-xs font-black uppercase tracking-widest text-neutral-300">
                {project.num}
              </span>
            </div>

            {/* Content */}
            <div className="md:col-span-8 p-8 md:p-12 border-r border-[#c6c6c6]">
              <div className="text-[0.6875rem] font-black tracking-[0.3em] uppercase mb-4 text-neutral-400">
                {project.company} · {project.location} · {project.period}
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6">
                {project.title}
              </h2>
              <p className="text-[#5f5e5e] leading-relaxed mb-6">{project.desc}</p>
              {project.results ? (
                <div className="bg-black text-white p-4 inline-block">
                  <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase block mb-1 opacity-60">
                    RÉSULTAT
                  </span>
                  <p className="font-bold text-sm">{project.results}</p>
                </div>
              ) : (
                <div className="border-2 border-dashed border-[#c6c6c6] p-4 inline-block">
                  <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-300">
                    {/* TODO: contenu à fournir — métriques */}
                    RÉSULTATS À COMPLÉTER
                  </span>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col gap-3">
              <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase mb-2 text-neutral-400 block">
                COMPÉTENCES
              </span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#e8e8e8] text-black px-3 py-1.5 font-black text-xs tracking-wider uppercase inline-block w-fit"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
          Parlons de<br />votre projet
        </p>
        <a
          href="/contact"
          className="bg-white text-black px-12 py-5 font-black tracking-tighter uppercase text-lg transition-all hover:italic hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          Me contacter →
        </a>
      </section>
    </>
  );
}
