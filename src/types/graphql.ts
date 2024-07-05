import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	BooleanType: { input: boolean; output: boolean };
	CustomData: { input: Record<string, unknown>; output: Record<string, unknown> };
	DateTime: { input: string; output: string };
	FloatType: { input: number; output: number };
	IntType: { input: number; output: number };
	ItemId: { input: string; output: string };
	JsonField: { input: unknown; output: unknown };
	MetaTagAttributes: { input: Record<string, string>; output: Record<string, string> };
	UploadId: { input: string; output: string };
};

export type AboutMeModelBiographyField = {
	__typename?: 'AboutMeModelBiographyField';
	blocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

/** Record of type 👨‍💻 About me (about_me) */
export type AboutMeRecord = RecordInterface & {
	__typename?: 'AboutMeRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	backgroundImage?: Maybe<ImageFileField>;
	biography?: Maybe<AboutMeModelBiographyField>;
	businessPhoto?: Maybe<ImageFileField>;
	concepting?: Maybe<Scalars['JsonField']['output']>;
	createdAt: Scalars['DateTime']['output'];
	description?: Maybe<Scalars['String']['output']>;
	design?: Maybe<Scalars['JsonField']['output']>;
	development?: Maybe<Scalars['JsonField']['output']>;
	heading?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	management?: Maybe<Scalars['JsonField']['output']>;
	photos: Array<ImageFileField>;
	profilePhoto?: Maybe<ImageFileField>;
	quote?: Maybe<Scalars['String']['output']>;
	seo?: Maybe<SeoField>;
	stats?: Maybe<Scalars['JsonField']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	updatedAt: Scalars['DateTime']['output'];
};

/** Record of type 👨‍💻 About me (about_me) */
export type AboutMeRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type AboutModelFrustrationsField = {
	__typename?: 'AboutModelFrustrationsField';
	blocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

export type AboutModelGoalsField = {
	__typename?: 'AboutModelGoalsField';
	blocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

export type AboutModelProfileTextField = {
	__typename?: 'AboutModelProfileTextField';
	blocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

/** Record of type About (about) */
export type AboutRecord = RecordInterface & {
	__typename?: 'AboutRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	agencies: Array<AgencyRecord>;
	archetype?: Maybe<Scalars['String']['output']>;
	createdAt: Scalars['DateTime']['output'];
	frustrations?: Maybe<AboutModelFrustrationsField>;
	goals?: Maybe<AboutModelGoalsField>;
	id: Scalars['ItemId']['output'];
	location?: Maybe<Scalars['String']['output']>;
	motivation?: Maybe<Scalars['JsonField']['output']>;
	occupation?: Maybe<Scalars['String']['output']>;
	personaPhoto?: Maybe<FileField>;
	personality?: Maybe<Scalars['JsonField']['output']>;
	profilePhoto?: Maybe<FileField>;
	profileText?: Maybe<AboutModelProfileTextField>;
	profileTitle?: Maybe<Scalars['String']['output']>;
	relationStatus?: Maybe<Scalars['String']['output']>;
	seo?: Maybe<SeoField>;
	studies: Array<EducationRecord>;
	updatedAt: Scalars['DateTime']['output'];
};

/** Record of type About (about) */
export type AboutRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type Agency (agency) */
export type AgencyRecord = RecordInterface & {
	__typename?: 'AgencyRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	agency: Scalars['String']['output'];
	createdAt: Scalars['DateTime']['output'];
	endYear?: Maybe<Scalars['IntType']['output']>;
	function: Scalars['String']['output'];
	id: Scalars['ItemId']['output'];
	logo?: Maybe<FileField>;
	startYear: Scalars['IntType']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Block of type Agency (agency) */
export type AgencyRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type AltFileField = FileFieldInterface & {
	__typename?: 'AltFileField';
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt: Scalars['String']['output'];
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint?: Maybe<FocalPoint>;
	format: Scalars['String']['output'];
	height?: Maybe<Scalars['IntType']['output']>;
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage?: Maybe<ResponsiveImage>;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width?: Maybe<Scalars['IntType']['output']>;
};

export type AltFileFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type AltFileFieldCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type AltFileFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type AltFileFieldUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

export type ArticleModelContentField =
	| CodeRecord
	| GalleryRecord
	| MediaItemRecord
	| QuoteRecord
	| TextRecord;

export type ArticleModelContentFieldListListNonNullMultiLocaleField = {
	__typename?: 'ArticleModelContentFieldListListNonNullMultiLocaleField';
	locale?: Maybe<SiteLocale | '%future added value'>;
	value: Array<ArticleModelContentField>;
};

export type ArticleModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<ArticleModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_locales?: InputMaybe<LocalesFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	createdAt?: InputMaybe<CreatedAtFilter>;
	featureImage?: InputMaybe<FileFilter>;
	id?: InputMaybe<ItemIdFilter>;
	slug?: InputMaybe<SlugFilter>;
	sources?: InputMaybe<JsonFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ArticleModelOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	_FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	_IsValidAsc = '_isValid_ASC',
	_IsValidDesc = '_isValid_DESC',
	_PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	_PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	_PublishedAtAsc = '_publishedAt_ASC',
	_PublishedAtDesc = '_publishedAt_DESC',
	_StatusAsc = '_status_ASC',
	_StatusDesc = '_status_DESC',
	_UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	_UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
}

/** Record of type 🏷️ Article overview (article_overview) */
export type ArticleOverviewRecord = RecordInterface & {
	__typename?: 'ArticleOverviewRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	backgroundImage?: Maybe<ImageFileField>;
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	seo?: Maybe<SeoField>;
	tagline?: Maybe<Scalars['String']['output']>;
	title: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Record of type 🏷️ Article overview (article_overview) */
export type ArticleOverviewRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📰 Article (article) */
export type ArticleRecord = RecordInterface & {
	__typename?: 'ArticleRecord';
	_allContentLocales?: Maybe<Array<ArticleModelContentFieldListListNonNullMultiLocaleField>>;
	_allSourcesLocales?: Maybe<Array<JsonFieldMultiLocaleField>>;
	_allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_locales: Array<SiteLocale | '%future added value'>;
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content: Array<ArticleModelContentField>;
	createdAt: Scalars['DateTime']['output'];
	featureImage?: Maybe<ImageFileField>;
	id: Scalars['ItemId']['output'];
	slug: Scalars['String']['output'];
	sources?: Maybe<Scalars['JsonField']['output']>;
	title: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Record of type 📰 Article (article) */
export type ArticleRecord_AllContentLocalesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📰 Article (article) */
export type ArticleRecord_AllSourcesLocalesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📰 Article (article) */
export type ArticleRecord_AllTitleLocalesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📰 Article (article) */
export type ArticleRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📰 Article (article) */
export type ArticleRecordContentArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📰 Article (article) */
export type ArticleRecordSourcesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📰 Article (article) */
export type ArticleRecordTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type CaseModelChallengeField = {
	__typename?: 'CaseModelChallengeField';
	blocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

export type CaseModelChallengeFieldMultiLocaleField = {
	__typename?: 'CaseModelChallengeFieldMultiLocaleField';
	locale?: Maybe<SiteLocale | '%future added value'>;
	value?: Maybe<CaseModelChallengeField>;
};

export type CaseModelContentField = GalleryRecord | MediaItemRecord | QuoteRecord | TextRecord;

export type CaseModelContentFieldListListNonNullMultiLocaleField = {
	__typename?: 'CaseModelContentFieldListListNonNullMultiLocaleField';
	locale?: Maybe<SiteLocale | '%future added value'>;
	value: Array<CaseModelContentField>;
};

export type CaseModelExcerptField = {
	__typename?: 'CaseModelExcerptField';
	blocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

export type CaseModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<CaseModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<CaseModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	agency?: InputMaybe<StringFilter>;
	challenge?: InputMaybe<StructuredTextFilter>;
	client?: InputMaybe<StringFilter>;
	createdAt?: InputMaybe<CreatedAtFilter>;
	excerpt?: InputMaybe<StructuredTextFilter>;
	id?: InputMaybe<ItemIdFilter>;
	logo?: InputMaybe<FileFilter>;
	outcome?: InputMaybe<StructuredTextFilter>;
	projectUrl?: InputMaybe<StringFilter>;
	quote?: InputMaybe<StringFilter>;
	scope?: InputMaybe<JsonFilter>;
	seo?: InputMaybe<SeoFilter>;
	slug?: InputMaybe<SlugFilter>;
	thumbnail?: InputMaybe<FileFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<UpdatedAtFilter>;
	video?: InputMaybe<FileFilter>;
	year?: InputMaybe<IntegerFilter>;
};

export enum CaseModelOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	_FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	_IsValidAsc = '_isValid_ASC',
	_IsValidDesc = '_isValid_DESC',
	_PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	_PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	_PublishedAtAsc = '_publishedAt_ASC',
	_PublishedAtDesc = '_publishedAt_DESC',
	_StatusAsc = '_status_ASC',
	_StatusDesc = '_status_DESC',
	_UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	_UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	AgencyAsc = 'agency_ASC',
	AgencyDesc = 'agency_DESC',
	ClientAsc = 'client_ASC',
	ClientDesc = 'client_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	ProjectUrlAsc = 'projectUrl_ASC',
	ProjectUrlDesc = 'projectUrl_DESC',
	QuoteAsc = 'quote_ASC',
	QuoteDesc = 'quote_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	YearAsc = 'year_ASC',
	YearDesc = 'year_DESC',
}

export type CaseModelOutcomeField = {
	__typename?: 'CaseModelOutcomeField';
	blocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

export type CaseModelOutcomeFieldMultiLocaleField = {
	__typename?: 'CaseModelOutcomeFieldMultiLocaleField';
	locale?: Maybe<SiteLocale | '%future added value'>;
	value?: Maybe<CaseModelOutcomeField>;
};

/** Record of type Case (case) */
export type CaseRecord = RecordInterface & {
	__typename?: 'CaseRecord';
	_allChallengeLocales?: Maybe<Array<CaseModelChallengeFieldMultiLocaleField>>;
	_allContentLocales?: Maybe<Array<CaseModelContentFieldListListNonNullMultiLocaleField>>;
	_allOutcomeLocales?: Maybe<Array<CaseModelOutcomeFieldMultiLocaleField>>;
	_allQuoteLocales?: Maybe<Array<StringMultiLocaleField>>;
	_allSectionsLocales?: Maybe<Array<SectionRecordListListNonNullMultiLocaleField>>;
	_allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	agency: Scalars['String']['output'];
	challenge?: Maybe<CaseModelChallengeField>;
	client: Scalars['String']['output'];
	content: Array<CaseModelContentField>;
	createdAt: Scalars['DateTime']['output'];
	excerpt: CaseModelExcerptField;
	id: Scalars['ItemId']['output'];
	logo: AltFileField;
	outcome?: Maybe<CaseModelOutcomeField>;
	projectUrl?: Maybe<Scalars['String']['output']>;
	quote?: Maybe<Scalars['String']['output']>;
	scope?: Maybe<Scalars['JsonField']['output']>;
	sections: Array<SectionRecord>;
	seo?: Maybe<SeoField>;
	slug: Scalars['String']['output'];
	thumbnail: FileField;
	title?: Maybe<Scalars['String']['output']>;
	updatedAt: Scalars['DateTime']['output'];
	video?: Maybe<FileField>;
	year?: Maybe<Scalars['IntType']['output']>;
};

/** Record of type Case (case) */
export type CaseRecord_AllChallengeLocalesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecord_AllContentLocalesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecord_AllOutcomeLocalesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecord_AllQuoteLocalesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecord_AllSectionsLocalesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecord_AllTitleLocalesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecordChallengeArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecordContentArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecordOutcomeArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecordQuoteArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecordSectionsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type Case (case) */
export type CaseRecordTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🧑‍💻 Code (code) */
export type CodeRecord = RecordInterface & {
	__typename?: 'CodeRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	code: Scalars['String']['output'];
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	language: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Block of type 🧑‍💻 Code (code) */
export type CodeRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🧑‍💻 Code (code) */
export type CodeRecordCodeArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionMetadata = {
	__typename?: 'CollectionMetadata';
	count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
	Black = 'black',
	Blue = 'blue',
	Brown = 'brown',
	Cyan = 'cyan',
	Green = 'green',
	Grey = 'grey',
	Orange = 'orange',
	Pink = 'pink',
	Purple = 'purple',
	Red = 'red',
	White = 'white',
	Yellow = 'yellow',
}

export type ColorField = {
	__typename?: 'ColorField';
	alpha: Scalars['IntType']['output'];
	blue: Scalars['IntType']['output'];
	cssRgb: Scalars['String']['output'];
	green: Scalars['IntType']['output'];
	hex: Scalars['String']['output'];
	red: Scalars['IntType']['output'];
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
	/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Block of type Education (education) */
export type EducationRecord = RecordInterface & {
	__typename?: 'EducationRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	createdAt: Scalars['DateTime']['output'];
	degree: Scalars['String']['output'];
	endYear?: Maybe<Scalars['IntType']['output']>;
	id: Scalars['ItemId']['output'];
	institution: Scalars['String']['output'];
	startYear: Scalars['IntType']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Block of type Education (education) */
export type EducationRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export enum FaviconType {
	AppleTouchIcon = 'appleTouchIcon',
	Icon = 'icon',
	MsApplication = 'msApplication',
}

export type FileField = FileFieldInterface & {
	__typename?: 'FileField';
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt?: Maybe<Scalars['String']['output']>;
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint?: Maybe<FocalPoint>;
	format: Scalars['String']['output'];
	height?: Maybe<Scalars['IntType']['output']>;
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage?: Maybe<ResponsiveImage>;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width?: Maybe<Scalars['IntType']['output']>;
};

export type FileFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type FileFieldCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type FileFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt?: Maybe<Scalars['String']['output']>;
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint?: Maybe<FocalPoint>;
	format: Scalars['String']['output'];
	height?: Maybe<Scalars['IntType']['output']>;
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage?: Maybe<ResponsiveImage>;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width?: Maybe<Scalars['IntType']['output']>;
};

export type FileFieldInterfaceAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type FileFieldInterfaceCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type FileFieldInterfaceTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
	/** Search for records with an exact match. The specified value must be an Upload ID */
	eq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records that have one of the specified uploads */
	in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
	/** Exclude records with an exact match. The specified value must be an Upload ID */
	neq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Filter records that do not have one of the specified uploads */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Block of type 🖼️ Gallery (gallery) */
export type GalleryRecord = RecordInterface & {
	__typename?: 'GalleryRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	assets: Array<ImageFileField>;
	createdAt: Scalars['DateTime']['output'];
	galleryType?: Maybe<Scalars['String']['output']>;
	id: Scalars['ItemId']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Block of type 🖼️ Gallery (gallery) */
export type GalleryRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type GlobalSeoField = {
	__typename?: 'GlobalSeoField';
	facebookPageUrl?: Maybe<Scalars['String']['output']>;
	fallbackSeo?: Maybe<SeoField>;
	siteName?: Maybe<Scalars['String']['output']>;
	titleSuffix?: Maybe<Scalars['String']['output']>;
	twitterAccount?: Maybe<Scalars['String']['output']>;
};

export type HomeModelIntroductionField = {
	__typename?: 'HomeModelIntroductionField';
	blocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

/** Record of type 🏠 Home (home) */
export type HomeRecord = RecordInterface & {
	__typename?: 'HomeRecord';
	_allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	clientHeading?: Maybe<Scalars['String']['output']>;
	clients?: Maybe<Scalars['JsonField']['output']>;
	createdAt: Scalars['DateTime']['output'];
	featuredProjects: Array<ProjectRecord>;
	id: Scalars['ItemId']['output'];
	introduction?: Maybe<HomeModelIntroductionField>;
	seo?: Maybe<SeoField>;
	title: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Record of type 🏠 Home (home) */
export type HomeRecord_AllSeoLocalesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 🏠 Home (home) */
export type HomeRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 🏠 Home (home) */
export type HomeRecordSeoArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageFileField = FileFieldInterface & {
	__typename?: 'ImageFileField';
	_createdAt: Scalars['DateTime']['output'];
	/** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	alt?: Maybe<Scalars['String']['output']>;
	author?: Maybe<Scalars['String']['output']>;
	basename: Scalars['String']['output'];
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	colors: Array<ColorField>;
	copyright?: Maybe<Scalars['String']['output']>;
	customData: Scalars['CustomData']['output'];
	exifInfo: Scalars['CustomData']['output'];
	filename: Scalars['String']['output'];
	focalPoint: FocalPoint;
	format: Scalars['String']['output'];
	height: Scalars['IntType']['output'];
	id: Scalars['UploadId']['output'];
	md5: Scalars['String']['output'];
	mimeType: Scalars['String']['output'];
	notes?: Maybe<Scalars['String']['output']>;
	responsiveImage: ResponsiveImage;
	size: Scalars['IntType']['output'];
	smartTags: Array<Scalars['String']['output']>;
	tags: Array<Scalars['String']['output']>;
	thumbhash?: Maybe<Scalars['String']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	url: Scalars['String']['output'];
	video?: Maybe<UploadVideoField>;
	width: Scalars['IntType']['output'];
};

export type ImageFileFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageFileFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type ImageFileFieldCustomDataArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageFileFieldFocalPointArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageFileFieldResponsiveImageArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	imgixParams?: InputMaybe<ImgixParams>;
	locale?: InputMaybe<SiteLocale>;
	sizes?: InputMaybe<Scalars['String']['input']>;
};

export type ImageFileFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type ImageFileFieldUrlArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
};

export type ImgixParams = {
	/**
	 * Aspect Ratio
	 *
	 * Specifies an aspect ratio to maintain when resizing and cropping the image
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
	 */
	ar?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Automatic
	 *
	 * Applies automatic enhancements to images.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
	 */
	auto?: InputMaybe<Array<ImgixParamsAuto | '%future added value'>>;
	/**
	 * Background Color
	 *
	 * Colors the background of padded and partially-transparent images.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
	 */
	bg?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Background Removal
	 *
	 * Removes background from image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
	 */
	bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Background Removal Fallback
	 *
	 * Overrides default fallback behavior for bg-remove failures.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
	 */
	bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Background Replacement
	 *
	 * Replaces background from image using a string based prompt.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
	 */
	bgReplace?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Background Removal Fallback
	 *
	 * Overrides default fallback behavior for bg-replace failures.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
	 */
	bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Background Replacement Negative Prompt
	 *
	 * Provides a negative text suggestion for background replacement.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace-neg-prompt)
	 */
	bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Blend
	 *
	 * Specifies the location of the blend image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
	 */
	blend?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Blend Align
	 *
	 * Changes the blend alignment relative to the parent image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
	 */
	blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign | '%future added value'>>;
	/**
	 * Blend Alpha
	 *
	 * Changes the alpha of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
	 */
	blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Blend Color
	 *
	 * Specifies a color to use when applying the blend.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
	 */
	blendColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Blend Crop
	 *
	 * Specifies the type of crop for blend images.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
	 */
	blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop | '%future added value'>>;
	/**
	 * Blend Fit
	 *
	 * Specifies the fit mode for blend images.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
	 */
	blendFit?: InputMaybe<ImgixParamsBlendFit | '%future added value'>;
	/**
	 * Blend Height
	 *
	 * Adjusts the height of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
	 */
	blendH?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Blend Mode
	 *
	 * Sets the blend mode for a blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
	 */
	blendMode?: InputMaybe<ImgixParamsBlendMode | '%future added value'>;
	/**
	 * Blend Padding
	 *
	 * Applies padding to the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
	 */
	blendPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Blend Size
	 *
	 * Adjusts the size of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
	 */
	blendSize?: InputMaybe<ImgixParamsBlendSize | '%future added value'>;
	/**
	 * Blend Width
	 *
	 * Adjusts the width of the blend image.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
	 */
	blendW?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Blend X Position
	 *
	 * Adjusts the x-offset of the blend image relative to its parent.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
	 */
	blendX?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Blend Y Position
	 *
	 * Adjusts the y-offset of the blend image relative to its parent.
	 *
	 * Depends on: `blend`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
	 */
	blendY?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Gaussian Blur
	 *
	 * Applies a gaussian blur to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
	 */
	blur?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Border Size & Color
	 *
	 * Applies a border to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
	 */
	border?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Border Bottom
	 *
	 * Sets bottom border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
	 */
	borderBottom?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Border Left
	 *
	 * Sets left border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
	 */
	borderLeft?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Outer Border Radius
	 *
	 * Sets the outer radius of the image's border in pixels.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
	 */
	borderRadius?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Inner Border Radius
	 *
	 * Sets the inner radius of the image's border in pixels.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
	 */
	borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Border Right
	 *
	 * Sets right border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
	 */
	borderRight?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Border Top
	 *
	 * Sets top border of an image.
	 *
	 * Depends on: `border`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
	 */
	borderTop?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Brightness
	 *
	 * Adjusts the brightness of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
	 */
	bri?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Client Hints
	 *
	 * Sets one or more Client-Hints headers
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
	 */
	ch?: InputMaybe<Array<ImgixParamsCh | '%future added value'>>;
	/**
	 * Chroma Subsampling
	 *
	 * Specifies the output chroma subsampling rate.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
	 */
	chromasub?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Color Quantization
	 *
	 * Limits the number of unique colors in an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
	 */
	colorquant?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Palette Color Count
	 *
	 * Specifies how many colors to include in a palette-extraction response.
	 *
	 * Depends on: `palette`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
	 */
	colors?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Contrast
	 *
	 * Adjusts the contrast of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
	 */
	con?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Mask Corner Radius
	 *
	 * Specifies the radius value for a rounded corner mask.
	 *
	 * Depends on: `mask=corners`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
	 */
	cornerRadius?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Crop Mode
	 *
	 * Specifies how to crop an image.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
	 */
	crop?: InputMaybe<Array<ImgixParamsCrop | '%future added value'>>;
	/**
	 * Color Space
	 *
	 * Specifies the color space of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
	 */
	cs?: InputMaybe<ImgixParamsCs | '%future added value'>;
	/**
	 * Download
	 *
	 * Forces a URL to use send-file in its response.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
	 */
	dl?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Dots Per Inch
	 *
	 * Sets the DPI value in the EXIF header.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
	 */
	dpi?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Device Pixel Ratio
	 *
	 * Adjusts the device-pixel ratio of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
	 */
	dpr?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Duotone
	 *
	 * Applies a duotone effect to the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
	 */
	duotone?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Duotone Alpha
	 *
	 * Changes the alpha of the duotone effect atop the source image.
	 *
	 * Depends on: `duotone`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
	 */
	duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Exposure
	 *
	 * Adjusts the exposure of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
	 */
	exp?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Url Expiration Timestamp
	 *
	 * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
	 */
	expires?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Face Index
	 *
	 * Selects a face to crop to.
	 *
	 * Depends on: `fit=facearea`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
	 */
	faceindex?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Face Padding
	 *
	 * Adjusts padding around a selected face.
	 *
	 * Depends on: `fit=facearea`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
	 */
	facepad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Json Face Data
	 *
	 * Specifies that face data should be included in output when combined with `fm=json`.
	 *
	 * Depends on: `fm=json`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
	 */
	faces?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Fill Mode
	 *
	 * Determines how to fill in additional space created by the fit setting
	 *
	 * Depends on: `fit`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
	 */
	fill?: InputMaybe<ImgixParamsFill | '%future added value'>;
	/**
	 * Fill Color
	 *
	 * Sets the fill color for images with additional space created by the fit setting
	 *
	 * Depends on: `fill=solid`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
	 */
	fillColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Generative Fallback
	 *
	 * Sets the fallback behavior for generative fill.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-fallback)
	 */
	fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Fill Generative Negative Prompt
	 *
	 * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-neg-prompt)
	 */
	fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Generative Position
	 *
	 * Sets the position of the Origin Image in relation to the generative fill.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-pos)
	 */
	fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos | '%future added value'>>;
	/**
	 * Fill Generative Prompt
	 *
	 * Provides a text suggestion to the generative fill parameter.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-prompt)
	 */
	fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Generative Seed
	 *
	 * Sets the generative seed value. Used to generate similar outputs from different prompts.
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-seed)
	 */
	fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Fill Gradient Color Space
	 *
	 * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-cs)
	 */
	fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs | '%future added value'>;
	/**
	 * Fill Gradient Linear
	 *
	 * Blends a gradient between two colors, {color1} and {color2}, along a straight path
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear)
	 */
	fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Gradient Linear Direction
	 *
	 * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
	 *
	 * Depends on: `fit=fill`, `fill=gen`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear-direction)
	 */
	fillGradientLinearDirection?: InputMaybe<
		Array<ImgixParamsFillGradientLinearDirection | '%future added value'>
	>;
	/**
	 * Fill Gradient Radial
	 *
	 * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial)
	 */
	fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Gradient Radial Radius
	 *
	 * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-radius)
	 */
	fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Fill Gradient Radial X
	 *
	 * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-x)
	 */
	fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Fill Gradient Radial Y
	 *
	 * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-y)
	 */
	fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Fill Gradient Type
	 *
	 * Specifies if a gradient is radial (circular) or linear (straight)
	 *
	 * Depends on: `fit=fill`, `fill=gradient`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-type)
	 */
	fillGradientType?: InputMaybe<ImgixParamsFillGradientType | '%future added value'>;
	/**
	 * Resize Fit Mode
	 *
	 * Specifies how to map the source image to the output image dimensions.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
	 */
	fit?: InputMaybe<ImgixParamsFit | '%future added value'>;
	/**
	 * Flip Axis
	 *
	 * Flips an image on a specified axis.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
	 */
	flip?: InputMaybe<ImgixParamsFlip | '%future added value'>;
	/**
	 * Output Format
	 *
	 * Changes the format of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
	 */
	fm?: InputMaybe<ImgixParamsFm | '%future added value'>;
	/**
	 * Focal Point Debug
	 *
	 * Displays crosshairs identifying the location of the set focal point
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
	 */
	fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Focal Point X Position
	 *
	 * Sets the relative horizontal value for the focal point of an image
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
	 */
	fpX?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Focal Point Y Position
	 *
	 * Sets the relative vertical value for the focal point of an image
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
	 */
	fpY?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Focal Point Zoom
	 *
	 * Sets the relative zoom value for the focal point of an image
	 *
	 * Depends on: `fit=crop`, `crop=focalpoint`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
	 */
	fpZ?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Frames Per Second
	 *
	 * Specifies the framerate of the generated image.
	 */
	fps?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Frame Selection
	 *
	 * Specifies the frame of an animated image to use.
	 */
	frame?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Gamma
	 *
	 * Adjusts the gamma of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
	 */
	gam?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Animated Gif Quality
	 *
	 * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
	 *
	 * Depends on: `fm=gif`
	 */
	gifQ?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Grid Colors
	 *
	 * Sets grid colors for the transparency checkerboard grid.
	 *
	 * Depends on: `transparency`
	 */
	gridColors?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Grid Size
	 *
	 * Sets grid size for the transparency checkerboard grid.
	 *
	 * Depends on: `transparency`
	 */
	gridSize?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Image Height
	 *
	 * Adjusts the height of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
	 */
	h?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Highlight
	 *
	 * Adjusts the highlights of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
	 */
	high?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Halftone
	 *
	 * Applies a half-tone effect to the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
	 */
	htn?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Hue Shift
	 *
	 * Adjusts the hue of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
	 */
	hue?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Frame Interval
	 *
	 * Displays every Nth frame starting with the first frame.
	 */
	interval?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Invert
	 *
	 * Inverts the colors on the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
	 */
	invert?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Iptc Passthrough
	 *
	 * Determine if IPTC data should be passed for JPEG images.
	 */
	iptc?: InputMaybe<ImgixParamsIptc | '%future added value'>;
	/**
	 * Jpg Progressive
	 *
	 * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
	 */
	jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Animation Loop Count
	 *
	 * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
	 */
	loop?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Lossless Compression
	 *
	 * Specifies that the output image should be a lossless variant.
	 *
	 * Depends on: `fm=webp`, `fm=jxr`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
	 */
	lossless?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Watermark Image Url
	 *
	 * Specifies the location of the watermark image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
	 */
	mark?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Watermark Alignment Mode
	 *
	 * Changes the watermark alignment relative to the parent image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
	 */
	markAlign?: InputMaybe<Array<ImgixParamsMarkAlign | '%future added value'>>;
	/**
	 * Watermark Alpha
	 *
	 * Changes the alpha of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
	 */
	markAlpha?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Base Url
	 *
	 * Changes base URL of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
	 */
	markBase?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Watermark Fit Mode
	 *
	 * Specifies the fit mode for watermark images.
	 *
	 * Depends on: `mark`, `markw`, `markh`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
	 */
	markFit?: InputMaybe<ImgixParamsMarkFit | '%future added value'>;
	/**
	 * Watermark Height
	 *
	 * Adjusts the height of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
	 */
	markH?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Watermark Padding
	 *
	 * Applies padding to the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
	 */
	markPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Rotation
	 *
	 * Rotates a watermark or tiled watermarks by a specified number of degrees.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
	 */
	markRot?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Watermark Scale
	 *
	 * Adjusts the scale of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
	 */
	markScale?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Tile
	 *
	 * Adds tiled watermark.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
	 */
	markTile?: InputMaybe<ImgixParamsMarkTile | '%future added value'>;
	/**
	 * Watermark Width
	 *
	 * Adjusts the width of the watermark image.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
	 */
	markW?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Watermark X Position
	 *
	 * Adjusts the x-offset of the watermark image relative to its parent.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
	 */
	markX?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Watermark Y Position
	 *
	 * Adjusts the y-offset of the watermark image relative to its parent.
	 *
	 * Depends on: `mark`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
	 */
	markY?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Mask Type
	 *
	 * Defines the type of mask and specifies the URL if that type is selected.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
	 */
	mask?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Mask Background Color
	 *
	 * Colors the background of the transparent mask area of images
	 *
	 * Depends on: `mask`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
	 */
	maskBg?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Maximum Height
	 *
	 * Specifies the maximum height of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
	 */
	maxH?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Maximum Width
	 *
	 * Specifies the maximum width of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
	 */
	maxW?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Minimum Height
	 *
	 * Specifies the minimum height of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
	 */
	minH?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Minimum Width
	 *
	 * Specifies the minimum width of the output image in pixels.
	 *
	 * Depends on: `fit=crop`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
	 */
	minW?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Monochrome
	 *
	 * Applies a monochrome effect to the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
	 */
	monochrome?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Noise Reduction Bound
	 *
	 * Reduces the noise in an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
	 */
	nr?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Noise Reduction Sharpen
	 *
	 * Provides a threshold by which to sharpen an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
	 */
	nrs?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Orientation
	 *
	 * Changes the image orientation.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
	 */
	orient?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding
	 *
	 * Pads an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
	 */
	pad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Bottom
	 *
	 * Sets bottom padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
	 */
	padBottom?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Left
	 *
	 * Sets left padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
	 */
	padLeft?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Right
	 *
	 * Sets right padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
	 */
	padRight?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Padding Top
	 *
	 * Sets top padding of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
	 */
	padTop?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Pdf Page Number
	 *
	 * Selects a page from a PDF for display.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
	 */
	page?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Color Palette Extraction
	 *
	 * Specifies an output format for palette-extraction.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
	 */
	palette?: InputMaybe<ImgixParamsPalette | '%future added value'>;
	/**
	 * Pdf Annotation
	 *
	 * Enables or disables PDF annotation.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
	 */
	pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Css Prefix
	 *
	 * Specifies a CSS prefix for all classes in palette-extraction.
	 *
	 * Depends on: `palette=css`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
	 */
	prefix?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Pixellate
	 *
	 * Applies a pixelation effect to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
	 */
	px?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Output Quality
	 *
	 * Adjusts the quality of an output image.
	 *
	 * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
	 */
	q?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Source Rectangle Region
	 *
	 * Crops an image to a specified rectangle.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
	 */
	rect?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Reverse
	 *
	 * Reverses the frame order on the source animation.
	 */
	reverse?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Rotation
	 *
	 * Rotates an image by a specified number of degrees.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
	 */
	rot?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Saturation
	 *
	 * Adjusts the saturation of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
	 */
	sat?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Sepia Tone
	 *
	 * Applies a sepia effect to an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
	 */
	sepia?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Shadow
	 *
	 * Adjusts the highlights of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
	 */
	shad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Sharpen
	 *
	 * Adjusts the sharpness of the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
	 */
	sharp?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Frame Skip
	 *
	 * Skips every Nth frame starting with the first frame.
	 */
	skip?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
	 *
	 * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
	 */
	skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Sanitize Svg
	 *
	 * Specifies whether to sanitize an SVG.
	 */
	svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Transparency
	 *
	 * Adds checkerboard behind images which support transparency.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
	 */
	transparency?: InputMaybe<ImgixParamsTransparency | '%future added value'>;
	/**
	 * Trim Image
	 *
	 * Trims the source image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
	 */
	trim?: InputMaybe<ImgixParamsTrim | '%future added value'>;
	/**
	 * Trim Color
	 *
	 * Specifies a trim color on a trim operation.
	 *
	 * Depends on: `trim=color`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
	 */
	trimColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Trim Mean Difference
	 *
	 * Specifies the mean difference on a trim operation.
	 *
	 * Depends on: `trim=auto`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
	 */
	trimMd?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Trim Padding
	 *
	 * Pads the area of the source image before trimming.
	 *
	 * Depends on: `trim`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
	 */
	trimPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Trim Standard Deviation
	 *
	 * Specifies the standard deviation on a trim operation.
	 *
	 * Depends on: `trim=auto`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
	 */
	trimSd?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Trim Tolerance
	 *
	 * Specifies the tolerance on a trim operation.
	 *
	 * Depends on: `trim=color`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
	 */
	trimTol?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Text String
	 *
	 * Sets the text string to render.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
	 */
	txt?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Align
	 *
	 * Sets the vertical and horizontal alignment of rendered text relative to the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
	 */
	txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign | '%future added value'>>;
	/**
	 * Text Clipping Mode
	 *
	 * Sets the clipping properties of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
	 */
	txtClip?: InputMaybe<Array<ImgixParamsTxtClip | '%future added value'>>;
	/**
	 * Text Color
	 *
	 * Specifies the color of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
	 */
	txtColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Fit Mode
	 *
	 * Specifies the fit approach for rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
	 */
	txtFit?: InputMaybe<ImgixParamsTxtFit | '%future added value'>;
	/**
	 * Text Font
	 *
	 * Selects a font for rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
	 */
	txtFont?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Leading
	 *
	 * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
	 */
	txtLead?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Outline
	 *
	 * Outlines the rendered text with a specified color.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
	 */
	txtLine?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Outline Color
	 *
	 * Specifies a text outline color.
	 *
	 * Depends on: `txt`, `txtline`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
	 */
	txtLineColor?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Text Padding
	 *
	 * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
	 */
	txtPad?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Shadow
	 *
	 * Applies a shadow to rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
	 */
	txtShad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Text Font Size
	 *
	 * Sets the font size of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
	 */
	txtSize?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Tracking
	 *
	 * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
	 */
	txtTrack?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Width
	 *
	 * Sets the width of rendered text.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
	 */
	txtWidth?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text X Position
	 *
	 * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
	 */
	txtX?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Text Y Position
	 *
	 * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
	 *
	 * Depends on: `txt`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
	 */
	txtY?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Super Resolution
	 *
	 * Uses generative AI fill to upscale low resolution images.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale)
	 */
	upscale?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Super Resolution Fallback
	 *
	 * Overrides default fallback behavior for super resolution failures
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale-fallback)
	 */
	upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
	/**
	 * Unsharp Mask
	 *
	 * Sharpens the source image using an unsharp mask.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
	 */
	usm?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Unsharp Mask Radius
	 *
	 * Specifies the radius for an unsharp mask operation.
	 *
	 * Depends on: `usm`
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
	 */
	usmrad?: InputMaybe<Scalars['FloatType']['input']>;
	/**
	 * Vibrance
	 *
	 * Adjusts the vibrance of an image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
	 */
	vib?: InputMaybe<Scalars['IntType']['input']>;
	/**
	 * Image Width
	 *
	 * Adjusts the width of the output image.
	 *
	 * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
	 */
	w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
	Compress = 'compress',
	Enhance = 'enhance',
	Format = 'format',
	Redeye = 'redeye',
}

