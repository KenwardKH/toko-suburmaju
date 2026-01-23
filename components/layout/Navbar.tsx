"use client";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./SwitchLanguage";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `transition duration-300 ${
      isActive
        ? "text-yellow-500 font-bold"
        : "font-semibold text-gray-700 hover:text-yellow-800"
    }`;
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `block px-4 py-2 text-lg ${
      isActive
        ? "bg-yellow-100 font-bold text-yellow-600 border-l-4 border-yellow-600"
        : "text-gray-800 font-semibold hover:text-yellow-800 hover:bg-gray-100"
    }`;
  };

  return (
    <header className="sticky left-0 top-0 z-10">
      <nav className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-lg md:text-xl text-black font-bold uppercase tracking-wide">
              Suburmaju
            </Link>

            <div className="hidden md:flex space-x-3 lg:space-x-6 text-lg">
              <Link href="/" className={getLinkClass("/")}>
                {t("nav.home")}
              </Link>
              <Link href="about" className={getLinkClass("/about")}>
                {t("nav.about")}
              </Link>
              <Link href="products" className={getLinkClass("/products")}>
                {t("nav.products")}
              </Link>
              <Link href="contact" className={getLinkClass("/contact")}>
                {t("nav.contact")}
              </Link>
            </div>
            <div className="hidden md:flex">
              <LanguageSwitcher />
            </div>

            <div className="md:hidden flex space-x-2 items-center">
              <LanguageSwitcher />
              <button className="text-4xl" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX /> : <IoMdMenu />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`flex md:hidden absolute w-full bg-white flex-col shadow-md border-t border-gray-200 transition duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
      >
        <ul className="border-b border-gray-100">
          <li>
            <Link href="/" className={getMobileLinkClass("/")}>
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <Link href="/about" className={getMobileLinkClass("/about")}>
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link href="/products" className={getMobileLinkClass("/products")}>
              {t("nav.products")}
            </Link>
          </li>
          <li>
            <Link href="/contact" className={getMobileLinkClass("/contact")}>
              {t("nav.contact")}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
