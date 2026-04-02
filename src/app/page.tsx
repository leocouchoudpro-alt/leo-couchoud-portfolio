import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center items-start px-6 md:px-12 pt-32 overflow-hidden bg-white">
        {/* Photo */}
        <div className="absolute bottom-0 right-0 z-20 w-full md:w-1/2 h-full flex items-end justify-end pointer-events-none select-none">
          <Image
            src="/leo-couchoud.png"
            alt="Léo Couchoud"
            width={800}
            height={1000}
            className="w-auto h-full object-contain object-bottom"
            priority
            unoptimized
          />
        </div>

        {/* Massive background typography */}
        <div className="absolute inset-0 z-0 flex flex-col justify-center pointer-events-none select-none">
          <h1 className="text-hero font-black tracking-tighter uppercase text-neutral-100 leading-none">
            LÉO<br />COUCHOUD
          </h1>
        </div>

        {/* Content */}
        <div className="relative z-30 max-w-4xl w-full">
          <div className="text-[0.75rem] font-black tracking-[0.4em] uppercase mb-6 opacity-40">
            MARKETING DIGITAL &amp; STRATÉGIE - VOL. 01
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-[-0.08em] uppercase text-black leading-[0.85] mb-6">
            LÉO<br />COUCHOUD
          </h2>
          <p className="text-xl md:text-2xl font-bold tracking-tight uppercase mb-12 bg-white inline-block pr-4">
            Consultant en devenir
          </p>
          <div className="max-w-md bg-black text-white p-8 md:p-10 mb-12">
            <p className="text-lg md:text-xl font-light leading-relaxed italic">
              &ldquo;Comment fait-on concrètement fonctionner une entreprise ?
              C&rsquo;est cette question qui guide mon parcours - du numérique
              au commerce, de la Guadeloupe au Canada.&rdquo;
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/profil"
              className="bg-black text-[#e2e2e2] px-10 py-5 font-black tracking-tighter uppercase transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:scale-95 text-center"
            >
              Découvrir mon parcours
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-black border-2 border-black px-10 py-5 font-black tracking-tighter uppercase transition-all hover:bg-black hover:text-[#e2e2e2] active:scale-95 text-center"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 z-40">
          <span className="text-[0.6875rem] font-black tracking-[0.5em] uppercase vertical-rl rotate-180">
            SCROLL DOWN
          </span>
          <span className="text-4xl animate-bounce">↓</span>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-[#f3f3f3] py-48 px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-t border-[#c6c6c6]">
        <div className="md:col-span-4">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">
            /PROFIL
          </h2>
          <div className="w-24 h-1 bg-black" />
        </div>
        <div className="md:col-span-8">
          <p className="text-4xl md:text-5xl font-light leading-tight tracking-tighter text-black max-w-4xl">
            Je suis un profil hybride{" "}
            <span className="font-black">tech × management</span>. Je comprends
            la technologie (SEO, IA, automatisation) et je la mets au service
            du <span className="font-black">pilotage business</span>.
          </p>
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-24">
            <div>
              <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase block mb-6 text-neutral-500">
                PHILOSOPHIE
              </span>
              <p className="text-[#5f5e5e] leading-relaxed text-lg">
                Comprendre comment les organisations fonctionnent pour mieux les
                améliorer. La vraie valeur se crée à l&rsquo;intersection entre
                la technique et la stratégie.
              </p>
            </div>
            <div>
              <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase block mb-6 text-neutral-500">
                STATUT
              </span>
              <p className="text-[#5f5e5e] leading-relaxed text-lg">
                Actuellement en stage chez TechGuys à Montréal, spécialisé en
                Audit SEO et Consulting Technologique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Anchor */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-[#c6c6c6]">
        <div className="relative h-[400px] md:h-[600px] overflow-hidden group border-r border-[#c6c6c6] bg-neutral-100 flex items-center justify-center">
          <div className="text-center p-12">
            <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-4">
              {/* TODO: contenu à fournir - photo/image */}
            </span>
            <span className="text-6xl font-black tracking-tighter uppercase text-neutral-200">
              01
            </span>
          </div>
          <div className="absolute bottom-8 left-8 bg-black text-white px-4 py-2 font-black text-xs tracking-widest uppercase">
            01 - RIGUEUR TECHNIQUE
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] overflow-hidden group bg-neutral-100 flex items-center justify-center">
          <div className="text-center p-12">
            <span className="text-6xl font-black tracking-tighter uppercase text-neutral-200">
              02
            </span>
          </div>
          <div className="absolute bottom-8 left-8 bg-black text-white px-4 py-2 font-black text-xs tracking-widest uppercase">
            02 - VISION STRATÉGIQUE
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-48 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            /SKILLS
          </h2>
          <div className="text-[0.6875rem] font-black tracking-[0.5em] uppercase text-neutral-400">
            CORE COMPETENCIES
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-l border-[#c6c6c6]">
          {[
            {
              num: "01",
              title: "SEO/SEA",
              desc: "Audit complet, stratégie de mots-clés et optimisation technique data-driven.",
            },
            {
              num: "02",
              title: "IA & AUTO",
              desc: "Automatisation des process marketing et intégration de l'IA générative.",
            },
            {
              num: "03",
              title: "STRATÉGIE",
              desc: "Modélisation économique, business model et analyse de marché.",
            },
            {
              num: "04",
              title: "COMMERCE",
              desc: "Négociation, relation client et marketing mix opérationnel.",
            },
          ].map(({ num, title, desc }) => (
            <div
              key={num}
              className="p-12 border-r border-b border-[#c6c6c6] bg-white hover:bg-black hover:text-white transition-all duration-300 cursor-default group"
            >
              <span className="text-xs font-bold uppercase tracking-widest mb-12 block group-hover:translate-x-2 transition-transform">
                {num}
              </span>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
                {title}
              </h3>
              <p className="text-sm opacity-70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 px-6 md:px-12 text-center bg-black text-white">
        <h2 className="text-5xl md:text-[10rem] font-black tracking-tighter uppercase mb-20 leading-[0.85]">
          PRÊT À<br />COLLABORER ?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Link
            href="/contact"
            className="bg-white text-black px-16 py-6 font-black text-2xl tracking-tighter uppercase transition-all hover:italic hover:scale-105 active:scale-95 w-full md:w-auto"
          >
            Me contacter
          </Link>
          <Link
            href="/portfolio"
            className="bg-transparent text-white border-4 border-white px-16 py-6 font-black text-2xl tracking-tighter uppercase transition-all hover:bg-white hover:text-black active:scale-95 w-full md:w-auto"
          >
            Voir les projets
          </Link>
        </div>
      </section>
    </>
  );
}
