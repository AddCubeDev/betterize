/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LayoutAdvantages } from './LayoutAdvantages';
import type { LayoutCallToAction } from './LayoutCallToAction';
import type { LayoutContactForm } from './LayoutContactForm';
import type { LayoutEditor } from './LayoutEditor';
import type { LayoutEmbedVideo } from './LayoutEmbedVideo';
import type { LayoutFaq } from './LayoutFaq';
import type { LayoutGallery } from './LayoutGallery';
import type { LayoutHero } from './LayoutHero';
import type { LayoutIconList } from './LayoutIconList';
import type { LayoutNote } from './LayoutNote';
import type { LayoutPostsList } from './LayoutPostsList';
import type { LayoutPricingSection } from './LayoutPricingSection';
import type { LayoutRedirectButton } from './LayoutRedirectButton';
import type { LayoutSimpleContentWithBackground } from './LayoutSimpleContentWithBackground';
import type { LayoutSimpleHeadline } from './LayoutSimpleHeadline';
import type { LayoutStepByStep } from './LayoutStepByStep';
import type { LayoutTestimonials } from './LayoutTestimonials';
import type { LayoutTwoColumnSection } from './LayoutTwoColumnSection';
import type { LayoutTwoColumnWithEmbed } from './LayoutTwoColumnWithEmbed';

export type DemoListResponseDataItem = {
    id?: number;
    attributes?: {
        content?: Array<(LayoutAdvantages | LayoutHero | LayoutTestimonials | LayoutEmbedVideo | LayoutEditor | LayoutNote | LayoutFaq | LayoutCallToAction | LayoutContactForm | LayoutTwoColumnSection | LayoutIconList | LayoutGallery | LayoutRedirectButton | LayoutStepByStep | LayoutPostsList | LayoutSimpleHeadline | LayoutSimpleContentWithBackground | LayoutPricingSection | LayoutTwoColumnWithEmbed)>;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
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
};

