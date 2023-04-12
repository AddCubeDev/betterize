import { defineConfig } from "windicss/helpers";
// import colors from "windicss/colors";
// import plugin from "windicss/plugin";

export default defineConfig({
    attributify: true,
    darkMode: "class", // or 'media'
    shortcuts: {
        "header-1":
            "text-4xl lg:text-6xl max-w-5xl font-bold text-gray-100 mx-auto uppercase",
        "header-2": "text-lg lg:text-2xl text-gray-200 lg:px-32",
        "ordinary-text": "text-sm lg:text-md text-gray-300 max-w-2xl mx-auto",
        "button-cta": "px-16 py-4",
        "fancy-shadow":
            "box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
        "transition-smooth":
            "transition duration-150 hover:(transition duration-150)",
        "image-animation":
            "transition duration-500 hover:(origin-bottom transform -translate-y-2 duration-500 )",
        "main-section": "py-32 max-w-7xl mx-auto",
    },
    theme: {
        extend: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "2000px",
            },
            colors: {
                primary: "#ffd700",
                secondary: "ffffff",
                sidecol1: "ffffff",
                sidecol2: "ffffff",
                background: "151317",
            },
        },
    },
    // purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"],
});
