import { defineConfig } from "astro/config";
import windicss from "astro-windicss";
import { astroImageTools } from "astro-imagetools";
import storyblok from '@storyblok/astro';

// import compressor from "astro-compressor";
import critters from "astro-critters";
import partytown from "@astrojs/partytown";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
    output: "static",
    integrations: [
        astroImageTools,
        windicss(),
        // compressor(),
        critters(),
        vue(),
        //partytown()
        storyblok({
            accessToken: 'AM2jY0VgbjITiaic9Z5RTgtt',
            components: {
              hero: 'components/Hero',
              marketing1: 'components/Marketing1',
              landingPage: 'storyblok/LandingPage',
              blogPage: 'storyblok/BlogPage',
              blogPost: 'components/subcomponents/BlogPost',
              blogPostPreview: 'components/BlogPostList',
              advantageItem: 'components/subcomponents/AdvantageItem',
            },
            apiOptions: {
              region: 'eu',
            },
          }),
    ],
});
