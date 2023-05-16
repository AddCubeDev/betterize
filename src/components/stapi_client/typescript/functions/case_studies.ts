import { strapiApiBaseUrl } from "./../config";
import { getDynamicZoneFullPopulation } from "./populations";
import type { ApiCaseStudyCaseStudy } from "./../types/schemas";

const extras = {
    headers: {
        Authorization: `Bearer ${import.meta.env.PUBLIC_STRAPI_TOKEN}`,
    },
};

export async function getCaseStudies() {
    const case_studies = await fetch(
        strapiApiBaseUrl + `/case-studies?&populate=*`,
        extras
    );

    if (case_studies.ok) {
        const result = case_studies
            .json()
            .then((content) => content.data as [ApiCaseStudyCaseStudy])
            .catch((error) => {
                throw new Error(
                    `Unable to extract content of case_studies. Check attributes names. Error message: ${error}`
                );
            });

        return result;
    } else {
        const error = await case_studies.json();

        throw new Error(
            `Unable to fetch case_studies data from given url. Check fetch data. Error message: ${JSON.stringify(
                error
            )}`
        );
    }
}

export async function getCaseStudy(slug: string) {
    const case_study = await fetch(
        strapiApiBaseUrl +
            `/case-studies?filters[slug][$eq]=${slug}&${getDynamicZoneFullPopulation(
                "body"
            )}&populate=image&populate=authors.image`,
        extras
    );

    if (case_study.ok) {
        const result = await case_study
            .json()
            .then((data) => data.data[0] as ApiCaseStudyCaseStudy)
            .catch((error) => {
                throw new Error(
                    `Unable to extract content of case_study with given slug. Check attributes names. Error message: ${error}`
                );
            });
        return result;
    } else {
        const error = await case_study.json();

        throw new Error(
            `Unable to fetch case_study data from given url. Check fetch data. Error message: ${JSON.stringify(
                error
            )}`
        );
    }
}
