import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
    defaultLangCode: "pl",
    supportedLangCodes: ["en"],
    showDefaultLangCode: false,
    translations: {
        pl: "src/translations/pl.json",
        en: "src/translations/en.json",
    },
    routeTranslations: {},
});
