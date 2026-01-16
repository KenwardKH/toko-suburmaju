import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import translationID from "./locales/id/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  id: {
    translation: translationID,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(I18nextBrowserLanguageDetector) // Mendeteksi bahasa otomatis dari browser
  .use(initReactI18next) // Menghubungkan dengan react-i18next
  .init({
    resources,
    lng: "id",
    fallbackLng: "id",
    debug: false, // Set false jika sudah produksi
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
