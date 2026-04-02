import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Léo Couchoud — Marketing Digital & Stratégie",
  description:
    "Portfolio de Léo Couchoud, profil hybride tech × management. Consultant en devenir spécialisé en SEO, IA et stratégie digitale.",
  openGraph: {
    title: "Léo Couchoud — Marketing Digital & Stratégie",
    description:
      "Portfolio de Léo Couchoud, profil hybride tech × management. Consultant en devenir spécialisé en SEO, IA et stratégie digitale.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-[#f9f9f9] text-[#1a1c1c]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
