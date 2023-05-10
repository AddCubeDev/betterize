/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubcomponentsSimpleIconComponent } from './SubcomponentsSimpleIconComponent';

export type LayoutIconList = {
    id?: number;
    __component?: string;
    type?: LayoutIconList.type;
    companies?: Array<SubcomponentsSimpleIconComponent>;
};

export namespace LayoutIconList {

    export enum type {
        BASIC = 'basic',
        ANIMATED = 'animated',
    }


}

