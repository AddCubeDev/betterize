/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LayoutCallToAction = {
    id?: number;
    __component?: string;
    text?: string;
    action?: LayoutCallToAction.action;
};

export namespace LayoutCallToAction {

    export enum action {
        _CONTACT_FORM = '/contact-form',
        _HERO = '/hero',
        _TESTIMONIALS = '/testimonials',
    }


}

