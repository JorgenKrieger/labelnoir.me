// Imports
import { render as toPlainText } from 'datocms-structured-text-to-plain-text';
import type { Heading } from 'datocms-structured-text-utils';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { selectAll } from 'unist-util-select';

import type { ArticleModelContentField, TextRecord } from '@/types/graphql';

import style from './index.module.css';

// Types
type T = FC<{
	content: Array<ArticleModelContentField>;
}>;

// Main component
const TableOfContent: T = ({ content }) => {
	const links: Array<ReactNode> = content
		.filter((obj): obj is TextRecord => obj._modelApiKey === 'text')
		.map(section =>
			// @ts-expect-error -- value is unknown, can't be arsed to fix
			selectAll('heading', section.content.value.document).map((heading: Heading, i) => (
				<li key={heading.type + i}>
					<Link
						href={`#${(toPlainText(heading) as string)
							.toLowerCase()
							.replace(/ /g, '-')
							.replace(/[^\w-]+/g, '')}`}
						className={style.link}
					>
						{/*@ts-expect-error -- error above gives us no context to children */}
						{heading.children.map(item => item.value).join(' ')}
					</Link>
				</li>
			))
		);

	return (
		<nav>
			<ul>{links}</ul>
		</nav>
	);
};

// Exports
export default TableOfContent;
