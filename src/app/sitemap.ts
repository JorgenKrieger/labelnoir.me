// Imports
import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/lib/constants';
import { performRequest } from '@/lib/datocms';
import type { ArticleRecord, ProjectRecord, HomeRecord, AboutRecord } from '@/types/graphql';
import { SitemapDocument } from '@/types/graphql';

// Types
type S = Array<{
	url: string;
	lastModified?: string | Date | undefined;
	changeFrequency?:
		| 'yearly'
		| 'always'
		| 'hourly'
		| 'daily'
		| 'weekly'
		| 'monthly'
		| 'never'
		| undefined;
}>;

// Generate sitemap
const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const {
		home,
		allArticles,
		allProjects,
		about,
	}: {
		home: HomeRecord;
		allArticles: Array<ArticleRecord>;
		allProjects: Array<ProjectRecord>;
		about: AboutRecord;
	} = await performRequest({ query: SitemapDocument });

	const sitemapArray: S = [];

	// Home
	sitemapArray.push({
		url: BASE_URL,
		lastModified: home._updatedAt,
		changeFrequency: 'yearly',
	});

	// About
	sitemapArray.push({
		url: `${BASE_URL}/about`,
		lastModified: about._updatedAt,
		changeFrequency: 'yearly',
	});

	// Work
	sitemapArray.push({
		url: `${BASE_URL}/work`,
		lastModified: allProjects.reduce((latest, item) => {
			return new Date(item._updatedAt) > new Date(latest._updatedAt) ? item : latest;
		})._updatedAt,
		changeFrequency: 'monthly',
	});

	allProjects.map(project => {
		sitemapArray.push({
			url: `${BASE_URL}/work/${project.slug} `,
			lastModified: project._updatedAt,
			changeFrequency: 'never',
		});
	});

	// Articles
	sitemapArray.push({
		url: `${BASE_URL}/articles`,
		lastModified: allArticles.reduce((latest, item) => {
			return new Date(item._updatedAt) > new Date(latest._updatedAt) ? item : latest;
		})._updatedAt,
		changeFrequency: 'monthly',
	});

	allArticles.map(article => {
		sitemapArray.push({
			url: `${BASE_URL}/articles/${article.slug}`,
			lastModified: article._updatedAt,
			changeFrequency: 'yearly',
		});
	});

	return sitemapArray;
};

// Exports
export default sitemap;
