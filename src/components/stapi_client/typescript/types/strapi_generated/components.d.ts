import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutAdvantages extends Schema.Component {
  collectionName: 'components_layout_advantages';
  info: {
    displayName: 'Advantages';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    subtitle: Attribute.String &
      Attribute.DefaultTo<'Domy\u015Blny podtytu\u0142'>;
    advantage_item: Attribute.Component<'subcomponents.advantage-item', true> &
      Attribute.Required;
  };
}

export interface LayoutCallToAction extends Schema.Component {
  collectionName: 'components_layout_call_to_actions';
  info: {
    displayName: 'CallToAction';
    description: '';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    action: Attribute.Enumeration<['/contact-form', '/hero', '/testimonials']> &
      Attribute.Required;
  };
}

export interface LayoutCode extends Schema.Component {
  collectionName: 'components_layout_codes';
  info: {
    displayName: 'Code';
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
  };
}

export interface LayoutContactForm extends Schema.Component {
  collectionName: 'components_layout_contact_forms';
  info: {
    displayName: 'ContactForm';
    description: '';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
  };
}

export interface LayoutEditor extends Schema.Component {
  collectionName: 'components_layout_editors';
  info: {
    displayName: 'Editor';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface LayoutEmbedVideo extends Schema.Component {
  collectionName: 'components_layout_embed_videos';
  info: {
    displayName: 'EmbedVideo';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    caption: Attribute.String;
    autoplay: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface LayoutFancyLink extends Schema.Component {
  collectionName: 'components_layout_fancy_links';
  info: {
    displayName: 'FancyLink';
    description: '';
  };
  attributes: {
    url: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'betterize.pl'>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blny tytu\u0142'>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface LayoutFaq extends Schema.Component {
  collectionName: 'components_layout_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    faq_element: Attribute.Component<'subcomponents.faq-element', true> &
      Attribute.Required;
    headline: Attribute.String &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
  };
}

export interface LayoutGallery extends Schema.Component {
  collectionName: 'components_layout_galleries';
  info: {
    displayName: 'Gallery';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    image: Attribute.Component<'subcomponents.gallery-image', true> &
      Attribute.Required;
    columns: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 6;
      }> &
      Attribute.DefaultTo<2>;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    content: Attribute.Text &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: Attribute.Media & Attribute.Required;
    type: Attribute.Enumeration<['horizontal', 'vertical']> &
      Attribute.Required &
      Attribute.DefaultTo<'horizontal'>;
  };
}

export interface LayoutIconList extends Schema.Component {
  collectionName: 'components_layout_icon_lists';
  info: {
    displayName: 'CompanyList';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['basic', 'animated']> &
      Attribute.Required &
      Attribute.DefaultTo<'basic'>;
    companies: Attribute.Component<'subcomponents.simple-icon', true> &
      Attribute.Required;
  };
}

export interface LayoutNote extends Schema.Component {
  collectionName: 'components_subcomponents_notes';
  info: {
    displayName: 'Note';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    content: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    type: Attribute.Enumeration<['info', 'warning', 'error']> &
      Attribute.Required &
      Attribute.DefaultTo<'info'>;
  };
}

export interface LayoutPostsList extends Schema.Component {
  collectionName: 'components_layout_posts_lists';
  info: {
    displayName: 'PostsList';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
  };
}

export interface LayoutPricingSection extends Schema.Component {
  collectionName: 'components_layout_pricing_sections';
  info: {
    displayName: 'PricingSection';
  };
  attributes: {
    plan: Attribute.Component<'subcomponents.pricing-plan', true>;
  };
}

export interface LayoutQuote extends Schema.Component {
  collectionName: 'components_layout_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    content: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    author: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blny Autor'>;
  };
}

export interface LayoutRedirectButton extends Schema.Component {
  collectionName: 'components_layout_redirect_buttons';
  info: {
    displayName: 'RedirectButton';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    page: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'betterize.pl'>;
  };
}

export interface LayoutSimpleContentWithBackground extends Schema.Component {
  collectionName: 'components_layout_simple_content_with_backgrounds';
  info: {
    displayName: 'BackgroundContent';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    content: Attribute.Text &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface LayoutSimpleHeadline extends Schema.Component {
  collectionName: 'components_layout_simple_headlines';
  info: {
    displayName: 'SimpleHeadline';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
  };
}

export interface LayoutSimpleImage extends Schema.Component {
  collectionName: 'components_layout_simple_images';
  info: {
    displayName: 'SimpleImage';
    description: '';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
    caption: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
  };
}

export interface LayoutStepByStep extends Schema.Component {
  collectionName: 'components_layout_step_by_steps';
  info: {
    displayName: 'StepByStep';
    description: '';
  };
  attributes: {
    step: Attribute.Component<'subcomponents.step', true> & Attribute.Required;
    headline: Attribute.String &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
  };
}

export interface LayoutTestimonials extends Schema.Component {
  collectionName: 'components_layout_testimonials';
  info: {
    displayName: 'Testimonials';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    testimonial: Attribute.Component<'subcomponents.testimonial', true> &
      Attribute.Required;
    type: Attribute.Enumeration<['basic', 'animated']> &
      Attribute.Required &
      Attribute.DefaultTo<'basic'>;
  };
}

export interface LayoutTwoColumnSection extends Schema.Component {
  collectionName: 'components_layout_two_column_sections';
  info: {
    displayName: 'TwoColumnWithImage';
    description: '';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: Attribute.Media & Attribute.Required;
    image_column: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface LayoutTwoColumnWithEmbed extends Schema.Component {
  collectionName: 'components_layout_two_column_with_embeds';
  info: {
    displayName: 'TwoColumnWithEmbed';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    embed: Attribute.Component<'layout.embed-video'>;
    embed_column: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface SubcomponentsAdvantageItem extends Schema.Component {
  collectionName: 'components_subcomponents_advantage_items';
  info: {
    displayName: 'AdvantageItem';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    content: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SubcomponentsFaqElement extends Schema.Component {
  collectionName: 'components_subcomponents_faq_elements';
  info: {
    displayName: 'FAQElement';
    description: '';
  };
  attributes: {
    question: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blne pytanie'>;
    answer: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna odpowied\u017A'>;
  };
}

export interface SubcomponentsFeature extends Schema.Component {
  collectionName: 'components_subcomponents_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
  };
}

export interface SubcomponentsGalleryImage extends Schema.Component {
  collectionName: 'components_subcomponents_gallery_images';
  info: {
    displayName: 'GalleryImage';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SubcomponentsPricingPlan extends Schema.Component {
  collectionName: 'components_subcomponents_pricing_plans';
  info: {
    displayName: 'PricingPlan';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna nazwa planu'>;
    features: Attribute.Component<'subcomponents.feature', true> &
      Attribute.Required;
    price: Attribute.String & Attribute.DefaultTo<'200'>;
    period: Attribute.Enumeration<['monthly', 'yearly']> &
      Attribute.DefaultTo<'monthly'>;
    is_highlighted: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    currency: Attribute.Enumeration<['z\u0142oty', 'euro', 'dolar', 'funt']> &
      Attribute.Required &
      Attribute.DefaultTo<'z\u0142oty'>;
  };
}

export interface SubcomponentsSimpleIcon extends Schema.Component {
  collectionName: 'components_subcomponents_simple_icons';
  info: {
    displayName: 'SimpleIcon';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface SubcomponentsStep extends Schema.Component {
  collectionName: 'components_subcomponents_steps';
  info: {
    displayName: 'Step';
    description: '';
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    content: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SubcomponentsTestimonial extends Schema.Component {
  collectionName: 'components_subcomponents_testimonials';
  info: {
    displayName: 'testimonial';
    description: '';
  };
  attributes: {
    company: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna firma/stanowisko'>;
    body: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blna tre\u015B\u0107 opini'>;
    image: Attribute.Media & Attribute.Required;
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Domy\u015Blne imi\u0119 i nazwisko'>;
    website: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'layout.advantages': LayoutAdvantages;
      'layout.call-to-action': LayoutCallToAction;
      'layout.code': LayoutCode;
      'layout.contact-form': LayoutContactForm;
      'layout.editor': LayoutEditor;
      'layout.embed-video': LayoutEmbedVideo;
      'layout.fancy-link': LayoutFancyLink;
      'layout.faq': LayoutFaq;
      'layout.gallery': LayoutGallery;
      'layout.hero': LayoutHero;
      'layout.icon-list': LayoutIconList;
      'layout.note': LayoutNote;
      'layout.posts-list': LayoutPostsList;
      'layout.pricing-section': LayoutPricingSection;
      'layout.quote': LayoutQuote;
      'layout.redirect-button': LayoutRedirectButton;
      'layout.simple-content-with-background': LayoutSimpleContentWithBackground;
      'layout.simple-headline': LayoutSimpleHeadline;
      'layout.simple-image': LayoutSimpleImage;
      'layout.step-by-step': LayoutStepByStep;
      'layout.testimonials': LayoutTestimonials;
      'layout.two-column-section': LayoutTwoColumnSection;
      'layout.two-column-with-embed': LayoutTwoColumnWithEmbed;
      'subcomponents.advantage-item': SubcomponentsAdvantageItem;
      'subcomponents.faq-element': SubcomponentsFaqElement;
      'subcomponents.feature': SubcomponentsFeature;
      'subcomponents.gallery-image': SubcomponentsGalleryImage;
      'subcomponents.pricing-plan': SubcomponentsPricingPlan;
      'subcomponents.simple-icon': SubcomponentsSimpleIcon;
      'subcomponents.step': SubcomponentsStep;
      'subcomponents.testimonial': SubcomponentsTestimonial;
    }
  }
}
