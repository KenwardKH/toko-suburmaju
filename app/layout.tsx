import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Metadata } from "next";
import I18nProvider from "@/components/providers/I18nProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | Toko Subur Maju",
    default: "Toko Panglong Subur Maju Medan",
  },
  description:
    "Pusat bahan bangunan terlengkap di Medan. Jual semen, cat, paku, dan alat pertukangan dengan harga termurah. Melayani pesan antar.",
  keywords:
    "Panglong Medan, Toko Bangunan Medan, Jual Semen Medan, Bahan Bangunan Murah",
  openGraph: {
    title: "Toko Panglong Subur Maju Medan",
    description: "Belanja bahan bangunan murah, lengkap, dan cepat sampai.",
    url: "https://suburmaju.kenwardkh.my.id",
    siteName: "Toko Subur Maju",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Toko Subur Maju Medan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className="antialiased bg-gray-50"
        suppressHydrationWarning={true}
      >
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
