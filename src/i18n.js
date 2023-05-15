import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./app/[locale]/dictionaries/${locale}.json `)).default,
}));

export const i18n = {
	// A list of all locales that are supported
	locales: ['en', 'nl'],

	// If this locale is matched, pathnames work without a prefix (e.g. `/about`)
	defaultLocale: 'en',
};
