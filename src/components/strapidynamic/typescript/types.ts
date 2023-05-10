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
