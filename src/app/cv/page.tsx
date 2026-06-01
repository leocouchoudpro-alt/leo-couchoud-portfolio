import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CvFlowingRibbonBackground from "@/components/CvFlowingRibbonBackground";
export const metadata: Metadata = {
  title: "CV - Léo Couchoud",
  description:
    "Curriculum vitae de Léo Couchoud - Marketing Digital & Management. Téléchargement disponible.",
};

export default function CV() {
  return (
    <>
      {/* Header — ruban Spline en arrière-plan */}
      <section className="relative min-h-[min(52vh,520px)] overflow-hidden bg-white pt-28 md:pt-32 pb-8 md:pb-10 px-6 md:px-12">
        {/* 1. Photo en dessous */}
        <div className="cv-portrait pointer-events-none absolute bottom-6 right-6 z-10 hidden w-48 md:block md:bottom-8 md:right-12 md:w-56 xl:w-64">
          <Image
            src="/leo-couchoud-home.png"
            alt="Léo Couchoud"
            width={320}
            height={400}
            className="cv-portrait__img h-auto w-full object-cover object-[center_20%]"
            unoptimized
          />
        </div>

        {/* 2. Ruban au-dessus de la photo */}
        <div className="cv-ribbon-bg absolute inset-0 z-20">
          <CvFlowingRibbonBackground />
        </div>

        {/* 3. Texte au-dessus de tout */}
        <div className="relative z-30 pointer-events-none">
          <div className="text-[0.75rem] font-black tracking-[0.4em] uppercase mb-6 opacity-40">
            07 - CV
          </div>
          <div className="lg:max-w-xl shrink-0">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
              CURRICULUM
            </h1>
            <div className="w-24 h-1 bg-black" />
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-black text-white border-b border-[#c6c6c6]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[0.6875rem] font-black tracking-[0.4em] uppercase opacity-50 mb-4">
              DOCUMENT PDF
            </p>
            <p className="text-lg sm:text-2xl md:text-4xl font-black tracking-tighter uppercase leading-tight break-all sm:break-normal">
              CV-Couchoud.pdf
            </p>
          </div>
          <a
            href="/docs/CV-Couchoud.pdf"
            className="bg-white text-black px-8 sm:px-12 py-4 sm:py-6 font-black tracking-tighter uppercase text-base sm:text-xl transition-all hover:italic hover:scale-105 active:scale-95 flex items-center gap-4"
            download
          >
            <span>↓</span>
            Télécharger
          </a>
        </div>
      </section>

      {/* Résumé visuel */}
      <section className="bg-[#f9f9f9]">

        {/* Identité */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#c6c6c6]">
          <div className="md:col-span-3 p-8 md:p-12 border-r border-[#c6c6c6] bg-white">
            <span className="text-[0.6875rem] font-black tracking-[0.4em] uppercase text-neutral-400 block mb-6">
              IDENTITÉ
            </span>
          </div>
          <div className="md:col-span-9 p-8 md:p-12 bg-white">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-2">
              LÉO COUCHOUD
            </h2>
            <p className="text-xl font-black tracking-tighter uppercase text-[#5f5e5e] mb-8">
              Marketing Digital & Management
            </p>
            <div className="flex flex-wrap gap-6 text-[0.6875rem] font-black tracking-[0.2em] uppercase text-neutral-400">
              <span>leocouchoudpro@gmail.com</span>
              <span>+33 7 85 82 00 94</span>
              <span>Valenciennes / Montréal</span>
              <a href="https://www.linkedin.com/in/leo-couchoud/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                linkedin.com/in/LeoCouchoud
              </a>
            </div>
          </div>
        </div>

        {/* Expériences */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#c6c6c6]">
          <div className="md:col-span-3 p-8 md:p-12 border-r border-[#c6c6c6] bg-[#f3f3f3]">
            <span className="text-[0.6875rem] font-black tracking-[0.4em] uppercase text-neutral-400 block mb-6">
              EXPÉRIENCES
            </span>
          </div>
          <div className="md:col-span-9 p-8 md:p-12 bg-[#f3f3f3]">
            <div className="flex flex-col gap-10">
              {[
                { period: "Mars–Mai 2026", role: "Consultant IA, Data & SEO", company: "TechGuys · Montréal" },
                { period: "Mars–Mai 2025", role: "Stagiaire Marketing Digital & SEO", company: "Panda Communication · Valenciennes" },
                { period: "Sept. 2024–2025", role: "Responsable Communication Digitale", company: "GreenTC · IUT de Valenciennes" },
                { period: "Déc. 2023–Jan. 2024", role: "Stagiaire Vente & Merchandising", company: "JOTT · Valenciennes" },
              ].map(({ period, role, company }) => (
                <div key={role} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                  <span className="text-[0.6875rem] font-black tracking-[0.2em] uppercase text-neutral-400 shrink-0 w-40">
                    {period}
                  </span>
                  <div>
                    <p className="font-black tracking-tighter uppercase">{role}</p>
                    <p className="text-[#5f5e5e] text-sm">{company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formations */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#c6c6c6]">
          <div className="md:col-span-3 p-8 md:p-12 border-r border-[#c6c6c6] bg-white">
            <span className="text-[0.6875rem] font-black tracking-[0.4em] uppercase text-neutral-400 block mb-6">
              FORMATIONS
            </span>
          </div>
          <div className="md:col-span-9 p-8 md:p-12 bg-white">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-[0.6875rem] font-black tracking-[0.2em] uppercase text-neutral-400 shrink-0 w-40">
                  2023 → 2026
                </span>
                <div>
                  <p className="font-black tracking-tighter uppercase">BUT Techniques de Commercialisation</p>
                  <p className="text-[#5f5e5e] text-sm">IUT Valenciennes - Parcours MDEE · En cours</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                <span className="text-[0.6875rem] font-black tracking-[0.2em] uppercase text-neutral-400 shrink-0 w-40">
                  2020 → 2023
                </span>
                <div>
                  <p className="font-black tracking-tighter uppercase">Bac Pro Systèmes Numériques</p>
                  <p className="text-[#5f5e5e] text-sm">Guadeloupe · Mention Très Bien - 16.25/20</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#c6c6c6]">
          <div className="md:col-span-3 p-8 md:p-12 border-r border-[#c6c6c6] bg-[#f3f3f3]">
            <span className="text-[0.6875rem] font-black tracking-[0.4em] uppercase text-neutral-400 block mb-6">
              COMPÉTENCES
            </span>
          </div>
          <div className="md:col-span-9 p-8 md:p-12 bg-[#f3f3f3]">
            <div className="flex flex-wrap gap-2">
              {[
                "SEO/SEA", "Audit SEO", "Semrush", "Screaming Frog", "Google Analytics",
                "Rédaction web", "WordPress", "Prompt engineering", "Automatisation IA", "Social Media",
                "Stratégie digitale", "Business Model", "Pitch", "Gestion de projet",
              ].map((s) => (
                <span key={s} className="bg-white border border-[#c6c6c6] px-3 py-1.5 font-black text-xs tracking-wider uppercase">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-3 p-8 md:p-12 border-r border-[#c6c6c6] bg-white">
            <span className="text-[0.6875rem] font-black tracking-[0.4em] uppercase text-neutral-400 block mb-6">
              RÉSEAUX
            </span>
          </div>
          <div className="md:col-span-9 p-8 md:p-12 bg-white flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/leo-couchoud/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 font-black tracking-tighter uppercase transition-all hover:italic hover:scale-105 active:scale-95"
            >
              LinkedIn →
            </a>
            <Link
              href="/contact"
              className="border-2 border-black text-black px-8 py-4 font-black tracking-tighter uppercase transition-all hover:bg-black hover:text-white active:scale-95"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
