import { defineConfig } from "astro/config";
import windicss from "astro-windicss";
import { astroImageTools } from "astro-imagetools";
// import critters from "astro-critters";
// import compressor from "astro-compressor";
// import partytown from "@astrojs/partytown";
// import purgecss from "astro-purgecss";

import vue from "@astrojs/vue";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    output: "static",
    integrations: [
        astroImageTools,
        windicss(),
        //critters(),
        vue(),
        //partytown(),
        // purgecss(),
        compressor({
            gzip: false,
            brotli: true,
        }),
    ],
});