export enum ImgixParamsBlendAlign {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsBlendCrop {
	Bottom = 'bottom',
	Faces = 'faces',
	Left = 'left',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsBlendFit {
	Clamp = 'clamp',
	Clip = 'clip',
	Crop = 'crop',
	Max = 'max',
	Scale = 'scale',
}

export enum ImgixParamsBlendMode {
	Burn = 'burn',
	Color = 'color',
	Darken = 'darken',
	Difference = 'difference',
	Dodge = 'dodge',
	Exclusion = 'exclusion',
	Hardlight = 'hardlight',
	Hue = 'hue',
	Lighten = 'lighten',
	Luminosity = 'luminosity',
	Multiply = 'multiply',
	Normal = 'normal',
	Overlay = 'overlay',
	Saturation = 'saturation',
	Screen = 'screen',
	Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
	Inherit = 'inherit',
}

export enum ImgixParamsCh {
	Dpr = 'dpr',
	SaveData = 'saveData',
	Width = 'width',
}

export enum ImgixParamsCrop {
	Bottom = 'bottom',
	Edges = 'edges',
	Entropy = 'entropy',
	Faces = 'faces',
	Focalpoint = 'focalpoint',
	Left = 'left',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsCs {
	Adobergb1998 = 'adobergb1998',
	Srgb = 'srgb',
	Strip = 'strip',
	Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
	Blur = 'blur',
	Gen = 'gen',
	Generative = 'generative',
	Gradient = 'gradient',
	Solid = 'solid',
}

export enum ImgixParamsFillGenPos {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsFillGradientCs {
	Hsl = 'hsl',
	Lch = 'lch',
	Linear = 'linear',
	Oklab = 'oklab',
	Srgb = 'srgb',
}

export enum ImgixParamsFillGradientLinearDirection {
	Bottom = 'bottom',
	Left = 'left',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsFillGradientType {
	Linear = 'linear',
	Radial = 'radial',
}

export enum ImgixParamsFit {
	Clamp = 'clamp',
	Clip = 'clip',
	Crop = 'crop',
	Facearea = 'facearea',
	Fill = 'fill',
	Fillmax = 'fillmax',
	Max = 'max',
	Min = 'min',
	Scale = 'scale',
}

export enum ImgixParamsFlip {
	H = 'h',
	Hv = 'hv',
	V = 'v',
}

export enum ImgixParamsFm {
	Avif = 'avif',
	Blurhash = 'blurhash',
	Gif = 'gif',
	Jp2 = 'jp2',
	Jpg = 'jpg',
	Json = 'json',
	Jxr = 'jxr',
	Mp4 = 'mp4',
	Pjpg = 'pjpg',
	Png = 'png',
	Png8 = 'png8',
	Png32 = 'png32',
	Webm = 'webm',
	Webp = 'webp',
}

export enum ImgixParamsIptc {
	Allow = 'allow',
	Block = 'block',
}

export enum ImgixParamsMarkAlign {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsMarkFit {
	Clip = 'clip',
	Crop = 'crop',
	Fill = 'fill',
	Max = 'max',
	Scale = 'scale',
}

export enum ImgixParamsMarkTile {
	Grid = 'grid',
}

export enum ImgixParamsPalette {
	Css = 'css',
	Json = 'json',
}

export enum ImgixParamsTransparency {
	Grid = 'grid',
}

export enum ImgixParamsTrim {
	Auto = 'auto',
	Color = 'color',
}

export enum ImgixParamsTxtAlign {
	Bottom = 'bottom',
	Center = 'center',
	Left = 'left',
	Middle = 'middle',
	Right = 'right',
	Top = 'top',
}

export enum ImgixParamsTxtClip {
	Ellipsis = 'ellipsis',
	End = 'end',
	Middle = 'middle',
	Start = 'start',
}

export enum ImgixParamsTxtFit {
	Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
	/** Search uploads that are currently used by some record or not */
	eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Integer fields */
export type IntegerFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Filter records with a value that's greater than or equal to the one specified */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Filter records with a value that's less than the one specified */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Filter records with a value that's less or equal than the one specified */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Exclude records with an exact match */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
	/** Search the record with the specified ID */
	eq?: InputMaybe<Scalars['ItemId']['input']>;
	/** Search records with the specified IDs */
	in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
	/** Exclude the record with the specified ID */
	neq?: InputMaybe<Scalars['ItemId']['input']>;
	/** Search records that do not have the specified IDs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
	Draft = 'draft',
	Published = 'published',
	Updated = 'updated',
}

export type JsonFieldMultiLocaleField = {
	__typename?: 'JsonFieldMultiLocaleField';
	locale?: Maybe<SiteLocale | '%future added value'>;
	value?: Maybe<Scalars['JsonField']['output']>;
};

/** Specifies how to filter JSON fields */
export type JsonFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
	/** Filter records linked to all of the specified records. The specified values must be Record IDs */
	allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
	/** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
	anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
	/** Search for records with an exact match. The specified values must be Record IDs */
	eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records not linked to any of the specified records. The specified values must be Record IDs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Specifies how to filter by locale */
export type LocalesFilter = {
	/** Filter records that are localized in all the specified locales */
	allIn?: InputMaybe<Array<SiteLocale | '%future added value'>>;
	/** Filter records that are localized in at least one of the specified locales */
	anyIn?: InputMaybe<Array<SiteLocale | '%future added value'>>;
	/** Filter records that are not localized in any of the specified locales */
	notIn?: InputMaybe<Array<SiteLocale | '%future added value'>>;
};

/** Block of type 📸 Media (media_item) */
export type MediaItemRecord = RecordInterface & {
	__typename?: 'MediaItemRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	asset: ImageFileField;
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Block of type 📸 Media (media_item) */
export type MediaItemRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
	Gif = 'gif',
	Jpg = 'jpg',
	Png = 'png',
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
	/** Search uploads with the specified orientation */
	eq?: InputMaybe<UploadOrientation | '%future added value'>;
	/** Exclude uploads with the specified orientation */
	neq?: InputMaybe<UploadOrientation | '%future added value'>;
};

export type ProjectModelFilter = {
	AND?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
	_createdAt?: InputMaybe<CreatedAtFilter>;
	_firstPublishedAt?: InputMaybe<PublishedAtFilter>;
	_isValid?: InputMaybe<BooleanFilter>;
	_publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
	_publishedAt?: InputMaybe<PublishedAtFilter>;
	_status?: InputMaybe<StatusFilter>;
	_unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
	_updatedAt?: InputMaybe<UpdatedAtFilter>;
	agency?: InputMaybe<StringFilter>;
	cases?: InputMaybe<LinksFilter>;
	challenge?: InputMaybe<TextFilter>;
	createdAt?: InputMaybe<CreatedAtFilter>;
	featuredImage?: InputMaybe<FileFilter>;
	id?: InputMaybe<ItemIdFilter>;
	outcome?: InputMaybe<TextFilter>;
	quote?: InputMaybe<StringFilter>;
	scope?: InputMaybe<JsonFilter>;
	seo?: InputMaybe<SeoFilter>;
	slug?: InputMaybe<SlugFilter>;
	subtitle?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<UpdatedAtFilter>;
	websiteUrl?: InputMaybe<StringFilter>;
	year?: InputMaybe<IntegerFilter>;
};

export enum ProjectModelOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_FirstPublishedAtAsc = '_firstPublishedAt_ASC',
	_FirstPublishedAtDesc = '_firstPublishedAt_DESC',
	_IsValidAsc = '_isValid_ASC',
	_IsValidDesc = '_isValid_DESC',
	_PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
	_PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
	_PublishedAtAsc = '_publishedAt_ASC',
	_PublishedAtDesc = '_publishedAt_DESC',
	_StatusAsc = '_status_ASC',
	_StatusDesc = '_status_DESC',
	_UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
	_UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	AgencyAsc = 'agency_ASC',
	AgencyDesc = 'agency_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	QuoteAsc = 'quote_ASC',
	QuoteDesc = 'quote_DESC',
	SubtitleAsc = 'subtitle_ASC',
	SubtitleDesc = 'subtitle_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	WebsiteUrlAsc = 'websiteUrl_ASC',
	WebsiteUrlDesc = 'websiteUrl_DESC',
	YearAsc = 'year_ASC',
	YearDesc = 'year_DESC',
}

/** Record of type 🏷️ Project overview (project_overview) */
export type ProjectOverviewRecord = RecordInterface & {
	__typename?: 'ProjectOverviewRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	backgroundImage?: Maybe<ImageFileField>;
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	seo?: Maybe<SeoField>;
	tagline?: Maybe<Scalars['String']['output']>;
	title: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Record of type 🏷️ Project overview (project_overview) */
export type ProjectOverviewRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 💼 Project (project) */
export type ProjectRecord = RecordInterface & {
	__typename?: 'ProjectRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	agency: Scalars['String']['output'];
	cases: Array<ProjectRecord>;
	challenge?: Maybe<Scalars['String']['output']>;
	createdAt: Scalars['DateTime']['output'];
	featuredImage?: Maybe<ImageFileField>;
	id: Scalars['ItemId']['output'];
	outcome?: Maybe<Scalars['String']['output']>;
	pageBuilder: Array<SectionRecord>;
	quote?: Maybe<Scalars['String']['output']>;
	scope?: Maybe<Scalars['JsonField']['output']>;
	seo?: Maybe<SeoField>;
	slug: Scalars['String']['output'];
	subtitle?: Maybe<Scalars['String']['output']>;
	title: Scalars['String']['output'];
	updatedAt: Scalars['DateTime']['output'];
	websiteUrl?: Maybe<Scalars['String']['output']>;
	year?: Maybe<Scalars['IntType']['output']>;
};

/** Record of type 💼 Project (project) */
export type ProjectRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Record of type 💼 Project (project) */
export type ProjectRecordChallengeArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Record of type 💼 Project (project) */
export type ProjectRecordOutcomeArgs = {
	markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
	/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
	__typename?: 'Query';
	/** Returns meta information regarding a record collection */
	_allArticlesMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allCasesMeta: CollectionMetadata;
	/** Returns meta information regarding a record collection */
	_allProjectsMeta: CollectionMetadata;
	/** Returns meta information regarding an assets collection */
	_allUploadsMeta: CollectionMetadata;
	/** Returns the single instance record */
	_site: Site;
	/** Returns the single instance record */
	about?: Maybe<AboutRecord>;
	/** Returns the single instance record */
	aboutMe?: Maybe<AboutMeRecord>;
	/** Returns a collection of records */
	allArticles: Array<ArticleRecord>;
	/** Returns a collection of records */
	allCases: Array<CaseRecord>;
	/** Returns a collection of records */
	allProjects: Array<ProjectRecord>;
	/** Returns a collection of assets */
	allUploads: Array<FileField>;
	/** Returns a specific record */
	article?: Maybe<ArticleRecord>;
	/** Returns the single instance record */
	articleOverview?: Maybe<ArticleOverviewRecord>;
	/** Returns a specific record */
	case?: Maybe<CaseRecord>;
	/** Returns the single instance record */
	home?: Maybe<HomeRecord>;
	/** Returns a specific record */
	project?: Maybe<ProjectRecord>;
	/** Returns the single instance record */
	projectOverview?: Maybe<ProjectOverviewRecord>;
	/** Returns a specific asset */
	upload?: Maybe<FileField>;
};

/** The query root for this schema */
export type Query_AllArticlesMetaArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<ArticleModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCasesMetaArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CaseModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllProjectsMetaArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<ProjectModelFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
	filter?: InputMaybe<UploadFilter>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_SiteArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryAboutArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryAboutMeArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryAllArticlesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<ArticleModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllCasesArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CaseModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CaseModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllProjectsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<ProjectModelFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryAllUploadsArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<UploadFilter>;
	first?: InputMaybe<Scalars['IntType']['input']>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
	skip?: InputMaybe<Scalars['IntType']['input']>;
};

/** The query root for this schema */
export type QueryArticleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<ArticleModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<ArticleModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryArticleOverviewArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryCaseArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<CaseModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<CaseModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryHomeArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryProjectArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<ProjectModelFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryProjectOverviewArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryUploadArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	filter?: InputMaybe<UploadFilter>;
	locale?: InputMaybe<SiteLocale>;
	orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

/** Block of type 💬 Quote (quote) */
export type QuoteRecord = RecordInterface & {
	__typename?: 'QuoteRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	blockquote: Scalars['String']['output'];
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Block of type 💬 Quote (quote) */
export type QuoteRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type RecordInterface = {
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
};

export type RecordInterface_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
	/** Search uploads with the specified resolution */
	eq?: InputMaybe<ResolutionType | '%future added value'>;
	/** Search uploads with the specified resolutions */
	in?: InputMaybe<Array<InputMaybe<ResolutionType | '%future added value'>>>;
	/** Exclude uploads with the specified resolution */
	neq?: InputMaybe<ResolutionType | '%future added value'>;
	/** Search uploads without the specified resolutions */
	notIn?: InputMaybe<Array<InputMaybe<ResolutionType | '%future added value'>>>;
};

export enum ResolutionType {
	Icon = 'icon',
	Large = 'large',
	Medium = 'medium',
	Small = 'small',
}

export type ResponsiveImage = {
	__typename?: 'ResponsiveImage';
	alt?: Maybe<Scalars['String']['output']>;
	aspectRatio: Scalars['FloatType']['output'];
	base64?: Maybe<Scalars['String']['output']>;
	bgColor?: Maybe<Scalars['String']['output']>;
	height: Scalars['IntType']['output'];
	sizes: Scalars['String']['output'];
	src: Scalars['String']['output'];
	srcSet: Scalars['String']['output'];
	title?: Maybe<Scalars['String']['output']>;
	webpSrcSet: Scalars['String']['output'];
	width: Scalars['IntType']['output'];
};

export type SectionModelContentField = GalleryRecord | MediaItemRecord | QuoteRecord | TextRecord;

/** Block of type Section (section) */
export type SectionRecord = RecordInterface & {
	__typename?: 'SectionRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	content: Array<SectionModelContentField>;
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ItemId']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Block of type Section (section) */
export type SectionRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

export type SectionRecordListListNonNullMultiLocaleField = {
	__typename?: 'SectionRecordListListNonNullMultiLocaleField';
	locale?: Maybe<SiteLocale | '%future added value'>;
	value: Array<SectionRecord>;
};

export type SeoField = {
	__typename?: 'SeoField';
	description?: Maybe<Scalars['String']['output']>;
	image?: Maybe<FileField>;
	noIndex?: Maybe<Scalars['BooleanType']['output']>;
	title?: Maybe<Scalars['String']['output']>;
	twitterCard?: Maybe<Scalars['String']['output']>;
};

export type SeoFieldMultiLocaleField = {
	__typename?: 'SeoFieldMultiLocaleField';
	locale?: Maybe<SiteLocale | '%future added value'>;
	value?: Maybe<SeoField>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type Site = {
	__typename?: 'Site';
	favicon?: Maybe<FileField>;
	faviconMetaTags: Array<Tag>;
	globalSeo?: Maybe<GlobalSeoField>;
	locales: Array<SiteLocale | '%future added value'>;
	noIndex?: Maybe<Scalars['BooleanType']['output']>;
};

export type SiteFaviconMetaTagsArgs = {
	variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};

export type SiteGlobalSeoArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
	En = 'en',
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records that have one of the specified slugs */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude records with an exact match */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records that do have one of the specified slugs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
	/** Search the record with the specified status */
	eq?: InputMaybe<ItemStatus | '%future added value'>;
	/** Search records with the specified statuses */
	in?: InputMaybe<Array<InputMaybe<ItemStatus | '%future added value'>>>;
	/** Exclude the record with the specified status */
	neq?: InputMaybe<ItemStatus | '%future added value'>;
	/** Search records without the specified statuses */
	notIn?: InputMaybe<Array<InputMaybe<ItemStatus | '%future added value'>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
	/** Search for records with an exact match */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records that equal one of the specified values */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter records with the specified field set as blank (null or empty string) */
	isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field present (neither null, nor empty string) */
	isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude records with an exact match */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Filter records that do not equal one of the specified values */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude records based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
	caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
	pattern: Scalars['String']['input'];
	regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type StringMultiLocaleField = {
	__typename?: 'StringMultiLocaleField';
	locale?: Maybe<SiteLocale | '%future added value'>;
	value?: Maybe<Scalars['String']['output']>;
};

export type StringNonNullMultiLocaleField = {
	__typename?: 'StringNonNullMultiLocaleField';
	locale?: Maybe<SiteLocale | '%future added value'>;
	value: Scalars['String']['output'];
};

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field set as blank (null or single empty paragraph) */
	isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field present (neither null, nor empty string) */
	isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude records based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export type Tag = {
	__typename?: 'Tag';
	attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
	content?: Maybe<Scalars['String']['output']>;
	tag: Scalars['String']['output'];
};

/** Specifies how to filter text fields */
export type TextFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field set as blank (null or empty string) */
	isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with the specified field present (neither null, nor empty string) */
	isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude records based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export type TextModelContentField = {
	__typename?: 'TextModelContentField';
	blocks: Array<Scalars['String']['output']>;
	links: Array<Scalars['String']['output']>;
	value: Scalars['JsonField']['output'];
};

/** Block of type 📝 Text (text) */
export type TextRecord = RecordInterface & {
	__typename?: 'TextRecord';
	_createdAt: Scalars['DateTime']['output'];
	/** Editing URL */
	_editingUrl?: Maybe<Scalars['String']['output']>;
	_firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
	_isValid: Scalars['BooleanType']['output'];
	_modelApiKey: Scalars['String']['output'];
	_publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_publishedAt?: Maybe<Scalars['DateTime']['output']>;
	/** Generates SEO and Social card meta tags to be used in your frontend */
	_seoMetaTags: Array<Tag>;
	_status: ItemStatus | '%future added value';
	_unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
	_updatedAt: Scalars['DateTime']['output'];
	align?: Maybe<Scalars['String']['output']>;
	content: TextModelContentField;
	createdAt: Scalars['DateTime']['output'];
	fullWidth?: Maybe<Scalars['BooleanType']['output']>;
	id: Scalars['ItemId']['output'];
	updatedAt: Scalars['DateTime']['output'];
};

/** Block of type 📝 Text (text) */
export type TextRecord_SeoMetaTagsArgs = {
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
	/** Search uploads with the specified type */
	eq?: InputMaybe<UploadType | '%future added value'>;
	/** Search uploads with the specified types */
	in?: InputMaybe<Array<InputMaybe<UploadType | '%future added value'>>>;
	/** Exclude uploads with the specified type */
	neq?: InputMaybe<UploadType | '%future added value'>;
	/** Search uploads without the specified types */
	notIn?: InputMaybe<Array<InputMaybe<UploadType | '%future added value'>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
	/** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
	/** Search the uploads with the specified alt */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter uploads with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Search uploads with the specified values as default alt */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude the uploads with the specified alt */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search uploads that do not have the specified values as default alt */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
	/** Filter uploads with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
	/** Filter uploads that have all of the specified colors */
	allIn?: InputMaybe<Array<InputMaybe<ColorBucketType | '%future added value'>>>;
	/** Filter uploads that have at least one of the specified colors */
	anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType | '%future added value'>>>;
	/** Filter uploads that have the specified colors */
	contains?: InputMaybe<ColorBucketType | '%future added value'>;
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Array<InputMaybe<ColorBucketType | '%future added value'>>>;
	/** Filter uploads that do not have any of the specified colors */
	notIn?: InputMaybe<Array<InputMaybe<ColorBucketType | '%future added value'>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's strictly greater than the one specified */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's greater than or equal to the one specified */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less than the one specified */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less or equal than the one specified */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Exclude uploads with an exact match */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
	AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
	OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
	_createdAt?: InputMaybe<UploadCreatedAtFilter>;
	_updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
	alt?: InputMaybe<UploadAltFilter>;
	author?: InputMaybe<UploadAuthorFilter>;
	basename?: InputMaybe<UploadBasenameFilter>;
	colors?: InputMaybe<UploadColorsFilter>;
	copyright?: InputMaybe<UploadCopyrightFilter>;
	filename?: InputMaybe<UploadFilenameFilter>;
	format?: InputMaybe<UploadFormatFilter>;
	height?: InputMaybe<UploadHeightFilter>;
	id?: InputMaybe<UploadIdFilter>;
	inUse?: InputMaybe<InUseFilter>;
	md5?: InputMaybe<UploadMd5Filter>;
	mimeType?: InputMaybe<UploadMimeTypeFilter>;
	notes?: InputMaybe<UploadNotesFilter>;
	orientation?: InputMaybe<OrientationFilter>;
	resolution?: InputMaybe<ResolutionFilter>;
	size?: InputMaybe<UploadSizeFilter>;
	smartTags?: InputMaybe<UploadTagsFilter>;
	tags?: InputMaybe<UploadTagsFilter>;
	title?: InputMaybe<UploadTitleFilter>;
	type?: InputMaybe<TypeFilter>;
	width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
	/** Search the asset with the specified format */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets with the specified formats */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude the asset with the specified format */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified formats */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
	/** Search assets with the specified height */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger than the specified height */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified height */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets smaller than the specified height */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified height */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search assets that do not have the specified height */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
	/** Search the asset with the specified ID */
	eq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Search assets with the specified IDs */
	in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
	/** Exclude the asset with the specified ID */
	neq?: InputMaybe<Scalars['UploadId']['input']>;
	/** Search assets that do not have the specified IDs */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
	/** Search the asset with the specified MD5 */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets with the specified MD5s */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude the asset with the specified MD5 */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified MD5s */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
	/** Search the asset with the specified mime type */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets with the specified mime types */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude the asset with the specified mime type */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified mime types */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
	/** Filter records with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
	_CreatedAtAsc = '_createdAt_ASC',
	_CreatedAtDesc = '_createdAt_DESC',
	_UpdatedAtAsc = '_updatedAt_ASC',
	_UpdatedAtDesc = '_updatedAt_DESC',
	BasenameAsc = 'basename_ASC',
	BasenameDesc = 'basename_DESC',
	FilenameAsc = 'filename_ASC',
	FilenameDesc = 'filename_DESC',
	FormatAsc = 'format_ASC',
	FormatDesc = 'format_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	MimeTypeAsc = 'mimeType_ASC',
	MimeTypeDesc = 'mimeType_DESC',
	ResolutionAsc = 'resolution_ASC',
	ResolutionDesc = 'resolution_DESC',
	SizeAsc = 'size_ASC',
	SizeDesc = 'size_DESC',
}

export enum UploadOrientation {
	Landscape = 'landscape',
	Portrait = 'portrait',
	Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
	/** Search assets with the specified size (in bytes) */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger than the specified size (in bytes) */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified size (in bytes) */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets smaller than the specified size (in bytes) */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified size (in bytes) */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search assets that do not have the specified size (in bytes) */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
	/** Filter uploads linked to all of the specified tags */
	allIn?: InputMaybe<Array<Scalars['String']['input']>>;
	/** Filter uploads linked to at least one of the specified tags */
	anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
	/** Filter uploads linked to the specified tag */
	contains?: InputMaybe<Scalars['String']['input']>;
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Array<Scalars['String']['input']>>;
	/** Filter uploads not linked to any of the specified tags */
	notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
	/** Search the asset with the specified title */
	eq?: InputMaybe<Scalars['String']['input']>;
	/** Filter assets with the specified field defined (i.e. with any value) or not */
	exists?: InputMaybe<Scalars['BooleanType']['input']>;
	/** Search assets with the specified as default title */
	in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Filter uploads based on a regular expression */
	matches?: InputMaybe<StringMatchesFilter>;
	/** Exclude the asset with the specified title */
	neq?: InputMaybe<Scalars['String']['input']>;
	/** Search assets that do not have the specified as default title */
	notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Exclude uploads based on a regular expression */
	notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
	Archive = 'archive',
	Audio = 'audio',
	Image = 'image',
	Pdfdocument = 'pdfdocument',
	Presentation = 'presentation',
	Richtext = 'richtext',
	Spreadsheet = 'spreadsheet',
	Video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
	/** Search for uploads with an exact match */
	eq?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's strictly greater than the one specified */
	gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's greater than or equal to the one specified */
	gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less than the one specified */
	lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** Filter uploads with a value that's less or equal than the one specified */
	lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Exclude uploads with an exact match */
	neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
	__typename?: 'UploadVideoField';
	alt?: Maybe<Scalars['String']['output']>;
	blurUpThumb?: Maybe<Scalars['String']['output']>;
	blurhash?: Maybe<Scalars['String']['output']>;
	duration?: Maybe<Scalars['Int']['output']>;
	framerate?: Maybe<Scalars['Int']['output']>;
	height: Scalars['IntType']['output'];
	mp4Url?: Maybe<Scalars['String']['output']>;
	muxAssetId: Scalars['String']['output'];
	muxPlaybackId: Scalars['String']['output'];
	streamingUrl: Scalars['String']['output'];
	thumbhash?: Maybe<Scalars['String']['output']>;
	thumbnailUrl: Scalars['String']['output'];
	title?: Maybe<Scalars['String']['output']>;
	width: Scalars['IntType']['output'];
};

export type UploadVideoFieldAltArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

export type UploadVideoFieldBlurUpThumbArgs = {
	imgixParams?: InputMaybe<ImgixParams>;
	punch?: Scalars['Float']['input'];
	quality?: Scalars['Int']['input'];
	size?: Scalars['Int']['input'];
};

export type UploadVideoFieldMp4UrlArgs = {
	exactRes?: InputMaybe<VideoMp4Res>;
	res?: InputMaybe<VideoMp4Res>;
};

export type UploadVideoFieldThumbnailUrlArgs = {
	format?: InputMaybe<MuxThumbnailFormatType>;
};

export type UploadVideoFieldTitleArgs = {
	fallbackLocales?: InputMaybe<Array<SiteLocale>>;
	locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
	/** Search assets with the specified width */
	eq?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger than the specified width */
	gt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified width */
	gte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets smaller than the specified width */
	lt?: InputMaybe<Scalars['IntType']['input']>;
	/** Search all assets larger or equal to the specified width */
	lte?: InputMaybe<Scalars['IntType']['input']>;
	/** Search assets that do not have the specified width */
	neq?: InputMaybe<Scalars['IntType']['input']>;
};

export enum VideoMp4Res {
	High = 'high',
	Low = 'low',
	Medium = 'medium',
}

export type FocalPoint = {
	__typename?: 'focalPoint';
	x: Scalars['FloatType']['output'];
	y: Scalars['FloatType']['output'];
};

export type AboutMeQueryVariables = Exact<{ [key: string]: never }>;

export type AboutMeQuery = {
	__typename?: 'Query';
	aboutMe?: {
		__typename?: 'AboutMeRecord';
		stats?: unknown | null;
		quote?: string | null;
		concepting?: unknown | null;
		design?: unknown | null;
		development?: unknown | null;
		management?: unknown | null;
		heading?: string | null;
		description?: string | null;
		_seoMetaTags: Array<{
			__typename?: 'Tag';
			attributes?: Record<string, string> | null;
			content?: string | null;
			tag: string;
		}>;
		backgroundImage?: {
			__typename?: 'ImageFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				src: string;
				srcSet: string;
				width: number;
				height: number;
				alt?: string | null;
				title?: string | null;
				base64?: string | null;
				bgColor?: string | null;
			};
		} | null;
		businessPhoto?: {
			__typename?: 'ImageFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				src: string;
				srcSet: string;
				width: number;
				height: number;
				alt?: string | null;
				sizes: string;
			};
		} | null;
		profilePhoto?: {
			__typename?: 'ImageFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				src: string;
				srcSet: string;
				width: number;
				height: number;
				alt?: string | null;
				sizes: string;
			};
		} | null;
		biography?: { __typename?: 'AboutMeModelBiographyField'; value: unknown } | null;
		photos: Array<{
			__typename?: 'ImageFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				src: string;
				srcSet: string;
				width: number;
				height: number;
				alt?: string | null;
				sizes: string;
			};
		}>;
	} | null;
};

export type AllArticlesQueryVariables = Exact<{ [key: string]: never }>;

export type AllArticlesQuery = {
	__typename?: 'Query';
	allArticles: Array<{
		__typename?: 'ArticleRecord';
		_createdAt: string;
		title: string;
		slug: string;
	}>;
};

export type AllProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type AllProjectsQuery = {
	__typename?: 'Query';
	allProjects: Array<{
		__typename?: 'ProjectRecord';
		title: string;
		subtitle?: string | null;
		slug: string;
		featuredImage?: {
			__typename?: 'ImageFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				src: string;
				srcSet: string;
				width: number;
				height: number;
				alt?: string | null;
				title?: string | null;
				base64?: string | null;
				bgColor?: string | null;
			};
		} | null;
	}>;
};

export type ArticleQueryVariables = Exact<{
	slug: Scalars['String']['input'];
}>;

export type ArticleQuery = {
	__typename?: 'Query';
	article?: {
		__typename?: 'ArticleRecord';
		title: string;
		slug: string;
		_seoMetaTags: Array<{
			__typename?: 'Tag';
			attributes?: Record<string, string> | null;
			content?: string | null;
			tag: string;
		}>;
		content: Array<
			| {
					__typename?: 'CodeRecord';
					_modelApiKey: string;
					id: string;
					language: string;
					code: string;
			  }
			| { __typename?: 'GalleryRecord' }
			| {
					__typename?: 'MediaItemRecord';
					_modelApiKey: string;
					id: string;
					asset: {
						__typename?: 'ImageFileField';
						responsiveImage: {
							__typename?: 'ResponsiveImage';
							src: string;
							srcSet: string;
							width: number;
							height: number;
							alt?: string | null;
							title?: string | null;
							base64?: string | null;
							bgColor?: string | null;
						};
					};
			  }
			| { __typename?: 'QuoteRecord'; _modelApiKey: string; id: string; blockquote: string }
			| {
					__typename?: 'TextRecord';
					_modelApiKey: string;
					id: string;
					fullWidth?: boolean | null;
					align?: string | null;
					content: { __typename?: 'TextModelContentField'; value: unknown };
			  }
		>;
		featureImage?: {
			__typename?: 'ImageFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				src: string;
				srcSet: string;
				width: number;
				height: number;
				alt?: string | null;
				title?: string | null;
				base64?: string | null;
				bgColor?: string | null;
			};
		} | null;
	} | null;
};

export type ArticleOverviewQueryVariables = Exact<{ [key: string]: never }>;

export type ArticleOverviewQuery = {
	__typename?: 'Query';
	articleOverview?: {
		__typename?: 'ArticleOverviewRecord';
		title: string;
		tagline?: string | null;
		backgroundImage?: {
			__typename?: 'ImageFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				src: string;
				srcSet: string;
				width: number;
				height: number;
				alt?: string | null;
				title?: string | null;
				base64?: string | null;
				bgColor?: string | null;
			};
		} | null;
		_seoMetaTags: Array<{
			__typename?: 'Tag';
			attributes?: Record<string, string> | null;
			tag: string;
			content?: string | null;
		}>;
	} | null;
};

export type HomeQueryVariables = Exact<{ [key: string]: never }>;

export type HomeQuery = {
	__typename?: 'Query';
	home?: {
		__typename?: 'HomeRecord';
		title: string;
		clientHeading?: string | null;
		clients?: unknown | null;
		seo: Array<{
			__typename?: 'Tag';
			attributes?: Record<string, string> | null;
			content?: string | null;
			tag: string;
		}>;
		introduction?: { __typename?: 'HomeModelIntroductionField'; value: unknown } | null;
		featuredProjects: Array<{
			__typename?: 'ProjectRecord';
			title: string;
			subtitle?: string | null;
			slug: string;
			featuredImage?: {
				__typename?: 'ImageFileField';
				responsiveImage: {
					__typename?: 'ResponsiveImage';
					src: string;
					srcSet: string;
					width: number;
					height: number;
					alt?: string | null;
					title?: string | null;
					base64?: string | null;
					bgColor?: string | null;
				};
			} | null;
		}>;
	} | null;
};

export type ProjectQueryVariables = Exact<{
	slug: Scalars['String']['input'];
}>;

export type ProjectQuery = {
	__typename?: 'Query';
	project?: {
		__typename?: 'ProjectRecord';
		title: string;
		subtitle?: string | null;
		challenge?: string | null;
		outcome?: string | null;
		quote?: string | null;
		agency: string;
		year?: number | null;
		scope?: unknown | null;
		websiteUrl?: string | null;
		seo: Array<{
			__typename?: 'Tag';
			attributes?: Record<string, string> | null;
			content?: string | null;
			tag: string;
		}>;
		featuredImage?: {
			__typename?: 'ImageFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				src: string;
				srcSet: string;
				width: number;
				height: number;
				alt?: string | null;
				title?: string | null;
				base64?: string | null;
				bgColor?: string | null;
			};
		} | null;
		pageBuilder: Array<{
			__typename?: 'SectionRecord';
			id: string;
			content: Array<
				| {
						__typename?: 'GalleryRecord';
						_modelApiKey: string;
						id: string;
						galleryType?: string | null;
						assets: Array<{
							__typename?: 'ImageFileField';
							responsiveImage: {
								__typename?: 'ResponsiveImage';
								src: string;
								srcSet: string;
								width: number;
								height: number;
								alt?: string | null;
								title?: string | null;
								base64?: string | null;
								bgColor?: string | null;
							};
						}>;
				  }
				| {
						__typename?: 'MediaItemRecord';
						_modelApiKey: string;
						id: string;
						asset: {
							__typename?: 'ImageFileField';
							responsiveImage: {
								__typename?: 'ResponsiveImage';
								src: string;
								srcSet: string;
								width: number;
								height: number;
								alt?: string | null;
								title?: string | null;
								base64?: string | null;
								bgColor?: string | null;
							};
						};
				  }
				| {
						__typename?: 'QuoteRecord';
						_modelApiKey: string;
						id: string;
						blockquote: string;
				  }
				| {
						__typename?: 'TextRecord';
						_modelApiKey: string;
						id: string;
						fullWidth?: boolean | null;
						align?: string | null;
						content: { __typename?: 'TextModelContentField'; value: unknown };
				  }
			>;
		}>;
	} | null;
};

