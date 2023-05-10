/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LayoutEmbedVideoComponent } from './LayoutEmbedVideoComponent';

export type LayoutTwoColumnWithEmbed = {
    id?: number;
    __component?: string;
    headline?: string;
    content?: string;
    embed?: LayoutEmbedVideoComponent;
    embed_column?: LayoutTwoColumnWithEmbed.embed_column;
};

export namespace LayoutTwoColumnWithEmbed {

    export enum embed_column {
        LEFT = 'left',
        RIGHT = 'right',
    }


}

