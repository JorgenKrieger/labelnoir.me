// Imports
import type { FC } from 'react';
import { type SeoOrFaviconTag, toNextMetadata } from 'react-datocms';

import { performRequest } from '@/lib/datocms';
import type { ArticleOverviewRecord, ArticleRecord } from '@/types/graphql';
import { ArticleOverviewDocument, AllArticlesDocument } from '@/types/graphql';
import ArticleList from 'UI/Articles';
import Hero from 'UI/Hero';

// Types
type GroupedArticles = {
	[year: number]: Array<ArticleRecord>;
};

// GraphQL fetcher
const fetchData = async () => {
	const {
		allArticles,
	}: {
		allArticles: Array<ArticleRecord>;
	} = await performRequest({ query: AllArticlesDocument });

	const {
		articleOverview,
	}: {
		articleOverview: ArticleOverviewRecord;
	} = await performRequest({ query: ArticleOverviewDocument });

	return { articleOverview, allArticles };
};

// Meta data
export const generateMetadata = async () => {
	const { articleOverview } = await fetchData();
	return toNextMetadata([...(articleOverview._seoMetaTags as Array<SeoOrFaviconTag>)]);
};

// Page component
const Articles: FC = async () => {
	const { articleOverview, allArticles } = await fetchData();

	const groupedArticlesByYear = allArticles.reduce<GroupedArticles>((acc, article) => {
		const year = new Date(article._createdAt).getFullYear();

		if (!acc[year]) {
			acc[year] = [];
		}

		acc[year].push(article);
		return acc;
	}, {});

	return (
		<main className="spaceInPage">
			<Hero img={articleOverview.backgroundImage?.responsiveImage}>
				<Hero.Title>Articles</Hero.Title>
				<Hero.Description>
					<p className="text-right">
						Brain dumps, information I’d like to share and everything in between.
					</p>
				</Hero.Description>
			</Hero>

			<div className="spaceInSections">
				{Object.entries(groupedArticlesByYear)
					.sort(([a, b]) => Number(b) - Number(a))
					.reverse()
					.map(([year, articles]) => (
						<ArticleList key={year} label={year}>
							{articles.map(article => (
								<ArticleList.Tile key={article.title} article={article} />
							))}
						</ArticleList>
					))}
			</div>
		</main>
	);
};

// Exports
export default Articles;
