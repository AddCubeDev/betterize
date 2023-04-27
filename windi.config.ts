import { defineConfig } from "windicss/helpers";
// import colors from "windicss/colors";
// import plugin from "windicss/plugin";

export default defineConfig({
    attributify: true,
    darkMode: "class", // or 'media'
    shortcuts: {
        "header-1":
            "text-4xl lg:text-6xl max-w-5xl font-bold text-gray-100 mx-auto uppercase text-center",
        "header-2": "text-lg lg:text-2xl text-gray-200 text-left",
        "ordinary-text": "text-sm lg:text-md text-gray-300 max-w-2xl mx-auto",
        "button-cta": "px-16 py-4",
        "fancy-shadow":
            "box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
        "transition-smooth":
            "transition duration-200 hover:(transition duration-200)",
        "image-animation":
            "md:(transition duration-500 hover:(origin-bottom transform -translate-y-2 duration-500 ))",
        "main-content": "px-4 xl:px-0 max-w-screen lg:max-w-6xl mx-auto",
        "outlined-text":
            "text-stroke-width-2 text-stroke-sky-500/40 text-transparent font-bold",
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
