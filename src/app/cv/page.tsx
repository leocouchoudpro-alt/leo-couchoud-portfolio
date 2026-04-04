import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "CV - Léo Couchoud",
  description:
    "Curriculum vitae de Léo Couchoud - Marketing Digital & Stratégie. Téléchargement disponible.",
};

export default function CV() {
  return (
    <>
      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-white border-b border-[#c6c6c6]">
        <div className="text-[0.75rem] font-black tracking-[0.4em] uppercase mb-8 opacity-40">
          07 - CV
        </div>
        <div className="flex items-end justify-between gap-8">
          <div>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-12">
              CURRI<br />CULUM
            </h1>
            <div className="w-24 h-1 bg-black" />
          </div>
          <div className="hidden md:block shrink-0 w-60 lg:w-80 -mb-24 -mr-6 md:-mr-12 overflow-hidden self-end">
            <Image
              src="/leo-couchoud-home.png"
              alt="Léo Couchoud"
              width={320}
              height={400}
              className="w-full h-full object-cover object-[center_20%]"
              style={{ filter: "grayscale(100%) contrast(1.05)" }}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24 px-6 md:px-12 bg-black text-white border-b border-[#c6c6c6]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[0.6875rem] font-black tracking-[0.4em] uppercase opacity-50 mb-4">
              DOCUMENT PDF
            </p>
            <p className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
              CV_Leo_Couchoud.pdf
            </p>
          </div>
          <a
            href="/docs/CV_Leo_Couchoud.pdf"
            className="bg-white text-black px-12 py-6 font-black tracking-tighter uppercase text-xl transition-all hover:italic hover:scale-105 active:scale-95 whitespace-nowrap flex items-center gap-4"
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
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-2">
              LÉO COUCHOUD
            </h2>
            <p className="text-xl font-black tracking-tighter uppercase text-[#5f5e5e] mb-8">
              Marketing Digital & Stratégie · Consultant en devenir
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
                  <p className="text-[#5f5e5e] text-sm">IUT Valenciennes - Parcours MDEBE · En cours</p>
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
                "Rédaction web", "WordPress", "Automatisation IA", "Social Media",
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
