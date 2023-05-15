import { strapiApiBaseUrl } from "./../config";
import type { ApiPostPost } from "./../types/schemas";

const extras = {
    headers: {
        Authorization: `Bearer ${import.meta.env.PUBLIC_STRAPI_TOKEN}`,
    },
};

export async function getPost(slug: string) {
    const post: ApiPostPost = await fetch(
        strapiApiBaseUrl + `/posts?filters[slug][$eq]=${slug}&populate=*`,
        extras
    ).then((x) => x.json().then((data) => data.data[0]));

    return post;
}

export async function getPosts() {
    const posts = await fetch(
        strapiApiBaseUrl + `/posts?&populate=*`,
        extras
    ).then((x) => x.json().then((content) => content.data));

    if (!posts) {
        return [];
    }

    return posts as [ApiPostPost];
}
