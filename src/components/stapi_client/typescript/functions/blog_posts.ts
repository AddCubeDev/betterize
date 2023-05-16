import { strapiApiBaseUrl } from "./../config";
import type { ApiBlogPostBlogPost } from "./../types/schemas";

const extras = {
    headers: {
        Authorization: `Bearer ${import.meta.env.PUBLIC_STRAPI_TOKEN}`,
    },
};

export async function getBlogPost(slug: string) {
    const post = await fetch(
        strapiApiBaseUrl + `/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
        extras
    );

    if (post.ok) {
        const result = post
            .json()
            .then((data) => data.data[0] as ApiBlogPostBlogPost)
            .catch((error) => {
                throw new Error(
                    `Unable to extract content of post with given slug. Check attributes names. Error message: ${error}`
                );
            });

        return result;
    } else {
        const error = await post.json();

        throw new Error(
            `Unable to fetch post data from given url. Check fetch data. Error message: ${JSON.stringify(
                error
            )}`
        );
    }
}

export async function getBlogPosts() {
    const posts = await fetch(
        strapiApiBaseUrl + `/blog-posts?&populate=*`,
        extras
    );

    if (posts.ok) {
        const result = posts
            .json()
            .then((content) => content.data as [ApiBlogPostBlogPost])
            .catch((error) => {
                throw new Error(
                    `Unable to extract content of blog_posts. Check attributes names. Error message: ${error}`
                );
            });

        return result;
    } else {
        const error = await posts.json();

        throw new Error(
            `Unable to fetch blog_posts data from given url. Check fetch data. Error message: ${JSON.stringify(
                error
            )}`
        );
    }
}
