import { defineConfig } from "astro/config";
import windicss from "astro-windicss";
import image from "@astrojs/image";

// import compressor from "astro-compressor";
import critters from "astro-critters";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    output: "static",
    integrations: [
        windicss(),
        image({
            logLevel: "debug",
            cacheDir: "./.cache/image",
            serviceEntryPoint: "@astrojs/image/sharp",
        }),
        // compressor(),
        critters(),
        //partytown()
    ],
});
