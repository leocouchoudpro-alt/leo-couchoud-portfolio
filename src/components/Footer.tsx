import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#c6c6c6] flex flex-col md:flex-row justify-between items-end w-full px-6 md:px-12 py-24 gap-12">
      <div className="flex flex-col gap-8 w-full md:w-auto">
        <div className="text-black font-black tracking-tighter text-3xl uppercase">
          LÉO COUCHOUD
        </div>
        <div className="text-[10px] tracking-[0.4em] font-black uppercase text-neutral-400">
          © 2026 LÉO COUCHOUD — TOUS DROITS RÉSERVÉS
        </div>
      </div>

      <div className="flex gap-12 text-[10px] tracking-[0.4em] font-black uppercase">
        <a
          href="https://www.linkedin.com/in/leo-couchoud/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-black transition-colors"
        >
          LINKEDIN
        </a>
        <a
          href="mailto:leocouchoudpro@gmail.com"
          className="text-neutral-500 hover:text-black transition-colors"
        >
          EMAIL
        </a>
        <Link
          href="/cv"
          className="text-neutral-500 hover:text-black transition-colors"
        >
          CV.PDF
        </Link>
      </div>
    </footer>
  );
}
