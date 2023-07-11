export { default as DynamicZone } from "./components/dynamic_zone/DynamicZone.astro";
export {
    getBlogPost,
    getBlogPosts,
    getBlogPostsSlugs,
} from "./typescript/functions/blog_posts";
export {
    getCaseStudies,
    getCaseStudy,
    getCaseStudiesAttributes,
} from "./typescript/functions/case_studies";
export { sendContactRequest } from "./typescript/functions/contact_form";
export type {
    ApiBlogPostBlogPost,
    ApiAuthorAuthor,
    ApiCaseStudyCaseStudy,
} from "./typescript/types/strapi_generated/contentTypes";
export { getRecommendedCaseStudies } from "./typescript/functions/app_state";
