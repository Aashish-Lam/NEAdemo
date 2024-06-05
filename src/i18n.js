import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationData from "./translation";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationData.en },
    fr: { translation: translationData.fr },
    ne: { translation: translationData.ne }, // Add Nepali language
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: { escapeValue: false }, // React already safes from XSS,
  // returnObjects: true,
});

export default i18n;
