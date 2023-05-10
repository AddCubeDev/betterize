/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LayoutEditor } from './LayoutEditor';
import type { LayoutEmbedVideo } from './LayoutEmbedVideo';

export type PostRequest = {
    data: {
        title?: string;
        excerpt?: string;
        visibility?: boolean;
        slug?: string;
        featuredImage: (number | string);
        body?: Array<(LayoutEditor | LayoutEmbedVideo)>;
    };
};

