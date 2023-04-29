import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
    placeholder: "none", // jesli nie jest to ustawione, to na raz wyswietla sie zarowno placeholder jak i zwykly obrazek
    format: ["avif", "webp"],
    loading: "lazy",
    cacheDir: "/.cache",
    // layout: "fill",
    includeSourceFormat: true,
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
    },
});
