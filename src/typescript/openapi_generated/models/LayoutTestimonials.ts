/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubcomponentsTestimonialComponent } from './SubcomponentsTestimonialComponent';

export type LayoutTestimonials = {
    id?: number;
    __component?: string;
    headline?: string;
    testimonial?: Array<SubcomponentsTestimonialComponent>;
    type?: LayoutTestimonials.type;
};

export namespace LayoutTestimonials {

    export enum type {
        BASIC = 'basic',
        ANIMATED = 'animated',
    }


}

