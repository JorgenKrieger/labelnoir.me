// Imports
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import type { ArticleRecord } from '@/types/graphql';

import styles from './index.module.css';

// Types
type TC = FC<{
	article: ArticleRecord;
}>;

type MC = FC<
	PropsWithChildren &
		HTMLAttributes<HTMLDivElement> & {
			label: string;
		}
> & {
	Tile: TC;
};

// Sub components
const ArticleTile: TC = ({ article }) => {
	return (
		<article className={styles.tile} data-aos="fade-in">
			<Link className={styles.link} href={`/articles/${article.slug}`}>
				<span>{article.title}</span>
				<FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
			</Link>
		</article>
	);
};

// Main component
const ArticleList: MC = ({ label, children, className, ...props }) => {
	return (
		<div className={classNames('section', styles.section, className)} {...props}>
			<div className={styles.innerSection}>
				<p data-aos="title" className={styles.label}>
					{label}
				</p>
				<div className={styles.articles}>{children}</div>
			</div>
		</div>
	);
};

// Assign dot components
ArticleList.Tile = ArticleTile;

// Exports
export default ArticleList;
