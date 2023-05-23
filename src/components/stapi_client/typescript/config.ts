//const strapiBaseUrl = "https://betterize.pl/strapi";
const strapiBaseUrl = import.meta.env.PUBLIC_STRAPI_BASE_URL;
export const strapiApiBaseUrl = strapiBaseUrl + "/api";
export const strapiUploadsBaseUrl = strapiBaseUrl;
export const PUBLIC_STRAPI_TOKEN = import.meta.env.PUBLIC_STRAPI_TOKEN;
