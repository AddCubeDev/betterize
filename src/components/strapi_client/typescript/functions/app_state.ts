import type { ApiCaseStudyCaseStudy } from "../types/strapi_generated/contentTypes";
import { getRequest, StrapiCollectionName } from "./strapi_requests";
import { getImageUrl } from "./media_plugin";

export async function getRecommendedCaseStudies(langCode: string) {
    const result = await getRequest(
        `/app-state?locale=${langCode}&populate=*&populate=recomended_case_studies.image`,
        StrapiCollectionName.app_state,
        (data: any) => {
            return data.data.attributes.recomended_case_studies.data as [
                ApiCaseStudyCaseStudy
            ];
        }
    );

    return (result as [ApiCaseStudyCaseStudy]).map((element) => ({
        slug: element.attributes.slug as string,
        title: element.attributes.title as string,
        subtitle: element.attributes.subtitle as string,
        date: element.attributes.date as string,
        image: getImageUrl(element.attributes.image) as string,
    }));
}
