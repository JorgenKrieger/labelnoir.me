// Imports
import classNames from 'classnames';
import { notFound } from 'next/navigation';
import type { FC } from 'react';

import { Section } from '@/components/Abstracts/headings';
import { performRequest } from '@/lib/datocms';
import type { ArticleRecord } from '@/types/graphql';
import { AllArticlesDocument, ArticleDocument } from '@/types/graphql';
import DynamicContent from 'UI/DynamicContent';
import Hero from 'UI/Hero';
import TableOfContent from 'UI/TableOfContent';

import styles from './page.module.css';

// Types
type TArticle = FC<{
	params: {
		slug: string;
	};
}>;

// Disable dynamic pages
export const dynamicParams = false;

// Generate static pages
export const generateStaticParams = async () => {
	const {
		allArticles,
	}: {
		allArticles: Array<ArticleRecord>;
	} = await performRequest({ query: AllArticlesDocument });

	return allArticles.map((article: ArticleRecord) => ({
		slug: article.slug,
	}));
};

// Page component
const Article: TArticle = async ({ params: { slug } }) => {
	const { article }: { article: ArticleRecord } = await performRequest({
		query: ArticleDocument,
		variables: { slug: slug },
	});

	if (!article) {
		notFound();
	}

	return (
		<main className="spaceInPage">
			<Hero>
				<Hero.Title>{article.title}</Hero.Title>
			</Hero>

			<Section as="div" className={classNames('section', styles.article)}>
				<div>
					<aside className={styles.toc}>
						<p className={styles.tocHeading}>Table of Content</p>

						<TableOfContent content={article.content} />
					</aside>
				</div>

				<div className={classNames('spaceInSections', styles.content)}>
					{article.content.map(section => (
						<DynamicContent key={section.id} data={section} />
					))}
				</div>
			</Section>
		</main>
	);
};

// Exports
export default Article;
