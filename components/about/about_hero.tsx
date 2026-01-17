"use client";
import { Trans, useTranslation } from "react-i18next";
import Image from "next/image";

export default function AboutHero() {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto px-8 py-16 max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center gap-12 md:px-8">
        <div className="w-full h-[50vh] relative lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/assets/hero.jpg"
            alt="Toko Subur Maju"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-lg font-bold">Tentang Kami</h1>
          <h2 className="text-3xl font-extrabold text-yellow-600 uppercase">
            {t("about.hero_title")}
          </h2>
          <p className="mt-2 text-justify">
            <Trans
              i18nKey="about.hero_desc_1"
              components={{ 1: <span className="font-bold text-yellow-600"></span> }}
            />
          </p>
          <p className="text-justify">
            <Trans
              i18nKey="about.hero_desc_2"
              components={{ 1: <span className="font-bold text-yellow-600"></span> }}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
