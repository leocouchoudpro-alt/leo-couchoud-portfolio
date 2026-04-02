import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Léo Couchoud",
  description:
    "Contacter Léo Couchoud pour une opportunité professionnelle, une collaboration ou toute autre demande.",
};

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="pt-48 pb-24 px-6 md:px-12 bg-white border-b border-[#c6c6c6]">
        <div className="text-[0.75rem] font-black tracking-[0.4em] uppercase mb-8 opacity-40">
          08 — CONTACT
        </div>
        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] mb-12">
          PARLONS<br />ENSEMBLE
        </h1>
        <div className="w-24 h-1 bg-black" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 bg-[#f9f9f9]">

        {/* Infos de contact */}
        <div className="md:col-span-4 p-8 md:p-12 border-r border-[#c6c6c6] bg-white flex flex-col gap-12">
          <div>
            <span className="text-[0.6875rem] font-black tracking-[0.4em] uppercase text-neutral-400 block mb-8">
              COORDONNÉES
            </span>
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-2">
                  EMAIL
                </span>
                <a
                  href="mailto:leocouchoudpro@gmail.com"
                  className="font-black tracking-tighter text-lg hover:italic transition-all"
                >
                  leocouchoudpro@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-2">
                  TÉLÉPHONE
                </span>
                <a
                  href="tel:+33785820094"
                  className="font-black tracking-tighter text-lg hover:italic transition-all"
                >
                  +33 7 85 82 00 94
                </a>
              </div>
              <div>
                <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-2">
                  LOCALISATION
                </span>
                <p className="font-black tracking-tighter text-lg">
                  Valenciennes, France<br />
                  <span className="text-[#5f5e5e]">Montréal, Canada</span>
                </p>
              </div>
              <div>
                <span className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400 block mb-2">
                  LINKEDIN
                </span>
                <a
                  href="https://linkedin.com/in/LeoCouchoud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black tracking-tighter text-lg hover:italic transition-all"
                >
                  linkedin.com/in/LeoCouchoud
                </a>
              </div>
            </div>
          </div>

          {/* Disponibilité */}
          <div className="bg-black text-white p-8">
            <span className="text-[0.6875rem] font-black tracking-[0.4em] uppercase opacity-50 block mb-4">
              DISPONIBILITÉ
            </span>
            <p className="font-black tracking-tighter uppercase text-xl leading-tight">
              Ouvert aux opportunités<br />à partir de juin 2026
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="md:col-span-8 p-8 md:p-12">
          <span className="text-[0.6875rem] font-black tracking-[0.4em] uppercase text-neutral-400 block mb-8">
            FORMULAIRE DE CONTACT
          </span>
          <form
            action="https://formspree.io/f/maqldlak"
            method="POST"
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="nom"
                  className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400"
                >
                  NOM *
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="bg-white border border-[#c6c6c6] px-4 py-4 font-bold text-black placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400"
                >
                  EMAIL *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="bg-white border border-[#c6c6c6] px-4 py-4 font-bold text-black placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="objet"
                className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400"
              >
                OBJET *
              </label>
              <select
                id="objet"
                name="objet"
                required
                className="bg-white border border-[#c6c6c6] px-4 py-4 font-bold text-black focus:outline-none focus:border-black transition-colors appearance-none"
              >
                <option value="" disabled>Sélectionnez un objet</option>
                <option value="Opportunité professionnelle">Opportunité professionnelle</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Question">Question</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[0.6875rem] font-black tracking-[0.3em] uppercase text-neutral-400"
              >
                MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={8}
                placeholder="Votre message..."
                className="bg-white border border-[#c6c6c6] px-4 py-4 font-bold text-black placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-12 py-5 font-black tracking-tighter uppercase text-lg self-start transition-all hover:bg-neutral-800 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:scale-95"
            >
              Envoyer →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
