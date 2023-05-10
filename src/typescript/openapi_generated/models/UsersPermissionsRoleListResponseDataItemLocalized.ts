/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UsersPermissionsRoleListResponseDataItemLocalized = {
    id?: number;
    attributes?: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: {
            data?: Array<{
                id?: number;
                attributes?: {
                    action?: string;
                    role?: {
                        data?: {
                            id?: number;
                            attributes?: {
                                name?: string;
                                description?: string;
                                type?: string;
                                permissions?: {
                                    data?: Array<{
                                        id?: number;
                                        attributes?: any;
                                    }>;
                                };
                                users?: {
                                    data?: Array<{
                                        id?: number;
                                        attributes?: {
                                            username?: string;
                                            email?: string;
                                            provider?: string;
                                            resetPasswordToken?: string;
                                            confirmationToken?: string;
                                            confirmed?: boolean;
                                            blocked?: boolean;
                                            role?: {
                                                data?: {
                                                    id?: number;
                                                    attributes?: any;
                                                };
                                            };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: {
                                                data?: {
                                                    id?: number;
                                                    attributes?: {
                                                        firstname?: string;
                                                        lastname?: string;
                                                        username?: string;
                                                        email?: string;
                                                        resetPasswordToken?: string;
                                                        registrationToken?: string;
                                                        isActive?: boolean;
                                                        roles?: {
                                                            data?: Array<{
                                                                id?: number;
                                                                attributes?: {
                                                                    name?: string;
                                                                    code?: string;
                                                                    description?: string;
                                                                    users?: {
                                                                        data?: Array<{
                                                                            id?: number;
                                                                            attributes?: any;
                                                                        }>;
                                                                    };
                                                                    permissions?: {
                                                                        data?: Array<{
                                                                            id?: number;
                                                                            attributes?: {
                                                                                action?: string;
                                                                                subject?: string;
                                                                                properties?: any;
                                                                                conditions?: any;
                                                                                role?: {
                                                                                    data?: {
                                                                                        id?: number;
                                                                                        attributes?: any;
                                                                                    };
                                                                                };
                                                                                createdAt?: string;
                                                                                updatedAt?: string;
                                                                                createdBy?: {
                                                                                    data?: {
                                                                                        id?: number;
                                                                                        attributes?: any;
                                                                                    };
                                                                                };
                                                                                updatedBy?: {
                                                                                    data?: {
                                                                                        id?: number;
                                                                                        attributes?: any;
                                                                                    };
                                                                                };
                                                                            };
                                                                        }>;
                                                                    };
                                                                    createdAt?: string;
                                                                    updatedAt?: string;
                                                                    createdBy?: {
                                                                        data?: {
                                                                            id?: number;
                                                                            attributes?: any;
                                                                        };
                                                                    };
                                                                    updatedBy?: {
                                                                        data?: {
                                                                            id?: number;
                                                                            attributes?: any;
                                                                        };
                                                                    };
                                                                };
                                                            }>;
                                                        };
                                                        blocked?: boolean;
                                                        preferedLanguage?: string;
                                                        createdAt?: string;
                                                        updatedAt?: string;
                                                        createdBy?: {
                                                            data?: {
                                                                id?: number;
                                                                attributes?: any;
                                                            };
                                                        };
                                                        updatedBy?: {
                                                            data?: {
                                                                id?: number;
                                                                attributes?: any;
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                            updatedBy?: {
                                                data?: {
                                                    id?: number;
                                                    attributes?: any;
                                                };
                                            };
                                        };
                                    }>;
                                };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: {
                                    data?: {
                                        id?: number;
                                        attributes?: any;
                                    };
                                };
                                updatedBy?: {
                                    data?: {
                                        id?: number;
                                        attributes?: any;
                                    };
                                };
                            };
                        };
                    };
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                        data?: {
                            id?: number;
                            attributes?: any;
                        };
                    };
                    updatedBy?: {
                        data?: {
                            id?: number;
                            attributes?: any;
                        };
                    };
                };
            }>;
        };
        users?: {
            data?: Array<{
                id?: number;
                attributes?: any;
            }>;
        };
        createdAt?: string;
        updatedAt?: string;
        createdBy?: {
            data?: {
                id?: number;
                attributes?: any;
            };
        };
        updatedBy?: {
            data?: {
                id?: number;
                attributes?: any;
            };
        };
    };
};

