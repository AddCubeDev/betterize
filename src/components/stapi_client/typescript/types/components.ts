import type { Image } from "./Image";

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

// ----------

export interface SimpleHeadline extends StrapiComponent {
    text: string;
}

// ----------

export enum NoteType {
    info = "info",
    warning = "warning",
    error = "error",
}

export interface Note extends StrapiComponent {
    headline: string;
    content: string;
    type: NoteType;
}

// ----------

export interface ContactForm extends StrapiComponent {
    heading: string;
}

// ----------
export interface GalleryImage {
    id: number;
    image: Image;
}

export interface Gallery extends StrapiComponent {
    headline: string;
    columns: number;
    image: GalleryImage[];
}

// ----------

export interface Step {
    id: number;
    headline: string;
    content: string;
    image: Image;
}

export interface StepByStep extends StrapiComponent {
    headline?: string;
    step: Step[];
}

// ----------

export interface BackgroundContent extends StrapiComponent {
    headline: string;
    content?: string;
    image: Image;
}

// ----------
enum PricingPeriod {
    monthly = "monthly",
    yearly = "yearly",
}

export interface Feature {
    id: number;
    text: string;
}
export interface PricingPlan {
    name: string;
    price?: string;
    period?: PricingPeriod;
    features: Feature[];
}

export interface PricingSection extends StrapiComponent {
    plan: PricingPlan[];
}
