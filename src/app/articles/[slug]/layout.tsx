// Imports
import type { FC, PropsWithChildren } from 'react';

import { performRequest } from '@/lib/datocms';
import type { ArticleRecord } from '@/types/graphql';
import { AllArticlesDocument } from '@/types/graphql';
import ArticleList from 'UI/Articles';

type C = FC<
	PropsWithChildren & {
		params: {
			slug: string;
		};
	}
>;

// Layout component
const ArticleLayout: C = async ({ children, params: { slug } }) => {
	const {
		allArticles,
	}: {
		allArticles: Array<ArticleRecord>;
	} = await performRequest({ query: AllArticlesDocument });

	return (
		<>
			{children}
			<ArticleList label="Related" className="setInPageSpacing">
				{allArticles
					.filter(obj => obj.slug != slug)
					.map(article => (
						<ArticleList.Tile key={article.slug} article={article} />
					))}
			</ArticleList>
		</>
	);
};

// Exports
export default ArticleLayout;
