/* eslint-disable prefer-const */
/* eslint-disable no-mixed-spaces-and-tabs */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from 'i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import LanguageDetector from 'i18next-browser-languagedetector';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { initReactI18next } from 'react-i18next';
import en from "./translations/en.ts"
import vi from "./translations/vi.ts"
function setLocalLanguage():string{
  let locales=localStorage.getItem("locales");
  return locales? locales:"en"
}
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
      lng: setLocalLanguage() , 
      fallbackLng: 'en',// if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
     translation:en,
    },
     vi: {
     translation:vi,
    },
  },
  });
  export default i18n