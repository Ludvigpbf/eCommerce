import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import indexSv from "@locales/en";
import indexEn from "@locales/en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...indexEn,
        },
      },
      sv: {
        translation: {
          ...indexSv,
        },
      },
    },
    lng: "sv",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

