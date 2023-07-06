import { getDynamicZoneFullPopulation } from "./populations";
import type { ApiCaseStudyCaseStudy } from "./../types/schemas";
import {
    getRequest,
    StrapiCollectionName,
} from "./../functions/strapi_requests";

export async function getCaseStudies() {
    const result = await getRequest(
        `/case-studies?&populate=*`,
        StrapiCollectionName.case_study,
        (data: any) => {
            return data.data as [ApiCaseStudyCaseStudy];
        }
    );

    return result;
}

export async function getCaseStudy(slug: string) {
    const result = await getRequest(
        `/case-studies?filters[slug][$eq]=${slug}&${getDynamicZoneFullPopulation(
            "body"
        )}&populate=image&populate=authors.image`,
        StrapiCollectionName.case_study,
        (data: any) => {
            return data.data[0] as ApiCaseStudyCaseStudy;
        }
    );

    return result;
}

export async function getCaseStudiesAttributes() {
    const result = await getRequest(
        `/case-studies`,
        StrapiCollectionName.case_study,
        (data: any) => {
            return data.data as [ApiCaseStudyCaseStudy];
        }
    );

    return (result as [ApiCaseStudyCaseStudy]).map((element) => ({
        slug: element.attributes.slug as string,
        title: element.attributes.title as string,
    }));
}
