import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import windicss from "astro-windicss";
import critters from "astro-critters";
import vue from "@astrojs/vue";
// import purgecss from "astro-purgecss";
// import compress from "astro-compress";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://betterize.pl",
    integrations: [
        astroImageTools,
        windicss(),
        // critters({}),
        vue({
            appEntrypoint: "/src/pages/_app",
            template: {
                compilerOptions: {
                    // treat any tag that starts with ion- as custom elements
                    isCustomElement: (tag) => tag.startsWith("swiper-"),
                },
            },
        }),
        critters(),
        partytown(),
        sitemap({
            filter: (page) =>
                page !== "https://betterize.pl/test/" &&
                page !== "https://betterize.pl/ThankYou/" &&
                page !== "https://admin.betterize.pl/" &&
                page !== "https://betterize.pl/~partytown/",
        }),
        // purgecss(),
        // Important: It is vital that this is the last integration in the integrations property. Otherwise some files might not get compressed.
        // compress({
        //     path: "./dist/_astro",
        //     gzip: true,
        //     img: false,
        // }),
        compressor({
            gzip: false,
            brotli: true,
        }),
    ],
});
