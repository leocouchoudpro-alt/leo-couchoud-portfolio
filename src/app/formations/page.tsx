import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations - Léo Couchoud",
  description:
    "Parcours académique de Léo Couchoud : BUT Techniques de Commercialisation et Bac Pro Systèmes Numériques.",
};

export default function Formations() {
  return (
    <>
      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-white border-b border-[#c6c6c6]">
        <div className="text-[0.75rem] font-black tracking-[0.4em] uppercase mb-8 opacity-40">
          05 - FORMATIONS
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-12">
          PARCOURS<br />ACADÉMIQUE
        </h1>
        <div className="w-24 h-1 bg-black" />
      </section>

      {/* BUT TC */}
      <section className="bg-white border-b border-[#c6c6c6]">
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#c6c6c6]">
          <div className="md:col-span-3 p-8 md:p-12 border-r border-[#c6c6c6] bg-black text-white flex flex-col justify-between">
            <div>
              <span className="text-[0.6875rem] font-black tracking-[0.4em] uppercase opacity-50 block mb-6">
                FORMATION PRINCIPALE
              </span>
              <p className="font-black text-3xl tracking-tighter uppercase leading-tight">
                2023<br />→ 2026
              </p>
            </div>
            <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase opacity-60 mt-8 block">
              EN COURS
            </span>
          </div>
          <div className="md:col-span-9 p-8 md:p-12">
            <div className="text-[0.6875rem] font-black tracking-[0.3em] uppercase mb-4 text-neutral-400">
              IUT DE VALENCIENNES - UNIVERSITÉ POLYTECHNIQUE HAUTS-DE-FRANCE (UPHF)
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-tight">
              BUT Techniques de Commercialisation
            </h2>
            <p className="font-black tracking-tighter uppercase text-lg text-[#5f5e5e] mb-12">
              Parcours MDEBE - Marketing Digital, e-Business & Entrepreneuriat
            </p>

            {/* Années */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#c6c6c6]">
              {/* BUT3 */}
              <div className="p-8 border-r border-b border-[#c6c6c6]">
                <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-4">
                  BUT3 · 2025–2026
                </span>
                <p className="font-black text-sm uppercase tracking-tight mb-4">
                  Semestre 5 validé · Inscrit S6
                </p>
                <div className="flex flex-col gap-1.5 text-xs text-[#5f5e5e]">
                  <span>Marketing - <strong>12.80</strong></span>
                  <span>Vente - <strong>13.21</strong></span>
                  <span>Marketing Digital - <strong>13.56</strong></span>
                  <span>E-business & Entrepreneuriat - <strong>13.68</strong></span>
                </div>
              </div>
              {/* BUT2 */}
              <div className="p-8 border-r border-b border-[#c6c6c6]">
                <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-4">
                  BUT2 · 2024–2025
                </span>
                <p className="font-black text-sm uppercase tracking-tight mb-4">
                  Validé (ADM) · 120 ECTS
                </p>
                <div className="flex flex-col gap-1.5 text-xs text-[#5f5e5e]">
                  <span>DUT (BUT1+BUT2) validé</span>
                  <span>S3 - ~12/20</span>
                  <span>S4 - ~12/20</span>
                </div>
              </div>
              {/* BUT1 */}
              <div className="p-8 border-r border-b border-[#c6c6c6]">
                <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-4">
                  BUT1 · 2023–2024
                </span>
                <p className="font-black text-sm uppercase tracking-tight mb-4">
                  Validé (ADM)
                </p>
                <div className="flex flex-col gap-1.5 text-xs text-[#5f5e5e]">
                  <span>S1 - ~12/20</span>
                  <span>S2 - ~11.5/20</span>
                </div>
              </div>
            </div>

            {/* Projets et compétences */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-4">
                  PROJETS NOTABLES
                </span>
                <ul className="flex flex-col gap-2 text-[#5f5e5e]">
                  <li className="flex gap-3"><span className="text-neutral-300 font-black">-</span>WaterBreaker (anti-inondations, domotique)</li>
                  <li className="flex gap-3"><span className="text-neutral-300 font-black">-</span>MateBoost (marque maté commerce équitable)</li>
                  <li className="flex gap-3"><span className="text-neutral-300 font-black">-</span>Business Game UPHF 2024 - 2ème place</li>
                </ul>
              </div>
              <div>
                <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-4">
                  COMPÉTENCES ACQUISES
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Marketing mix", "Négociation", "Stratégie digitale", "E-business", "Entrepreneuriat", "Analyse financière", "Gestion de projet"].map((c) => (
                    <span key={c} className="bg-[#e8e8e8] px-2 py-1 font-black text-[0.625rem] tracking-wider uppercase">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bac Pro */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-3 p-8 md:p-12 border-r border-[#c6c6c6] bg-[#f3f3f3] flex flex-col justify-between">
            <div>
              <span className="text-[0.6875rem] font-black tracking-[0.4em] uppercase text-neutral-400 block mb-6">
                FORMATION INITIALE
              </span>
              <p className="font-black text-3xl tracking-tighter uppercase leading-tight">
                2020<br />→ 2023
              </p>
            </div>
            <div className="mt-8">
              <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-2">
                MENTION
              </span>
              <p className="font-black text-2xl tracking-tighter uppercase">
                TRÈS BIEN
              </p>
              <p className="font-black text-lg text-[#5f5e5e]">16.25/20</p>
            </div>
          </div>
          <div className="md:col-span-9 p-8 md:p-12">
            <div className="text-[0.6875rem] font-black tracking-[0.3em] uppercase mb-4 text-neutral-400">
              GUADELOUPE
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-tight">
              Bac Pro Systèmes Numériques
            </h2>
            <p className="font-black tracking-tighter uppercase text-lg text-[#5f5e5e] mb-12">
              Option B - Audiovisuels, Réseau & Équipements Domestiques
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-[#c6c6c6]">
              {[
                { label: "Mathématiques", note: "18.5/20" },
                { label: "Anglais", note: "18/20" },
                { label: "Chef d'Œuvre", note: "17/20" },
                { label: "PIM", note: "17.5/20" },
              ].map(({ label, note }) => (
                <div key={label} className="p-6 border-r border-b border-[#c6c6c6]">
                  <span className="text-[0.6875rem] font-black tracking-[0.2em] uppercase text-neutral-400 block mb-2">
                    {label}
                  </span>
                  <p className="font-black text-2xl tracking-tighter">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
          Voir mes<br />compétences
        </p>
        <a
          href="/competences"
          className="bg-white text-black px-12 py-5 font-black tracking-tighter uppercase text-lg transition-all hover:italic hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          Compétences →
        </a>
      </section>
    </>
  );
}
