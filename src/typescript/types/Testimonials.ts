export interface Testimonial {
    paragraph: string;
    name: string;
    company: string;
    src: string;
}

export interface ProcessedTestimonial {
    paragraph: string;
    name: string;
    company: string;
    src: {
        link: string;
        style: string;
        img: string;
    };
}
