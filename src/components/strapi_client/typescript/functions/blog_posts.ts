import type { ApiBlogPostBlogPost } from "./../types/strapi_generated/contentTypes";
import {
    getRequest,
    StrapiCollectionName,
} from "./../functions/strapi_requests";

export async function getBlogPost(slug: string) {
    const result = await getRequest(
        `/blog-posts?locale=all&filters[slug][$eq]=${slug}&populate=*`,
        StrapiCollectionName.blog_post,
        (data: any) => {
            return data.data[0] as ApiBlogPostBlogPost;
        }
    );

    return result;
}

export async function getBlogPosts() {
    const result = await getRequest(
        `/blog-posts?&locale=all&populate=*`,
        StrapiCollectionName.blog_post,
        (data: any) => {
            return data.data as [ApiBlogPostBlogPost];
        }
    );

    return result as [ApiBlogPostBlogPost];
}

export async function getBlogPostsAttributes() {
    const result = await getRequest(
        `/blog-posts?locale=all&populate=seo.metaSocial.image&populate=seo.metaImage`,
        StrapiCollectionName.blog_post,
        (data: any) => {
            return data.data as [ApiBlogPostBlogPost];
        }
    );

    return (result as [ApiBlogPostBlogPost]).map((element) => ({
        slug: element.attributes.slug as string,
        locale: element.attributes.locale as string,
        seo: element.attributes.seo as string,
    }));
}
