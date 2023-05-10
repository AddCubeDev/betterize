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

export type DemoRequest = {
    data: {
        content?: Array<(LayoutAdvantages | LayoutHero | LayoutTestimonials | LayoutEmbedVideo | LayoutEditor | LayoutNote | LayoutFaq | LayoutCallToAction | LayoutContactForm | LayoutTwoColumnSection | LayoutIconList | LayoutGallery | LayoutRedirectButton | LayoutStepByStep | LayoutPostsList | LayoutSimpleHeadline | LayoutSimpleContentWithBackground | LayoutPricingSection | LayoutTwoColumnWithEmbed)>;
    };
};

