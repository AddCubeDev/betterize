import { strapiApiBaseUrl, strapiUploadsBaseUrl } from "@typescript/consts";
import type { Image } from "@typescript/types/Image";
import type {
    ApiPostPost,
    ApiDemoDemo,
    ApiAuthorAuthor,
} from "@typescript/types/schemas";

export async function getPost(slug: string) {
    const post: ApiPostPost = await fetch(
        strapiApiBaseUrl + `/posts?filters[slug][$eq]=${slug}&populate=*`
    ).then((x) => x.json().then((data) => data.data[0]));

    return post;
}

export async function getPosts() {
    const posts = await fetch(strapiApiBaseUrl + `/posts?&populate=*`).then(
        (x) => x.json().then((content) => content.data)
    );

    if (!posts) {
        return [];
    }

    return posts as [ApiPostPost];
}

export async function getDemo() {
    const demo: ApiDemoDemo = await fetch(
        strapiApiBaseUrl + `/demo?populate=*`
    ).then((x) => x.json().then((content) => content.data));

    return demo;
}

export async function getAllAuthors() {
    const authors_all_data: [ApiAuthorAuthor] = await fetch(
        strapiApiBaseUrl + `/authors?populate=*`
    ).then((x) => x.json().then((content) => content.data));

    return authors_all_data;
}

export function getImageUrl(image: Image) {
    return strapiUploadsBaseUrl + image.data.attributes.url;
}

// TODO
// if (posts == null || posts.data == null) {
//     console.error(
//         "Unable to fetch posts data. Check strapi connection. Message: " +
//             JSON.stringify(posts)
//     );
// }
