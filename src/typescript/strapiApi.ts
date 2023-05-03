import { strapiApiBaseUrl, strapiUploadsBaseUrl } from "@typescript/consts";
import type { Image } from "@typescript/types/Image";
import type {
    ApiPostPost,
    ApiDemoDemo,
    ApiAuthorAuthor,
    ApiProjectProject,
} from "@typescript/types/schemas";

export async function getPost(slug: string) {
    const post: ApiPostPost = await fetch(
        strapiApiBaseUrl + `/posts?filters[slug][$eq]=${slug}&populate=*`,
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
            },
        }
    ).then((x) => x.json().then((data) => data.data[0]));

    return post;
}

export async function getPosts() {
    const posts = await fetch(strapiApiBaseUrl + `/posts?&populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
        },
    }).then((x) => x.json().then((content) => content.data));

    if (!posts) {
        return [];
    }

    return posts as [ApiPostPost];
}

export async function getDemo() {
    const demo: ApiDemoDemo = await fetch(
        strapiApiBaseUrl + `/demo?populate=*`,
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
            },
        }
    ).then((x) => x.json().then((content) => content.data));

    return demo;
}

export async function getAllAuthors() {
    const authors_all_data: [ApiAuthorAuthor] = await fetch(
        strapiApiBaseUrl + `/authors?populate=*`,
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
            },
        }
    ).then((x) => x.json().then((content) => content.data));

    return authors_all_data;
}

export function getImageUrl(image: Image) {
    return strapiUploadsBaseUrl + image.data.attributes.url;
}

export async function getProjects() {
    const projects = await fetch(strapiApiBaseUrl + `/projects?&populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
        },
    }).then((x) => x.json().then((content) => content.data));

    if (!projects) {
        return [];
    }

    return projects as [ApiProjectProject];
}

export async function getProject(slug: string) {
    const project: ApiProjectProject = await fetch(
        strapiApiBaseUrl + `/projects?filters[slug][$eq]=${slug}&populate=*`,
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
            },
        }
    ).then((x) => x.json().then((data) => data.data[0]));

    return project;
}
