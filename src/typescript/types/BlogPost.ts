import type { Image } from "@typescript/types/Image";

export type BlogPost = {
    title: string;
    content: string;
    excerpt: string;
    visibility: string;
    readingTime: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    featuredImage: Image;
};
