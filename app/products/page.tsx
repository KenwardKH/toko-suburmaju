import ProductList from "@/components/products/ProductList";
import { Suspense } from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar Produk & Bahan Bangunan",
  description:
    "Katalog material bangunan lengkap di Medan: semen, besi beton, pasir, batu bata, cat tembok, pipa PVC, paku, dan alat pertukangan dengan harga distributor terbaik.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Katalog Produk Bahan Bangunan Medan | Toko Subur Maju",
    description:
      "Cari material bangunan berkualitas untuk proyek dan renovasi rumah Anda. Cek daftar produk dan harga distributor Toko Panglong Subur Maju Medan.",
    url: "/products",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Katalog Produk Toko Subur Maju",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalog Produk Bahan Bangunan Medan | Toko Subur Maju",
    description:
      "Cari material bangunan berkualitas untuk proyek dan renovasi rumah Anda. Cek daftar produk Toko Panglong Subur Maju Medan.",
    images: ["/assets/hero.jpg"],
  },
};

export default function ProductPage(){
    return (
    <div className="min-h-screen bg-gray-50">
      {/* 👇 2. Bungkus ProductList dengan Suspense */}
      <Suspense 
        fallback={
          // Tampilan sementara saat Next.js membaca URL (Loading...)
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        }
      >
        <ProductList />
      </Suspense>
    </div>)
}