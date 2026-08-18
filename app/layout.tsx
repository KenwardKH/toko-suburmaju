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
    // Brand & Kategori Utama
    "Toko Subur Maju",
    "Panglong Subur Maju",
    "Panglong Subur Maju Medan",
    "Toko Bangunan Medan",
    "Panglong Medan",
    "Toko Material Medan",
    "Toko Bangunan Terdekat Medan",
    "Panglong Terdekat Medan",
    "Distributor Bahan Bangunan Medan",
    "Material Bangunan Terlengkap Medan",

    // Lokasi & Wilayah Sekitar
    "Panglong Simpang Selayang",
    "Toko Bangunan Simpang Selayang",
    "Toko Bangunan Setia Budi Medan",
    "Panglong Medan Tuntungan",
    "Panglong Padang Bulan",
    "Toko Bangunan Medan Selayang",
    "Toko Material Medan Johor",

    // Material Struktur & Cor
    "Jual Semen Murah Medan",
    "Harga Semen Padang Medan",
    "Semen Merah Putih Medan",
    "Semen Dynamix Medan",
    "Distributor Besi Beton Medan",
    "Harga Besi Beton SNI Medan",
    "Baja Ringan Medan",
    "Jual Pasir dan Batu Bata Medan",
    "Pasir Cor Pasir Pasang Medan",
    "Batu Split Cor Medan",
    "Batako Medan",

    // Finishing, Cat & Plumbing
    "Toko Cat Medan",
    "Cat Tembok Murah Medan",
    "Cat Minyak Kayu dan Besi Medan",
    "Pipa PVC Rucika Medan",
    "Jual Pipa Paralon Medan",

    // Kayu, Atap & Perlengkapan
    "Jual Triplek Murah Medan",
    "Kayu Kaso Medan",
    "Seng Spandek Medan",
    "Paku Baut dan Skrup Medan",
    "Alat Tukang Bangunan Medan",

    // Layanan & Pengiriman
    "Pesan Antar Bahan Bangunan Medan",
    "Supplier Material Proyek Medan",
    "Grosir Bahan Bangunan Medan",
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
              "@type": "BuildingMaterialsStore", // Tipe bisnis
              name: "Toko Panglong Subur Maju",
              image: "https://suburmaju.kenwardkh.my.id/assets/hero.jpg", // Tambahkan URL gambar
              "@id": "https://suburmaju.kenwardkh.my.id",
              url: "https://suburmaju.kenwardkh.my.id",
              telephone: "+6281263251128", // GANTI dengan nomor WA asli toko
              priceRange: "$$", // Indikator harga (murah/menengah)
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Setia Budi, Simpang Selayang", // Alamat lengkap
                addressLocality: "Medan",
                addressRegion: "Sumatera Utara",
                postalCode: "20132", // Sesuaikan kode pos
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 3.5302446999396, //  koordinat asli dari Google Maps
                longitude: 98.62026038642439, //  koordinat asli dari Google Maps
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "07:30",
                  closes: "18:00",
                },
              ],
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