export type ProjectOverviewQueryVariables = Exact<{ [key: string]: never }>;

export type ProjectOverviewQuery = {
	__typename?: 'Query';
	projectOverview?: {
		__typename?: 'ProjectOverviewRecord';
		title: string;
		tagline?: string | null;
		backgroundImage?: {
			__typename?: 'ImageFileField';
			responsiveImage: {
				__typename?: 'ResponsiveImage';
				src: string;
				srcSet: string;
				width: number;
				height: number;
				alt?: string | null;
				title?: string | null;
				base64?: string | null;
				bgColor?: string | null;
			};
		} | null;
		_seoMetaTags: Array<{
			__typename?: 'Tag';
			attributes?: Record<string, string> | null;
			tag: string;
			content?: string | null;
		}>;
	} | null;
};

export type SitemapQueryVariables = Exact<{ [key: string]: never }>;

export type SitemapQuery = {
	__typename?: 'Query';
	home?: { __typename?: 'HomeRecord'; _updatedAt: string } | null;
	allArticles: Array<{ __typename?: 'ArticleRecord'; slug: string; _updatedAt: string }>;
	allProjects: Array<{ __typename?: 'ProjectRecord'; slug: string; _updatedAt: string }>;
	about?: { __typename?: 'AboutRecord'; _updatedAt: string } | null;
};

