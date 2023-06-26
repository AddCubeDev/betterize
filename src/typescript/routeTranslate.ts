function addSlash(route: string) {
    if (route.charAt(route.length - 1) === "/") {
        return route;
    } else {
        return `${route}/`;
    }
}

function getTranslatedRoute(lang_code: string, route: string) {
    const routeWithSlash = addSlash(route);

    switch (lang_code) {
        case "en":
            return `/en${routeWithSlash}`;

        case "pl":
            return routeWithSlash;

        default:
            return "https://betterize.pl/en/404";
    }
}
