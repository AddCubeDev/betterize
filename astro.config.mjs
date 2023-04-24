import { defineConfig } from "astro/config";

import { astroImageTools } from "astro-imagetools";
import windicss from "astro-windicss";
// import critters from "astro-critters";
import vue from "@astrojs/vue";
// import partytown from "@astrojs/partytown";
// import purgecss from "astro-purgecss";
import compress from "astro-compress";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
    output: "static",
    integrations: [
        astroImageTools,
        windicss(),
        // critters({}),
        vue({ appEntrypoint: "/src/pages/_app" }),
        // partytown()
        // purgecss(),
        // Important: It is vital that this is the last integration in the integrations property. Otherwise some files might not get compressed.
        compress({
            path: "./dist/_astro",
            gzip: true,
            img: false,
        }),
        compressor({
            gzip: false,
            brotli: true,
        }),
    ],
});
