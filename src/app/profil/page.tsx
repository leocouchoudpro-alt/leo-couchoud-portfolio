import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profil - Léo Couchoud",
  description:
    "Parcours et présentation de Léo Couchoud, profil hybride tech × management basé entre Valenciennes et Montréal.",
};

const stats = [
  { label: "ORIGINE", value: "Basse-Terre, Guadeloupe" },
  { label: "ÂGE", value: "21 ans - né le 27/12/2004" },
  { label: "BASE", value: "Valenciennes / Montréal" },
  { label: "FORMATION", value: "BUT3 TC - Marketing Digital, e-Business & Entrepreneuriat" },
  { label: "SPORT", value: "Capitaine - Basket départemental" },
  { label: "INVESTISSEUR", value: "PEA · Crypto · Immobilier" },
];

export default function Profil() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-12 bg-white border-b border-[#c6c6c6]">
        <div className="text-[0.75rem] font-black tracking-[0.4em] uppercase mb-8 opacity-40">
          02 - PROFIL
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-12">
          À<br />PROPOS
        </h1>
        <div className="w-24 h-1 bg-black" />
      </section>

      {/* Main bio */}
      <section className="py-16 md:py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start bg-[#f9f9f9] border-b border-[#c6c6c6]">
        <div className="md:col-span-5">
          <div className="w-full aspect-[3/4] bg-[#f3f3f3] overflow-hidden relative">
            <Image
              src="/leo-couchoud.png"
              alt="Léo Couchoud"
              fill
              unoptimized
              className="object-contain object-bottom grayscale"
            />
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col gap-8 pt-4">
          <p className="text-2xl md:text-3xl font-light leading-relaxed tracking-tight text-black">
            Je suis Léo Couchoud, originaire de Basse-Terre en Guadeloupe,
            aujourd&rsquo;hui basé dans le Nord, à Valenciennes.
          </p>
          <p className="text-lg leading-relaxed text-[#5f5e5e]">
            Formé au numérique, attaché à la stratégie : je crois que la
            vraie valeur se crée quand on fait parler la technique et le
            business ensemble.
          </p>
          <p className="text-lg leading-relaxed text-[#5f5e5e]">
            Diplômé d&rsquo;un Bac Pro Systèmes Numériques (mention Très Bien),
            j&rsquo;ai choisi de bifurquer vers le commerce et le marketing
            digital en intégrant un BUT Techniques de Commercialisation. Pas un
            virage, plutôt une évolution logique : comprendre la technologie,
            c&rsquo;est bien. Savoir la mettre au service d&rsquo;une vision,
            c&rsquo;est mieux.
          </p>
          <p className="text-lg leading-relaxed text-[#5f5e5e]">
            Aujourd&rsquo;hui en stage chez TechGuys, cabinet de consulting
            technologique à Montréal, je réalise des audits SEO, rédige des
            briefs éditoriaux et fais le pont entre les enjeux techniques et
            les décisions stratégiques de nos clients.
          </p>
          <p className="text-lg leading-relaxed text-[#5f5e5e]">
            En dehors du travail, je suis curieux de tout ce qui bouge :
            finance, économie, IA, blockchain, Web3. J&rsquo;investis depuis
            mes 20 ans, je lis beaucoup - sur ces sujets, mais aussi des livres
            de développement personnel. La musique tient également une place
            importante dans mon quotidien, et j&rsquo;aborde chaque nouveau
            sujet avec la même énergie que le premier.
          </p>
        </div>
      </section>

      {/* Stats / données clés */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-b border-[#c6c6c6]">
        <div className="text-[0.6875rem] font-black tracking-[0.5em] uppercase mb-16 text-neutral-400">
          DONNÉES CLÉS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-t border-l border-[#c6c6c6]">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="p-10 border-r border-b border-[#c6c6c6]"
            >
              <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase block mb-4 text-neutral-400">
                {label}
              </span>
              <p className="text-xl font-black tracking-tighter">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
          Voir mes<br />réalisations
        </p>
        <a
          href="/portfolio"
          className="bg-white text-black px-12 py-5 font-black tracking-tighter uppercase text-lg transition-all hover:italic hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          Mon portfolio →
        </a>
      </section>
    </>
  );
}
