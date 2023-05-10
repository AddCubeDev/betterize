/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubcomponentsPricingPlanComponent = {
    id?: number;
    name?: string;
    features?: Array<{
        id?: number;
        text?: string;
    }>;
    price?: string;
    period?: SubcomponentsPricingPlanComponent.period;
};

export namespace SubcomponentsPricingPlanComponent {

    export enum period {
        MONTHLY = 'monthly',
        YEARLY = 'yearly',
    }


}

