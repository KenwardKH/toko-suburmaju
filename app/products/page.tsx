import ProductList from "@/components/products/ProductList";
import { Suspense } from "react";

export const metadata = {
    title: "Daftar Produk"
}

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