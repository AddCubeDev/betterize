import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import windicss from "astro-windicss";
// import critters from "astro-critters";
import vue from "@astrojs/vue";
// import purgecss from "astro-purgecss";
// import compress from "astro-compress";
import compressor from "astro-compressor";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    output: "static",
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
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
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
