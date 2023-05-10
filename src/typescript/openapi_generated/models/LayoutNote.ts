/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LayoutNote = {
    id?: number;
    __component?: string;
    headline?: string;
    content?: string;
    type?: LayoutNote.type;
};

export namespace LayoutNote {

    export enum type {
        INFO = 'info',
        WARNING = 'warning',
        ERROR = 'error',
    }


}

