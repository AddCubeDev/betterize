import { defineConfig } from "astro/config";
import windicss from "astro-windicss";
import { astroImageTools } from "astro-imagetools";
import storyblok from "@storyblok/astro";
// import critters from "astro-critters";
// import compressor from "astro-compressor";
// import partytown from "@astrojs/partytown";
import purgecss from "astro-purgecss";

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
        //partytown()
        storyblok({
            accessToken: "AM2jY0VgbjITiaic9Z5RTgtt",
            components: {
                hero: "components/Hero",
                marketing1: "components/Marketing1",
                landingPage: "storyblok/LandingPage",
                blogPage: "storyblok/BlogPage",
                blogPost: "components/subcomponents/BlogPost",
                blogPostPreview: "components/BlogPostList",
                advantageItem: "components/subcomponents/AdvantageItem",
            },
            apiOptions: {
                region: "eu",
            },
            bridge: false,
        }),
        purgecss(),
        compressor({
            gzip: false,
            brotli: true,
        }),
    ],
});
