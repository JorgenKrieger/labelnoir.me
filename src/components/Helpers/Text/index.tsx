/**
 * Text Helper Component
 * ---
 * Heavily depending on the Structured Text component from React-DatoCMS.
 *
 * More information on:
 * - https://github.com/datocms/react-datocms/blob/master/docs/structured-text.md
 * - https://github.com/datocms/structured-text
 */

// Imports
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { render as toPlainText, renderMarkRule } from 'datocms-structured-text-to-plain-text';
import {
	isBlockquote,
	isCode,
	isHeading,
	isList,
	isParagraph,
	isRoot,
} from 'datocms-structured-text-utils';
import Link from 'next/link';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { createElement } from 'react';
import { renderNodeRule, StructuredText, type StructuredTextDocument } from 'react-datocms';

import type { TextModelContentField } from '@/types/graphql';
import Quote from 'Content/Quote';
import Code from 'Helpers/Code';

import styles from './index.module.css';

// Types
type C = FC<{
	data: TextModelContentField | unknown;
}>;

// Helper components
const HeadingTag: FC<
	PropsWithChildren &
		HTMLAttributes<HTMLHeadingElement> & {
			as: string;
		}
> = ({ as, children, ...props }) => {
	return createElement(as, props, children);
};

// Main component
const Text: C = ({ data }) => {
	return (
		<StructuredText
			data={data as unknown as StructuredTextDocument}
			customNodeRules={[
				renderNodeRule(isHeading, ({ node, children, key }) => {
					const h = `h${node.level}`;
					const anchor = (toPlainText(node) as string)
						.toLowerCase()
						.replace(/ /g, '-')
						.replace(/[^\w-]+/g, '');
					return (
						<HeadingTag as={h} key={key} className={styles.title} data-aos="title">
							<Link href={`#${anchor}`} className={styles.anchor}>
								<FontAwesomeIcon
									icon={faLink}
									className="inline-block size-[1em]"
								/>
							</Link>
							<a id={anchor}>{children}</a>
						</HeadingTag>
					);
				}),
				renderNodeRule(isCode, ({ node, key }) => (
					<Code key={key} language={node.language}>
						{node.code}
					</Code>
				)),
				renderNodeRule(
					isParagraph,
					({ adapter: { renderNode }, children, key, ancestors }) => {
						const options = isRoot(ancestors[0])
							? {
									'data-aos': 'fade-in',
									className: 'font-light text-p leading-normal',
								}
							: {};

						return renderNode('p', { key, ...options }, children);
					}
				),
				renderNodeRule(isList, ({ node, children, key }) => {
					const List = node.style == 'numbered' ? 'ol' : 'ul';
					return (
						<List
							key={key}
							className={classNames('text-p', 'pl-[1em]', 'space-y-[.5em]', {
								'list-decimal': node.style == 'numbered',
								'list-disc': node.style == 'bulleted',
							})}
						>
							{children}
						</List>
					);
				}),
				renderNodeRule(isBlockquote, ({ node, children, key }) => {
					return (
						<Quote key={key}>
							{children} {node.attribution && <cite>{node.attribution}</cite>}
						</Quote>
					);
				}),
			]}
			customMarkRules={[
				renderMarkRule('highlight', ({ children, key }) => {
					return (
						<span className="inline-block font-medium text-orange" key={key}>
							{children}
						</span>
					);
				}),
			]}
		/>
	);
};

// Exports
export default Text;
