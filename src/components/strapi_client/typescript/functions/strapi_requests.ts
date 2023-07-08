import { strapiApiBaseUrl, PUBLIC_STRAPI_TOKEN } from "./../config";
import type {
    ApiBlogPostBlogPost,
    ApiCaseStudyCaseStudy,
} from "./../types/strapi_generated/contentTypes";

const extras = {
    headers: {
        Authorization: `Bearer ${PUBLIC_STRAPI_TOKEN}`,
    },
};

type Callback =
    | ApiBlogPostBlogPost
    | [ApiBlogPostBlogPost]
    | ApiCaseStudyCaseStudy
    | [ApiCaseStudyCaseStudy];

export enum StrapiCollectionName {
    blog_post = "blog_post",
    case_study = "case_study",
}

export async function getRequest(
    endpoint: string,
    collection: StrapiCollectionName,
    extractor: (data: any) => Callback
) {
    const data = await fetch(strapiApiBaseUrl + endpoint, extras).catch(
        (error) => {
            throw new Error(
                `Unable to fetch ${collection} data. Error message: ${error}`
            );
        }
    );

    if (data.ok) {
        const result = data
            .json()
            .then((data) => extractor(data))
            .catch((error) => {
                throw new Error(
                    `Unable to extract content of ${collection} with given slug. Check attributes names. Error message: ${error}`
                );
            });

        return result;
    } else {
        const error = await data.json();

        throw new Error(
            `Unable to fetch ${collection} data from given url. Check fetch data. Error message: ${JSON.stringify(
                error
            )}`
        );
    }
}
