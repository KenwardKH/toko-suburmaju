import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Metadata } from "next";
import I18nProvider from "@/components/providers/I18nProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://suburmaju.kenwardkh.my.id"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | Toko Subur Maju",
    default: "Toko Panglong Subur Maju Medan | Panglong Termurah & Terlengkap",
  },
  description:
    "Cari bahan bangunan murah di Medan? Toko Subur Maju (Simpang Selayang) menyediakan semen, besi beton, pasir, batu bata, cat & alat tukang lengkap. Harga distributor & melayani pesan antar se-Kota Medan.",
  keywords: [
    "Panglong Medan",
    "Toko Bangunan Medan",
    "Jual Semen Murah Medan",
    "Distributor Besi Beton Medan",
    "Jual Pasir dan Batu Bata Medan",
    "Toko Cat Medan",
    "Panglong Simpang Selayang",
    "Toko Bangunan Setia Budi",
    "Material Bangunan Terlengkap",
  ],
  authors: [{ name: "Toko Subur Maju" }],
  creator: "Toko Subur Maju",
  publisher: "Toko Subur Maju",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Toko Bangunan Subur Maju Medan | Termurah & Terlengkap",
    description:
      "Toko bahan bangunan & panglong terbaik di Medan. Sedia semen, besi, pasir, & alat tukang. Siap antar ke lokasi proyek Anda.",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="antialiased bg-gray-50" suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HardwareStore",
              name: "Toko Panglong Subur Maju",
              url: "https://suburmaju.kenwardkh.my.id",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Medan",
                addressRegion: "Sumatera Utara",
                addressCountry: "ID",
              },
              areaServed: "Medan",
            }),
          }}
        />

        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
