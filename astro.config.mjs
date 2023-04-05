import { defineConfig } from "astro/config";
import windicss from "astro-windicss";
import { astroImageTools } from "astro-imagetools";

// import compressor from "astro-compressor";
import critters from "astro-critters";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    output: "static",
    integrations: [
        astroImageTools,
        windicss(),
        // compressor(),
        critters(),
        //partytown()
    ],
});
