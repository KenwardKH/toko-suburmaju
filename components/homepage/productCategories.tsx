"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function ProductCategories() {
  const { t } = useTranslation();
  const categoryList = [
    {
      id: "structure",
      img: "/assets/products/pasir.jpg",
      filterValue: "Material Struktur",
    },
    {
      id: "paint",
      img: "/assets/products/cat.jpg",
      filterValue: "Cat dan Finishing",
    },
    {
      id: "fastener",
      img: "/assets/products/paku_dan_skrup.jpg",
      filterValue: "Paku dan Pengikat",
    },
    {
      id: "wood",
      img: "/assets/products/triplek.jpg",
      filterValue: "Kayu dan Triplek",
    },
    {
      id: "plumbing",
      img: "/assets/products/pipa.jpeg",
      filterValue: "Pipa dan Plumbing",
    },
    {
      id: "tools",
      img: "/assets/products/alat.jpg",
      filterValue: "Alat Pertukangan",
    },
  ];
  return (
    <section className="py-16 bg-stone-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">{t("categories.title")}</h2>
          <h3 className="text-2xl font-semibold">{t("categories.subtitle")}</h3>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 md:gap-8 max-w-7xl">
            {categoryList.map((item) => (
              <Link
                key={item.id}
                href={{
                  pathname: "/products",
                  query: { category: item.filterValue },
                }}
                className="group block rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl hover:scale-105 duration-300"
              >
                <div className="w-72 h-40 md:w-72 md:h-64 overflow-hidden relative">
                  <Image
                    src={item.img}
                    alt={`${item.filterValue} - Toko Subur Maju`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transform duration-500"></div>
                </div>
                <div className="text-center bg-white">
                  <p className="px-3 py-2 font-semibold text-sm group-hover:text-yellow-600 duration-400">
                    {t(`categories.${item.id}`)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
