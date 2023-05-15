import { strapiApiBaseUrl } from "./../config";
import type { ApiProjectProject } from "./../types/schemas";

const extras = {
    headers: {
        Authorization: `Bearer ${import.meta.env.PUBLIC_STRAPI_TOKEN}`,
    },
};

export async function getCaseStudies() {
    const projects = await fetch(
        strapiApiBaseUrl + `/projects?&populate=*`,
        extras
    ).then((x) => x.json().then((content) => content.data));

    if (!projects) {
        return [];
    }

    return projects as [ApiProjectProject];
}

export async function getCaseStudy(slug: string) {
    const project: ApiProjectProject = await fetch(
        strapiApiBaseUrl + `/projects?filters[slug][$eq]=${slug}&populate=*`,
        extras
    ).then((x) => x.json().then((data) => data.data[0]));

    return project;
}
