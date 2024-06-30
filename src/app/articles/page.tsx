// Imports
import type { FC } from 'react';

import { performRequest } from '@/lib/datocms';
import type { ArticleRecord } from '@/types/graphql';
import { AllArticlesDocument } from '@/types/graphql';
import ArticleList from 'UI/Articles';
import Hero from 'UI/Hero';

// Types
type GroupedArticles = {
	[year: number]: Array<ArticleRecord>;
};

// Page component
const Articles: FC = async () => {
	const {
		allArticles,
	}: {
		allArticles: Array<ArticleRecord>;
	} = await performRequest({ query: AllArticlesDocument });

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
			<Hero>
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
						<ArticleList key={year} year={year}>
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
