// Imports
import { faArrowRight, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

import type { ArticleRecord } from '@/types/graphql';

import styles from './index.module.css';

// Types
type TC = FC<{
	article: ArticleRecord;
}>;

type MC = FC<
	PropsWithChildren & {
		year: string;
	}
> & {
	Tile: TC;
};

// Sub components
const ArticleTile: TC = ({ article }) => {
	return (
		<article className={styles.tile} data-aos="fade-in">
			<Link className={styles.title} href={`articles/${article.slug}`}>
				{article.title}
			</Link>
			<p className={styles.tag}>
				<FontAwesomeIcon icon={faTag} className={styles.tagIcon} />
				{article.tag}
			</p>
			<Link href={`articles/${article.slug}`} className={styles.arrowLink}>
				<FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
			</Link>
		</article>
	);
};

// Main component
const ArticleList: MC = ({ year, children, ...props }) => {
	return (
		<div className={classNames('section', styles.section)} {...props}>
			<div className={styles.innerSection}>
				<p data-aos="title" className={styles.year}>
					{year}
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