export type CodeFragment = {
	__typename?: 'CodeRecord';
	_modelApiKey: string;
	id: string;
	language: string;
	code: string;
};

export type TextFragment = {
	__typename?: 'TextRecord';
	_modelApiKey: string;
	id: string;
	fullWidth?: boolean | null;
	align?: string | null;
	content: { __typename?: 'TextModelContentField'; value: unknown };
};

export type QuoteFragment = {
	__typename?: 'QuoteRecord';
	_modelApiKey: string;
	id: string;
	blockquote: string;
};

export type MediaFragment = {
	__typename?: 'MediaItemRecord';
	_modelApiKey: string;
	id: string;
	asset: {
		__typename?: 'ImageFileField';
		responsiveImage: {
			__typename?: 'ResponsiveImage';
			src: string;
			srcSet: string;
			width: number;
			height: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
			bgColor?: string | null;
		};
	};
};

export type GalleryFragment = {
	__typename?: 'GalleryRecord';
	_modelApiKey: string;
	id: string;
	galleryType?: string | null;
	assets: Array<{
		__typename?: 'ImageFileField';
		responsiveImage: {
			__typename?: 'ResponsiveImage';
			src: string;
			srcSet: string;
			width: number;
			height: number;
			alt?: string | null;
			title?: string | null;
			base64?: string | null;
			bgColor?: string | null;
		};
	}>;
};

