import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Léo Couchoud",
  description: "Projets et réalisations de Léo Couchoud : audits SEO, projets entrepreneuriaux, communication digitale.",
};

// docStatus: "en_cours" = rapport pas encore disponible (bouton chantier)
// docPath: chemin vers le PDF dans /public/docs/ quand disponible
const rotations = ["-3deg", "2deg", "-2deg", "3deg", "-1deg", "2deg"];

const projects = [
  {
    num: "01",
    title: "Audits SEO & Stratégie Digitale",
    company: "TechGuys",
    location: "Montréal, Canada",
    period: "Mars - Mai 2026",
    tags: ["SEO Technique", "On-page", "Semrush", "Screaming Frog", "GSC", "VSCode"],
    desc: "Réalisation d'audits SEO complets (technique, on-page, concurrentiel), recherche de mots-clés et optimisation du référencement naturel. Rédaction web, briefs éditoriaux, suivi de positionnement et collaboration directe avec la direction.",
    docPath: null,
    docStatus: "en_cours" as const,
    logo: "techguys.png",
  },
  {
    num: "02",
    title: "Marketing Digital & SEO",
    company: "Panda Communication",
    location: "Valenciennes, France",
    period: "Mars - Mai 2025",
    tags: ["SEO/SEA", "Automatisation IA", "Google Analytics", "WordPress"],
    desc: "Automatisation des process marketing grâce à l'IA. Rédaction et optimisation SEO de contenus web. Pilotage de campagnes SEO/SEA, développement de stratégies de mots-clés et analyse des performances.",
    docPath: "/docs/Panda_Communication.pdf",
    docStatus: null,
    logo: "panda-communication.png",
  },
  {
    num: "03",
    title: "WaterBreaker",
    company: "Projet Entrepreneurial",
    location: "IUT de Valenciennes",
    period: "2024 - 2025",
    tags: ["Business Model", "Pitch", "Analyse de marché", "Domotique", "Gestion de projet", "Leadership", "Travail d'équipe"],
    desc: "Concept de start-up anti-inondations développé dans le cadre du BUT. Système de prévention basé sur la domotique. Co-conception du modèle économique, analyse de marché et pitch investisseurs.",
    docPath: "/docs/water-breaker.pdf",
    docStatus: null,
    logo: "water-breaker.png",
  },
  {
    num: "04",
    title: "Store Création",
    company: "Projet Entrepreneurial",
    location: "IUT de Valenciennes",
    period: "2024 - 2025",
    tags: ["E-commerce", "Stratégie digitale", "Marketing mix", "Communication digitale"],
    desc: "Création d'une boutique digitale de A à Z. Conception de l'offre, mise en place de la stratégie commerciale et digitale, identité de marque et plan de communication.",
    docPath: "/docs/Store_Creation_Complet.pdf",
    docStatus: null,
    logo: "store-creation.png",
  },
  {
    num: "05",
    title: "Communication Digitale GreenTC",
    company: "Association Étudiante GreenTC",
    location: "IUT de Valenciennes",
    period: "Sept. 2024 - Sept. 2025",
    tags: ["Social Media", "Stratégie de contenu", "Instagram", "Coordination", "Design graphique", "Canva"],
    desc: "Responsable Communication Digitale. Planification et exécution de campagnes Instagram, coordination d'une équipe de contributeurs, organisation d'événements associatifs.",
    docPath: "/docs/greentc.pdf",
    docStatus: null,
    logo: "greentc.png",
  },
  {
    num: "06",
    title: "Business Game UPHF",
    company: "Université Polytechnique Hauts-de-France",
    location: "Valenciennes",
    period: "2024",
    tags: ["Finance", "Stratégie", "Leadership", "Décision sous pression"],
    desc: "Simulation compétitive inter-équipes. Leadership décisionnel, gestion finance/marketing/opérations, analyse stratégique en temps réel.",
    docPath: "/docs/Business_Game_BelleRive.pdf",
    docStatus: null,
    logo: "businessgame.png",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-12 bg-white border-b border-[#c6c6c6]">
        <div className="text-[0.75rem] font-black tracking-[0.4em] uppercase mb-8 opacity-40">
          03 - PORTFOLIO
        </div>
        <h1 className="text-4xl sm:text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-12">
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
            <div className="md:col-span-1 py-4 md:py-12 px-4 md:px-5 border-b md:border-b-0 md:border-r border-[#c6c6c6] flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6">
              <span className="text-xs font-black uppercase tracking-widest text-neutral-300">
                {project.num}
              </span>
              {project.logo && (
                <div
                  className="w-10 h-10 md:w-16 md:h-16 bg-white border border-[#e8e8e8] shadow-md flex items-center justify-center p-1.5 md:p-2 shrink-0"
                  style={{ transform: `rotate(${rotations[i % rotations.length]})` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/logos/${project.logo}`}
                    alt={project.company}
                    className="w-full h-full object-contain"
                    style={{ filter: "saturate(80%)" }}
                  />
                </div>
              )}
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
              {project.docStatus === "en_cours" ? (
                <div className="border-2 border-dashed border-[#c6c6c6] p-4 inline-flex items-center gap-3">
                  <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400">
                    RAPPORT DE STAGE
                  </span>
                  <span className="bg-[#f3f3f3] border border-[#c6c6c6] text-[#5f5e5e] px-3 py-1 font-black text-[0.6rem] tracking-[0.25em] uppercase">
                    EN COURS
                  </span>
                </div>
              ) : project.docPath ? (
                <a
                  href={project.docPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-4 inline-flex items-center gap-4 font-black tracking-tighter uppercase transition-all hover:italic hover:scale-105 active:scale-95"
                >
                  <span className="text-[0.6875rem] tracking-[0.3em] opacity-60">PDF</span>
                  Voir le dossier →
                </a>
              ) : null}
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
      <section className="py-16 md:py-24 px-6 md:px-12 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8">
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
