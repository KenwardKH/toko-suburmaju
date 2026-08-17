import AboutHero from "@/components/about/about_hero";
import AboutInfo from "@/components/about/about_info";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal Toko Panglong Subur Maju Medan. Kami menyediakan bahan bangunan berkualitas tinggi dengan harga distributor dan layanan antar terpercaya di Medan.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Tentang Toko Subur Maju Medan | Panglong Terpercaya",
    description:
      "Mengenal Toko Panglong Subur Maju Medan. Menyediakan bahan bangunan berkualitas dan layanan pesan antar terpercaya.",
    url: "/about",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tentang Toko Subur Maju Medan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Toko Subur Maju Medan | Panglong Terpercaya",
    description:
      "Mengenal Toko Panglong Subur Maju Medan. Menyediakan bahan bangunan berkualitas dan layanan pesan antar terpercaya.",
    images: ["/assets/hero.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutInfo />
    </div>
  );
}
