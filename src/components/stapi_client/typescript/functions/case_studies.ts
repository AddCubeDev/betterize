import { getDynamicZoneFullPopulation } from "./populations";
import type { ApiCaseStudyCaseStudy } from "./../types/strapi_generated/contentTypes";
import {
    getRequest,
    StrapiCollectionName,
} from "./../functions/strapi_requests";

export async function getCaseStudies() {
    const result = await getRequest(
        `/case-studies?locale=all&populate=*`,
        StrapiCollectionName.case_study,
        (data: any) => {
            return data.data as [ApiCaseStudyCaseStudy];
        }
    );

    return result as [ApiCaseStudyCaseStudy];
}

export async function getCaseStudy(slug: string) {
    const result = await getRequest(
        `/case-studies?locale=all&filters[slug][$eq]=${slug}&${getDynamicZoneFullPopulation(
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
        `/case-studies?locale=all`,
        StrapiCollectionName.case_study,
        (data: any) => {
            return data.data as [ApiCaseStudyCaseStudy];
        }
    );

    return (result as [ApiCaseStudyCaseStudy]).map((element) => ({
        slug: element.attributes.slug as string,
        title: element.attributes.title as string,
        locale: element.attributes.locale as string,
    }));
}
