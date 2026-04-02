"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "ACCUEIL" },
  { href: "/profil", label: "PROFIL" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/experiences", label: "EXPÉRIENCES" },
  { href: "/formations", label: "FORMATIONS" },
  { href: "/competences", label: "COMPÉTENCES" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-50/80 backdrop-blur-lg flex justify-between items-center px-6 md:px-12 py-6 md:py-8 border-b border-[#c6c6c6]">
      <Link
        href="/"
        className="text-2xl md:text-3xl font-black tracking-tighter text-black uppercase hover:italic transition-all"
      >
        LÉO COUCHOUD
      </Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-8 xl:gap-12">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`font-black tracking-tighter uppercase text-xs transition-colors ${
              pathname === href
                ? "text-black border-b-4 border-black pb-1"
                : "text-neutral-400 hover:text-black"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      <Link
        href="/contact"
        className="hidden lg:block bg-black text-[#e2e2e2] px-6 md:px-8 py-3 font-black tracking-tighter uppercase text-xs md:text-sm active:scale-95 transition-transform hover:bg-neutral-800"
      >
        ME CONTACTER
      </Link>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[#c6c6c6] flex flex-col px-6 py-8 gap-6 lg:hidden">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-black tracking-tighter uppercase text-sm ${
                pathname === href ? "text-black" : "text-neutral-400"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-black text-[#e2e2e2] px-8 py-4 font-black tracking-tighter uppercase text-sm text-center mt-4"
          >
            ME CONTACTER
          </Link>
        </div>
      )}
    </nav>
  );
}
