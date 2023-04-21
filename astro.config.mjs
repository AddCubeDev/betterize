import { defineConfig } from "astro/config";

import { astroImageTools } from "astro-imagetools";
import windicss from "astro-windicss";
// import critters from "astro-critters";
import vue from "@astrojs/vue";
// import partytown from "@astrojs/partytown";
// import purgecss from "astro-purgecss";
import htmlMinifier from "astro-html-minifier";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    output: "static",
    integrations: [
        astroImageTools,
        windicss(),
        // critters({
        //     pruneSource: true,
        //     preload: "body",
        // }),
        vue(),
        //partytown()
        // purgecss(),
        htmlMinifier({ minifyCSS: true, minifyJs: true }),
        compressor({
            gzip: false,
            brotli: true,
        }),
    ],
});
