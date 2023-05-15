import { strapiApiBaseUrl } from "./../config";
import type { ApiDemoDemo } from "./../types/schemas";
import { getFullPopulation } from "./populations";

// const extras = {
//     headers: {
//         Authorization: `Bearer ${import.meta.env.PUBLIC_STRAPI_TOKEN}`,
//     },
// };

export async function getDemo() {
    const demo: ApiDemoDemo = await fetch(
        strapiApiBaseUrl + `/demo?` + getFullPopulation()
    ).then((x) => x.json().then((content) => content.data.attributes.content));

    return demo;
}