type SrcImage_AltFileField_Fragment = {
	__typename?: 'AltFileField';
	responsiveImage?: {
		__typename?: 'ResponsiveImage';
		src: string;
		srcSet: string;
		width: number;
		height: number;
		alt?: string | null;
		title?: string | null;
		base64?: string | null;
		bgColor?: string | null;
	} | null;
};

type SrcImage_FileField_Fragment = {
	__typename?: 'FileField';
	responsiveImage?: {
		__typename?: 'ResponsiveImage';
		src: string;
		srcSet: string;
		width: number;
		height: number;
		alt?: string | null;
		title?: string | null;
		base64?: string | null;
		bgColor?: string | null;
	} | null;
};

type SrcImage_ImageFileField_Fragment = {
	__typename?: 'ImageFileField';
	responsiveImage: {
		__typename?: 'ResponsiveImage';
		src: string;
		srcSet: string;
		width: number;
		height: number;
		alt?: string | null;
		title?: string | null;
		base64?: string | null;
		bgColor?: string | null;
	};
};

export type SrcImageFragment =
	| SrcImage_AltFileField_Fragment
	| SrcImage_FileField_Fragment
	| SrcImage_ImageFileField_Fragment;

export class TypedDocumentString<TResult, TVariables>
	extends String
	implements DocumentTypeDecoration<TResult, TVariables>
{
	__apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

	constructor(
		private value: string,
		public __meta__?: Record<string, any>
	) {
		super(value);
	}

	toString(): string & DocumentTypeDecoration<TResult, TVariables> {
		return this.value;
	}
}
export const CodeFragmentDoc = new TypedDocumentString(
	`
    fragment Code on CodeRecord {
  ... on CodeRecord {
    _modelApiKey
    id
    language
    code
  }
}
    `,
	{ fragmentName: 'Code' }
) as unknown as TypedDocumentString<CodeFragment, unknown>;
export const TextFragmentDoc = new TypedDocumentString(
	`
    fragment Text on TextRecord {
  ... on TextRecord {
    _modelApiKey
    id
    content {
      value
    }
    fullWidth
    align
  }
}
    `,
	{ fragmentName: 'Text' }
) as unknown as TypedDocumentString<TextFragment, unknown>;
export const QuoteFragmentDoc = new TypedDocumentString(
	`
    fragment Quote on QuoteRecord {
  ... on QuoteRecord {
    _modelApiKey
    id
    blockquote
  }
}
    `,
	{ fragmentName: 'Quote' }
) as unknown as TypedDocumentString<QuoteFragment, unknown>;
export const SrcImageFragmentDoc = new TypedDocumentString(
	`
    fragment SRCImage on FileFieldInterface {
  responsiveImage(imgixParams: {fm: webp}) {
    src
    srcSet
    width
    height
    alt
    title
    base64
    bgColor
  }
}
    `,
	{ fragmentName: 'SRCImage' }
) as unknown as TypedDocumentString<SrcImageFragment, unknown>;
export const MediaFragmentDoc = new TypedDocumentString(
	`
    fragment Media on MediaItemRecord {
  ... on MediaItemRecord {
    _modelApiKey
    id
    asset {
      ...SRCImage
    }
  }
}
    fragment SRCImage on FileFieldInterface {
  responsiveImage(imgixParams: {fm: webp}) {
    src
    srcSet
    width
    height
    alt
    title
    base64
    bgColor
  }
}`,
	{ fragmentName: 'Media' }
) as unknown as TypedDocumentString<MediaFragment, unknown>;
export const GalleryFragmentDoc = new TypedDocumentString(
	`
    fragment Gallery on GalleryRecord {
  ... on GalleryRecord {
    _modelApiKey
    id
    galleryType
    assets {
      ...SRCImage
    }
  }
}
    fragment SRCImage on FileFieldInterface {
  responsiveImage(imgixParams: {fm: webp}) {
    src
    srcSet
    width
    height
    alt
    title
    base64
    bgColor
  }
}`,
	{ fragmentName: 'Gallery' }
) as unknown as TypedDocumentString<GalleryFragment, unknown>;
export const AboutMeDocument = new TypedDocumentString(`
    query AboutMe {
  aboutMe {
    _seoMetaTags {
      attributes
      content
      tag
    }
    backgroundImage {
      ...SRCImage
    }
    stats
    businessPhoto {
      responsiveImage(imgixParams: {fm: webp, w: "768"}) {
        src
        srcSet
        width
        height
        alt
        sizes
      }
    }
    profilePhoto {
      responsiveImage(
        imgixParams: {fm: webp, h: "600", w: "600", fit: facearea, crop: focalpoint, facepad: "5"}
      ) {
        src
        srcSet
        width
        height
        alt
        sizes
      }
    }
    biography {
      value
    }
    quote
    concepting
    design
    development
    management
    heading
    description
    photos {
      responsiveImage(imgixParams: {fm: webp, w: "768"}) {
        src
        srcSet
        width
        height
        alt
        sizes
      }
    }
  }
}
    fragment SRCImage on FileFieldInterface {
  responsiveImage(imgixParams: {fm: webp}) {
    src
    srcSet
    width
    height
    alt
    title
    base64
    bgColor
  }
}`) as unknown as TypedDocumentString<AboutMeQuery, AboutMeQueryVariables>;
export const AllArticlesDocument = new TypedDocumentString(`
    query AllArticles {
  allArticles {
    _createdAt
    title
    slug
  }
}
    `) as unknown as TypedDocumentString<AllArticlesQuery, AllArticlesQueryVariables>;
