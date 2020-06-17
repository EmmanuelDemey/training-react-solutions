import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ICU from "i18next-icu";

const resources = {
  en: {
    translation: {
      HELLO_WORLD: "Hello World",
      FIRST_WEBSITE: "My first website with",
      NB_LIKED_PEOPLE:
        "{nb, plural, =0 {I like nobody} =1 {I like one person} other {I like # people}}",
    },
  },
  fr: {
    translation: {
      HELLO_WORLD: "Bonjour monde",
      FIRST_WEBSITE: "Mon premier site avec",
      NB_LIKED_PEOPLE:
        "{nb, plural, =0 {Je n'aime personne} =1 {J'aime une personne} other {J'aime # personnes}}",
    },
  },
};

i18n
  .use(new ICU({}))
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({ resources, lng: "en" });
export default i18n;
