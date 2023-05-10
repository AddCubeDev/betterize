/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectRequest = {
    data: {
        title: string;
        subtitle: string;
        image: (number | string);
        authors?: Array<(number | string)>;
        body: string;
        slug: string;
        date: string;
    };
};

