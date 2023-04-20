import { strapiBaseUrl } from "@typescript/consts";
import type { BlogPost } from "@typescript/types/BlogPost";
import type { Image } from "@typescript/types/Image";

export async function getPost(slug: string) {
    const post = await fetch(
        strapiBaseUrl + `/api/posts?filters[slug][$eq]=${slug}&populate=*`
    ).then((x) => x.json().then((data) => data.data[0].attributes));

    const result: BlogPost = {
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        visibility: post.visibility,
        readingTime: post.readingTime,
        slug: post.slug,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        publishedAt: post.publishedAt,
        featuredImage: {
            id: post.featuredImage.data.id,
            attributes: post.featuredImage.data.attributes,
        },
    };

    return result;
}

export async function getPosts() {
    const posts = await fetch(strapiBaseUrl + `/api/posts?&populate=*`).then(
        (x) => x.json().then((content) => content.data)
    );

    const result: [BlogPost] = posts
        .map((post: any) => post.attributes)
        .map((post: any) => {
            const result: BlogPost = {
                title: post.title,
                content: post.content,
                excerpt: post.excerpt,
                visibility: post.visibility,
                readingTime: post.readingTime,
                slug: post.slug,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt,
                publishedAt: post.publishedAt,
                featuredImage: {
                    id: post.featuredImage.data.id,
                    attributes: post.featuredImage.data.attributes,
                },
            };

            return result;
        });

    return result;
}

export function getImageUrl(image: Image) {
    return strapiBaseUrl + image.attributes.url;
}

// TODO
// if (posts == null || posts.data == null) {
//     console.error(
//         "Unable to fetch posts data. Check strapi connection. Message: " +
//             JSON.stringify(posts)
//     );
// }
