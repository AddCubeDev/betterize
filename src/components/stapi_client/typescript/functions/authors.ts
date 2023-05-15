import { strapiApiBaseUrl } from "./../config";
import type { ApiAuthorAuthor } from "./../types/schemas";

const extras = {
    headers: {
        Authorization: `Bearer ${import.meta.env.PUBLIC_STRAPI_TOKEN}`,
    },
};

export async function getAllAuthors() {
    const authors_all_data: [ApiAuthorAuthor] = await fetch(
        strapiApiBaseUrl + `/authors?populate=*`,
        extras
    ).then((x) => x.json().then((content) => content.data));

    return authors_all_data;
}
