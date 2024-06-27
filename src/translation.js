// src/translations.js
import neFooterTranslations from "./assets/locales/ne/footer.json";
import neNavbarTranslations from "./assets/locales/ne/navbar.json";
import nePublicationsTranslations from "./assets/locales/ne/publications.json";
import neServicesTranslations from "./assets/locales/ne/services.json";
import neCopyrightTranslations from "./assets/locales/ne/copyright.json";
import neTabTranslations from "./assets/locales/ne/tab.json";
import neCentreTranslations from "./assets/locales/ne/centre.json";
import neFormTranslations from "./assets/locales/ne/form.json";
import neActsTranslation from './assets/locales/ne/acts.json'
import neReportsTranslation from './assets/locales/ne/reports.json'
import neReleaseTranslation from './assets/locales/ne/release.json'
import neDownloadsTranslation from './assets/locales/ne/downloads.json'
import neAttendanceTranslation from './assets/locales/ne/attendance.json'
import neCaisTranslation from './assets/locales/ne/cais.json'
import neTicketTranslation from './assets/locales/ne/ticket.json'

import enFooterTranslations from "./assets/locales/en/footer.json";
import enNavbarTranslations from "./assets/locales/en/navbar.json";
import enPublicationsTranslations from "./assets/locales/en/publications.json";
import enServicesTranslations from "./assets/locales/en/services.json";
import enCopyrightTranslations from "./assets/locales/en/copyright.json";
import enTabTranslations from "./assets/locales/en/tab.json";
import enCentreTranslations from "./assets/locales/en/centre.json";
import enFormTranslations from "./assets/locales/en/form.json";
import enActsTranslation from './assets/locales/en/acts.json'
import enReportsTranslation from './assets/locales/en/reports.json'
import enReleaseTranslation from './assets/locales/en/release.json'
import enDownloadsTranslation from './assets/locales/en/downloads.json'
import enAttendanceTranslation from './assets/locales/en/attendance.json'
import enCaisTranslation from './assets/locales/en/cais.json'
import enTicketTranslation from './assets/locales/en/ticket.json'


const translations = {
  en: {
    ...enFooterTranslations,
    ...enNavbarTranslations,
    ...enPublicationsTranslations,
    ...enServicesTranslations,
    ...enCopyrightTranslations,
    ...enTabTranslations,
    ...enCentreTranslations,
    ...enFormTranslations,
    ...enActsTranslation,
    ...enReportsTranslation,
    ...enReleaseTranslation,
    ...enDownloadsTranslation,
    ...enAttendanceTranslation,
    ...enCaisTranslation,
    ...enTicketTranslation

  },
  ne: {
    ...neFooterTranslations,
    ...neNavbarTranslations,
    ...nePublicationsTranslations,
    ...neServicesTranslations,
    ...neCopyrightTranslations,
    ...neTabTranslations,
    ...neCentreTranslations,
    ...neFormTranslations,
    ...neActsTranslation,
    ...neReportsTranslation,
    ...neReleaseTranslation,
    ...neDownloadsTranslation,
    ...neAttendanceTranslation,
    ...neCaisTranslation,
    ...neTicketTranslation,
  },
};

export default translations;
