import Contact from "@/components/contact/contact"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak & Lokasi",
  description:
    "Hubungi Toko Subur Maju Medan via WhatsApp (+62 812-6325-1128). Kunjungi alamat toko kami di Jl. Setia Budi, Simpang Selayang, Medan.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Kontak & Lokasi Toko Bangunan Subur Maju Medan",
    description:
      "Informasi alamat, nomor telepon, WhatsApp, jam operasional, dan lokasi Google Maps Toko Panglong Subur Maju Simpang Selayang Medan.",
    url: "/contact",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Lokasi Toko Subur Maju Medan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak & Lokasi Toko Bangunan Subur Maju Medan",
    description:
      "Informasi alamat, nomor telepon, WhatsApp, dan lokasi Google Maps Toko Panglong Subur Maju Medan.",
    images: ["/assets/hero.jpg"],
  },
};

export default function ContactPage() {
    return(
        <Contact />
    )
}