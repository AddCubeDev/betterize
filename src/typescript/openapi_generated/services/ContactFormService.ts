/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactFormListResponse } from '../models/ContactFormListResponse';
import type { ContactFormRequest } from '../models/ContactFormRequest';
import type { ContactFormResponse } from '../models/ContactFormResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContactFormService {

    /**
     * @param sort Sort by attributes ascending (asc) or descending (desc)
     * @param paginationWithCount Return page/pageSize (default: true)
     * @param paginationPage Page number (default: 0)
     * @param paginationPageSize Page size (default: 25)
     * @param paginationStart Offset value (default: 0)
     * @param paginationLimit Number of entities to return (default: 25)
     * @param fields Fields to return (ex: title,author)
     * @param populate Relations to return
     * @param filters Filters to apply
     * @param locale Locale to apply
     * @returns ContactFormListResponse OK
     * @throws ApiError
     */
    public static getContactForms(
        sort?: string,
        paginationWithCount?: boolean,
        paginationPage?: number,
        paginationPageSize?: number,
        paginationStart?: number,
        paginationLimit?: number,
        fields?: string,
        populate?: string,
        filters?: Record<string, any>,
        locale?: string,
    ): CancelablePromise<ContactFormListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contact-forms',
            query: {
                'sort': sort,
                'pagination[withCount]': paginationWithCount,
                'pagination[page]': paginationPage,
                'pagination[pageSize]': paginationPageSize,
                'pagination[start]': paginationStart,
                'pagination[limit]': paginationLimit,
                'fields': fields,
                'populate': populate,
                'filters': filters,
                'locale': locale,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param requestBody
     * @returns ContactFormResponse OK
     * @throws ApiError
     */
    public static postContactForms(
        requestBody: ContactFormRequest,
    ): CancelablePromise<ContactFormResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/contact-forms',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id
     * @returns ContactFormResponse OK
     * @throws ApiError
     */
    public static getContactFormsId(
        id: number,
    ): CancelablePromise<ContactFormResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contact-forms/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns ContactFormResponse OK
     * @throws ApiError
     */
    public static putContactFormsId(
        id: number,
        requestBody: ContactFormRequest,
    ): CancelablePromise<ContactFormResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/contact-forms/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id
     * @returns number OK
     * @throws ApiError
     */
    public static deleteContactFormsId(
        id: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/contact-forms/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }

}
