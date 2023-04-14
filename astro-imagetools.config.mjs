import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
    placeholder: "none", // jesli nie jest to ustawione, to na raz wyswietla sie zarowno placeholder jak i zwykly obrazek
    format: ["avif", "webp"],
    fallbackFormat: "png",
    loading: "lazy",
    // layout: "fill",
    includeSourceFormat: false,
    formatOptions: {
        avif: {
            quality: 80,
        },
        jpg: {
            quality: 80,
        },
        png: {
            quality: 80,
        },
        webp: {
            quality: 80,
        },
        tracedSVG: {
            options: {
                background: "#fff",
                color: "#000",
                turnPolicy: "black",
                turdSize: 1,
                alphaMax: 1,
                optCurve: true,
                threshold: 100,
                blackOnWhite: false,
            },
        },
    },
});
