/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
    readonly PUBLIC_PAGESPEED: string;
    readonly STRAPI_TOKEN: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
