/// <reference types="@astrojs/image/client" />
/// <reference types="@astrojs/client" />

interface ImportMetaEnv {
    readonly PUBLIC_PAGESPEED: string;
    readonly PUBLIC_STRAPI_TOKEN: string;
    readonly PUBLIC_STRAPI_BASE_URL: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