export const AllProjectsDocument = new TypedDocumentString(`
    query AllProjects {
  allProjects {
    title
    subtitle
    slug
    featuredImage {
      ...SRCImage
    }
  }
}
    fragment SRCImage on FileFieldInterface {
  responsiveImage(imgixParams: {fm: webp}) {
    src
    srcSet
    width
    height
    alt
    title
    base64
    bgColor
  }
}`) as unknown as TypedDocumentString<AllProjectsQuery, AllProjectsQueryVariables>;
export const ArticleDocument = new TypedDocumentString(`
    query Article($slug: String!) {
  article(filter: {slug: {eq: $slug}}) {
    _seoMetaTags {
      attributes
      content
      tag
    }
    title
    slug
    content {
      ...Code
      ...Text
      ...Quote
      ...Media
    }
    featureImage {
      ...SRCImage
    }
  }
}
    fragment Code on CodeRecord {
  ... on CodeRecord {
    _modelApiKey
    id
    language
    code
  }
}
fragment Text on TextRecord {
  ... on TextRecord {
    _modelApiKey
    id
    content {
      value
    }
    fullWidth
    align
  }
}
fragment Quote on QuoteRecord {
  ... on QuoteRecord {
    _modelApiKey
    id
    blockquote
  }
}
fragment Media on MediaItemRecord {
  ... on MediaItemRecord {
    _modelApiKey
    id
    asset {
      ...SRCImage
    }
  }
}
fragment SRCImage on FileFieldInterface {
  responsiveImage(imgixParams: {fm: webp}) {
    src
    srcSet
    width
    height
    alt
    title
    base64
    bgColor
  }
}`) as unknown as TypedDocumentString<ArticleQuery, ArticleQueryVariables>;
export const ArticleOverviewDocument = new TypedDocumentString(`
    query ArticleOverview {
  articleOverview {
    title
    tagline
    backgroundImage {
      ...SRCImage
    }
    _seoMetaTags {
      attributes
      tag
      content
    }
  }
}
    fragment SRCImage on FileFieldInterface {
  responsiveImage(imgixParams: {fm: webp}) {
    src
    srcSet
    width
    height
    alt
    title
    base64
    bgColor
  }
}`) as unknown as TypedDocumentString<ArticleOverviewQuery, ArticleOverviewQueryVariables>;
export const HomeDocument = new TypedDocumentString(`
    query Home {
  home {
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
    title
    introduction {
      value
    }
    featuredProjects {
      title
      subtitle
      slug
      featuredImage {
        ...SRCImage
      }
    }
    clientHeading
    clients
  }
}
    fragment SRCImage on FileFieldInterface {
  responsiveImage(imgixParams: {fm: webp}) {
    src
    srcSet
    width
    height
    alt
    title
    base64
    bgColor
  }
}`) as unknown as TypedDocumentString<HomeQuery, HomeQueryVariables>;
export const ProjectDocument = new TypedDocumentString(`
    query Project($slug: String!) {
  project(filter: {slug: {eq: $slug}}) {
    seo: _seoMetaTags {
      attributes
      content
      tag
    }
    title
    subtitle
    challenge
    outcome
    quote
    agency
    year
    scope
    websiteUrl
    featuredImage {
      ...SRCImage
    }
    pageBuilder {
      id
      content {
        ...Text
        ...Quote
        ...Media
        ...Gallery
      }
    }
  }
}
    fragment Text on TextRecord {
  ... on TextRecord {
    _modelApiKey
    id
    content {
      value
    }
    fullWidth
    align
  }
}
fragment Quote on QuoteRecord {
  ... on QuoteRecord {
    _modelApiKey
    id
    blockquote
  }
}
fragment Media on MediaItemRecord {
  ... on MediaItemRecord {
    _modelApiKey
    id
    asset {
      ...SRCImage
    }
  }
}
fragment Gallery on GalleryRecord {
  ... on GalleryRecord {
    _modelApiKey
    id
    galleryType
    assets {
      ...SRCImage
    }
  }
}
fragment SRCImage on FileFieldInterface {
  responsiveImage(imgixParams: {fm: webp}) {
    src
    srcSet
    width
    height
    alt
    title
    base64
    bgColor
  }
}`) as unknown as TypedDocumentString<ProjectQuery, ProjectQueryVariables>;
export const ProjectOverviewDocument = new TypedDocumentString(`
    query ProjectOverview {
  projectOverview {
    title
    tagline
    backgroundImage {
      ...SRCImage
    }
    _seoMetaTags {
      attributes
      tag
      content
    }
  }
}
    fragment SRCImage on FileFieldInterface {
  responsiveImage(imgixParams: {fm: webp}) {
    src
    srcSet
    width
    height
    alt
    title
    base64
    bgColor
  }
}`) as unknown as TypedDocumentString<ProjectOverviewQuery, ProjectOverviewQueryVariables>;
export const SitemapDocument = new TypedDocumentString(`
    query Sitemap {
  home {
    _updatedAt
  }
  allArticles {
    slug
    _updatedAt
  }
  allProjects {
    slug
    _updatedAt
  }
  about {
    _updatedAt
  }
}
    `) as unknown as TypedDocumentString<SitemapQuery, SitemapQueryVariables>;
