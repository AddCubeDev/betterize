import { strapiApiBaseUrl } from "./../config";
import type { ApiDemoDemo } from "./../types/schemas";
import { getDynamicZoneFullPopulation } from "./populations";

const extras = {
    headers: {
        Authorization: `Bearer ${import.meta.env.PUBLIC_STRAPI_TOKEN}`,
    },
};

export async function getDemo() {
    const demo = await fetch(
        strapiApiBaseUrl + `/demo?` + getDynamicZoneFullPopulation("content"),
        extras
    );

    if (demo.ok) {
        const result = demo
            .json()
            .then((content) => content.data.attributes.content as ApiDemoDemo)
            .catch((error) => {
                throw new Error(
                    `Unable to extract content of demo. Check attributes names. Error message: ${error}`
                );
            });
        return result;
    } else {
        const error = await demo.json();

        throw new Error(
            `Unable to fetch demo data from given url. Check fetch data. Error message: ${JSON.stringify(
                error
            )}`
        );
    }
}
