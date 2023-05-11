import type { Image } from "@typescript/types/Image";

interface StrapiComponent {
    id: number;
    __component: string;
}

// ----------

export interface AdvantageItem {
    id: number;
    headline: string;
    content: string;
    image: Image;
}

export interface Advantages extends StrapiComponent {
    headline?: string;
    subtitle?: string;
    advantage_item: AdvantageItem[];
}

// ----------

export enum HeroType {
    horizontal = "horizontal",
    vertical = "vertical",
}

export interface Hero extends StrapiComponent {
    headline: string;
    content?: string;
    type: HeroType;
    image: Image;
}

// ----------

export enum TestimonialsType {
    basic = "basic",
    animated = "animated",
}

export interface Testimonial {
    id: number;
    company: string;
    body: string;
    name: string;
    website?: string;
    image: Image;
}

export interface Testimonials extends StrapiComponent {
    headline?: string;
    type: TestimonialsType;
    testimonial: Testimonial[];
}

// ----------

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export interface FAQ extends StrapiComponent {
    headline?: string;
    faq_element: FAQItem[];
}

// ----------

export interface RedirectionButton extends StrapiComponent {
    text: string;
    page: string;
}

// ----------

export interface CTAButton extends StrapiComponent {
    text: string;
    action: string;
}

// ----------

export enum CompanyListType {
    basic = "basic",
    animated = "animated",
}

export interface Icon {
    id: number;
    icon: Image;
}

export interface CompanyList extends StrapiComponent {
    type: CompanyListType;
    companies: Icon[];
}

// ----------

export enum EmbedVideoPlatform {
    youtube = "youtube",
    vimeo = "vimeo",
    unsupported = "unsupported",
}

export interface Embed extends StrapiComponent {
    url: string;
    caption?: string;
    autoplay: boolean;
}

// ----------

export enum TwoColumnOrientation {
    left = "left",
    right = "right",
}

export interface TwoColumnWithImage extends StrapiComponent {
    headline: string;
    content: string;
    image_column: TwoColumnOrientation;
    image: Image;
}

export interface TwoColumnWithEmbed extends StrapiComponent {
    headline: string;
    content: string;
    embed_column: TwoColumnOrientation;
    embed: Embed;
}
