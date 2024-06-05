// src/translations.js
import neFooterTranslations from "./assets/locales/ne/footer.json";
import neNavbarTranslations from "./assets/locales/ne/navbar.json";
import nePublicationsTranslations from "./assets/locales/ne/publications.json";
import neServicesTranslations from "./assets/locales/ne/services.json";
import neCopyrightTranslations from "./assets/locales/ne/copyright.json";
import neTabTranslations from "./assets/locales/ne/tab.json";
import neCentreTranslations from "./assets/locales/ne/centre.json";

import enFooterTranslations from "./assets/locales/en/footer.json";
import enNavbarTranslations from "./assets/locales/en/navbar.json";
import enPublicationsTranslations from "./assets/locales/en/publications.json";
import enServicesTranslations from "./assets/locales/en/services.json";
import enCopyrightTranslations from "./assets/locales/en/copyright.json";
import enTabTranslations from "./assets/locales/en/tab.json";
import enCentreTranslations from "./assets/locales/en/centre.json";

const translations = {
  en: {
    ...enFooterTranslations,
    ...enNavbarTranslations,
    ...enPublicationsTranslations,
    ...enServicesTranslations,
    ...enCopyrightTranslations,
    ...enTabTranslations,
    ...enCentreTranslations,
  },
  ne: {
    ...neFooterTranslations,
    ...neNavbarTranslations,
    ...nePublicationsTranslations,
    ...neServicesTranslations,
    ...neCopyrightTranslations,
    ...neTabTranslations,
    ...neCentreTranslations,  
  },
};

export default translations;
