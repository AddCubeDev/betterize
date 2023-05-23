import {
  CollectionTypeSchema,
  StringAttribute,
  RequiredAttribute,
  SetMinMaxLength,
  JSONAttribute,
  DefaultTo,
  RelationAttribute,
  DateTimeAttribute,
  PrivateAttribute,
  EmailAttribute,
  UniqueAttribute,
  PasswordAttribute,
  BooleanAttribute,
  EnumerationAttribute,
  BigIntegerAttribute,
  IntegerAttribute,
  DecimalAttribute,
  SetMinMax,
  SingleTypeSchema,
  MediaAttribute,
  TextAttribute,
  UIDAttribute,
  DynamicZoneAttribute,
  DateAttribute,
  ComponentSchema,
  ComponentAttribute,
  RichTextAttribute,
} from '@strapi/strapi';

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: JSONAttribute & DefaultTo<{}>;
    conditions: JSONAttribute & DefaultTo<[]>;
    role: RelationAttribute<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    username: StringAttribute;
    email: EmailAttribute &
      RequiredAttribute &
      PrivateAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: StringAttribute & PrivateAttribute;
    registrationToken: StringAttribute & PrivateAttribute;
    isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
    roles: RelationAttribute<'admin::user', 'manyToMany', 'admin::role'> &
      PrivateAttribute;
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
    preferedLanguage: StringAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
    updatedBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
  };
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    code: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute;
    users: RelationAttribute<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: RelationAttribute<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
    updatedBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
  };
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }> &
      DefaultTo<''>;
    type: EnumerationAttribute<['read-only', 'full-access', 'custom']> &
      RequiredAttribute &
      DefaultTo<'read-only'>;
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: DateTimeAttribute;
    permissions: RelationAttribute<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: DateTimeAttribute;
    lifespan: BigIntegerAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    token: RelationAttribute<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface AdminTransferToken extends CollectionTypeSchema {
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }> &
      DefaultTo<''>;
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: DateTimeAttribute;
    permissions: RelationAttribute<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: DateTimeAttribute;
    lifespan: BigIntegerAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface AdminTransferTokenPermission extends CollectionTypeSchema {
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    token: RelationAttribute<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute & RequiredAttribute;
    alternativeText: StringAttribute;
    caption: StringAttribute;
    width: IntegerAttribute;
    height: IntegerAttribute;
    formats: JSONAttribute;
    hash: StringAttribute & RequiredAttribute;
    ext: StringAttribute;
    mime: StringAttribute & RequiredAttribute;
    size: DecimalAttribute & RequiredAttribute;
    url: StringAttribute & RequiredAttribute;
    previewUrl: StringAttribute;
    provider: StringAttribute & RequiredAttribute;
    provider_metadata: JSONAttribute;
    related: RelationAttribute<'plugin::upload.file', 'morphToMany'>;
    folder: RelationAttribute<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      PrivateAttribute;
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1;
      }>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }>;
    pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute;
    parent: RelationAttribute<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: RelationAttribute<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: RelationAttribute<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginI18NLocale extends CollectionTypeSchema {
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: StringAttribute & UniqueAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute & RequiredAttribute;
    role: RelationAttribute<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 3;
      }>;
    description: StringAttribute;
    type: StringAttribute & UniqueAttribute;
    permissions: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 3;
      }>;
    email: EmailAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: StringAttribute;
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: StringAttribute & PrivateAttribute;
    confirmationToken: StringAttribute & PrivateAttribute;
    confirmed: BooleanAttribute & DefaultTo<false>;
    blocked: BooleanAttribute & DefaultTo<false>;
    role: RelationAttribute<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiAppStateAppState extends SingleTypeSchema {
  info: {
    singularName: 'app-state';
    pluralName: 'app-states';
    displayName: 'AppState';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    AnyContentModifiedAfterBuild: BooleanAttribute &
      RequiredAttribute &
      DefaultTo<false>;
    LastBuild: DateTimeAttribute;
    logo: MediaAttribute & RequiredAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::app-state.app-state',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::app-state.app-state',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiAuthorAuthor extends CollectionTypeSchema {
  info: {
    singularName: 'author';
    pluralName: 'authors';
    displayName: 'Author';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: StringAttribute & RequiredAttribute;
    image: MediaAttribute & RequiredAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiBlogPostBlogPost extends CollectionTypeSchema {
  info: {
    singularName: 'blog-post';
    pluralName: 'blog-posts';
    displayName: 'BlogPost';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny tytu\u0142'>;
    excerpt: TextAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny opis'>;
    slug: UIDAttribute<'api::blog-post.blog-post', 'title'> & RequiredAttribute;
    featured_image: MediaAttribute & RequiredAttribute;
    body: DynamicZoneAttribute<
      [
        'layout.editor',
        'layout.embed-video',
        'layout.fancy-link',
        'layout.note',
        'layout.quote',
        'layout.simple-image'
      ]
    > &
      RequiredAttribute;
    date: DateAttribute & RequiredAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiCaseStudyCaseStudy extends CollectionTypeSchema {
  info: {
    singularName: 'case-study';
    pluralName: 'case-studies';
    displayName: 'CaseStudy';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny tytu\u0142'>;
    subtitle: TextAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: MediaAttribute & RequiredAttribute;
    authors: RelationAttribute<
      'api::case-study.case-study',
      'oneToMany',
      'api::author.author'
    >;
    slug: UIDAttribute<'api::case-study.case-study', 'title'> &
      RequiredAttribute;
    date: DateAttribute & RequiredAttribute;
    body: DynamicZoneAttribute<
      [
        'layout.editor',
        'layout.embed-video',
        'layout.fancy-link',
        'layout.note',
        'layout.quote',
        'layout.simple-image'
      ]
    > &
      RequiredAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::case-study.case-study',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::case-study.case-study',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiContactFormContactForm extends CollectionTypeSchema {
  info: {
    singularName: 'contact-form';
    pluralName: 'contact-forms';
    displayName: 'ContactForm';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: StringAttribute & RequiredAttribute;
    email: StringAttribute & RequiredAttribute;
    message: TextAttribute & RequiredAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::contact-form.contact-form',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::contact-form.contact-form',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiWebsiteBuildWebsiteBuild extends CollectionTypeSchema {
  info: {
    singularName: 'website-build';
    pluralName: 'website-builds';
    displayName: 'WebsiteBuild';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    state: EnumerationAttribute<['started', 'finished', 'failed', 'aborted']> &
      RequiredAttribute &
      DefaultTo<'started'>;
    author: StringAttribute;
    build_time: StringAttribute;
    message: TextAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::website-build.website-build',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::website-build.website-build',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface LayoutAdvantages extends ComponentSchema {
  info: {
    displayName: 'Advantages';
    description: '';
  };
  attributes: {
    headline: StringAttribute & DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    subtitle: StringAttribute & DefaultTo<'Domy\u015Blny podtytu\u0142'>;
    advantage_item: ComponentAttribute<'subcomponents.advantage-item', true> &
      RequiredAttribute;
  };
}

export interface LayoutCallToAction extends ComponentSchema {
  info: {
    displayName: 'CallToAction';
    description: '';
  };
  attributes: {
    text: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    action: EnumerationAttribute<['/contact-form', '/hero', '/testimonials']> &
      RequiredAttribute;
  };
}

export interface LayoutCode extends ComponentSchema {
  info: {
    displayName: 'Code';
  };
  attributes: {
    content: TextAttribute & RequiredAttribute;
  };
}

export interface LayoutContactForm extends ComponentSchema {
  info: {
    displayName: 'ContactForm';
    description: '';
  };
  attributes: {
    heading: StringAttribute & DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
  };
}

export interface LayoutEditor extends ComponentSchema {
  info: {
    displayName: 'Editor';
    description: '';
  };
  attributes: {
    content: RichTextAttribute & RequiredAttribute;
  };
}

export interface LayoutEmbedVideo extends ComponentSchema {
  info: {
    displayName: 'EmbedVideo';
    description: '';
  };
  attributes: {
    url: StringAttribute & RequiredAttribute;
    caption: StringAttribute;
    autoplay: BooleanAttribute & RequiredAttribute & DefaultTo<false>;
  };
}

export interface LayoutFancyLink extends ComponentSchema {
  info: {
    displayName: 'FancyLink';
    description: '';
  };
  attributes: {
    url: StringAttribute & RequiredAttribute & DefaultTo<'betterize.pl'>;
    title: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny tytu\u0142'>;
    description: TextAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: MediaAttribute & RequiredAttribute;
  };
}

export interface LayoutFaq extends ComponentSchema {
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    faq_element: ComponentAttribute<'subcomponents.faq-element', true> &
      RequiredAttribute;
    headline: StringAttribute & DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
  };
}

export interface LayoutGallery extends ComponentSchema {
  info: {
    displayName: 'Gallery';
    description: '';
  };
  attributes: {
    headline: StringAttribute & DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    image: ComponentAttribute<'subcomponents.gallery-image', true> &
      RequiredAttribute;
    columns: IntegerAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
        max: 6;
      }> &
      DefaultTo<2>;
  };
}

export interface LayoutHero extends ComponentSchema {
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    headline: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    content: TextAttribute & DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: MediaAttribute & RequiredAttribute;
    type: EnumerationAttribute<['horizontal', 'vertical']> &
      RequiredAttribute &
      DefaultTo<'horizontal'>;
  };
}

export interface LayoutIconList extends ComponentSchema {
  info: {
    displayName: 'CompanyList';
    description: '';
  };
  attributes: {
    type: EnumerationAttribute<['basic', 'animated']> &
      RequiredAttribute &
      DefaultTo<'basic'>;
    companies: ComponentAttribute<'subcomponents.simple-icon', true> &
      RequiredAttribute;
  };
}

export interface LayoutNote extends ComponentSchema {
  info: {
    displayName: 'Note';
    description: '';
  };
  attributes: {
    headline: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    content: TextAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    type: EnumerationAttribute<['info', 'warning', 'error']> &
      RequiredAttribute &
      DefaultTo<'info'>;
  };
}

export interface LayoutPostsList extends ComponentSchema {
  info: {
    displayName: 'PostsList';
  };
  attributes: {
    headline: StringAttribute & DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
  };
}

export interface LayoutPricingSection extends ComponentSchema {
  info: {
    displayName: 'PricingSection';
  };
  attributes: {
    plan: ComponentAttribute<'subcomponents.pricing-plan', true>;
  };
}

export interface LayoutQuote extends ComponentSchema {
  info: {
    displayName: 'Quote';
  };
  attributes: {
    content: TextAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    author: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny Autor'>;
  };
}

export interface LayoutRedirectButton extends ComponentSchema {
  info: {
    displayName: 'RedirectButton';
  };
  attributes: {
    text: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    page: StringAttribute & RequiredAttribute & DefaultTo<'betterize.pl'>;
  };
}

export interface LayoutSimpleContentWithBackground extends ComponentSchema {
  info: {
    displayName: 'BackgroundContent';
    description: '';
  };
  attributes: {
    headline: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    content: TextAttribute & DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: MediaAttribute & RequiredAttribute;
  };
}

export interface LayoutSimpleHeadline extends ComponentSchema {
  info: {
    displayName: 'SimpleHeadline';
  };
  attributes: {
    text: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
  };
}

export interface LayoutSimpleImage extends ComponentSchema {
  info: {
    displayName: 'SimpleImage';
    description: '';
  };
  attributes: {
    img: MediaAttribute & RequiredAttribute;
    caption: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
  };
}

export interface LayoutStepByStep extends ComponentSchema {
  info: {
    displayName: 'StepByStep';
    description: '';
  };
  attributes: {
    step: ComponentAttribute<'subcomponents.step', true> & RequiredAttribute;
    headline: StringAttribute & DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
  };
}

export interface LayoutTestimonials extends ComponentSchema {
  info: {
    displayName: 'Testimonials';
    description: '';
  };
  attributes: {
    headline: StringAttribute & DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    testimonial: ComponentAttribute<'subcomponents.testimonial', true> &
      RequiredAttribute;
    type: EnumerationAttribute<['basic', 'animated']> &
      RequiredAttribute &
      DefaultTo<'basic'>;
  };
}

export interface LayoutTwoColumnSection extends ComponentSchema {
  info: {
    displayName: 'TwoColumnWithImage';
    description: '';
  };
  attributes: {
    content: RichTextAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: MediaAttribute & RequiredAttribute;
    image_column: EnumerationAttribute<['left', 'right']> &
      RequiredAttribute &
      DefaultTo<'left'>;
  };
}

export interface LayoutTwoColumnWithEmbed extends ComponentSchema {
  info: {
    displayName: 'TwoColumnWithEmbed';
    description: '';
  };
  attributes: {
    content: RichTextAttribute & RequiredAttribute;
    embed: ComponentAttribute<'layout.embed-video'>;
    embed_column: EnumerationAttribute<['left', 'right']> &
      RequiredAttribute &
      DefaultTo<'left'>;
  };
}

export interface SubcomponentsAdvantageItem extends ComponentSchema {
  info: {
    displayName: 'AdvantageItem';
    description: '';
  };
  attributes: {
    headline: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    content: TextAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: MediaAttribute & RequiredAttribute;
  };
}

export interface SubcomponentsFaqElement extends ComponentSchema {
  info: {
    displayName: 'FAQElement';
    description: '';
  };
  attributes: {
    question: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blne pytanie'>;
    answer: TextAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna odpowied\u017A'>;
  };
}

export interface SubcomponentsFeature extends ComponentSchema {
  info: {
    displayName: 'Feature';
  };
  attributes: {
    text: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
  };
}

export interface SubcomponentsGalleryImage extends ComponentSchema {
  info: {
    displayName: 'GalleryImage';
  };
  attributes: {
    image: MediaAttribute & RequiredAttribute;
  };
}

export interface SubcomponentsPricingPlan extends ComponentSchema {
  info: {
    displayName: 'PricingPlan';
    description: '';
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna nazwa planu'>;
    features: ComponentAttribute<'subcomponents.feature', true> &
      RequiredAttribute;
    price: StringAttribute & DefaultTo<'200'>;
    period: EnumerationAttribute<['monthly', 'yearly']> & DefaultTo<'monthly'>;
    is_highlighted: BooleanAttribute & RequiredAttribute & DefaultTo<false>;
    currency: EnumerationAttribute<['z\u0142oty', 'euro', 'dolar', 'funt']> &
      RequiredAttribute &
      DefaultTo<'z\u0142oty'>;
  };
}

export interface SubcomponentsSimpleIcon extends ComponentSchema {
  info: {
    displayName: 'SimpleIcon';
  };
  attributes: {
    icon: MediaAttribute & RequiredAttribute;
  };
}

export interface SubcomponentsStep extends ComponentSchema {
  info: {
    displayName: 'Step';
    description: '';
  };
  attributes: {
    headline: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blny nag\u0142\u00F3wek'>;
    content: TextAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107'>;
    image: MediaAttribute & RequiredAttribute;
  };
}

export interface SubcomponentsTestimonial extends ComponentSchema {
  info: {
    displayName: 'testimonial';
    description: '';
  };
  attributes: {
    company: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna firma/stanowisko'>;
    body: TextAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blna tre\u015B\u0107 opini'>;
    image: MediaAttribute & RequiredAttribute;
    name: StringAttribute &
      RequiredAttribute &
      DefaultTo<'Domy\u015Blne imi\u0119 i nazwisko'>;
    website: StringAttribute;
  };
}

declare global {
  namespace Strapi {
    interface Schemas {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::app-state.app-state': ApiAppStateAppState;
      'api::author.author': ApiAuthorAuthor;
      'api::blog-post.blog-post': ApiBlogPostBlogPost;
      'api::case-study.case-study': ApiCaseStudyCaseStudy;
      'api::contact-form.contact-form': ApiContactFormContactForm;
      'api::website-build.website-build': ApiWebsiteBuildWebsiteBuild;
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
