/**
 * Modular content: Quote
 * ---
 * Used by page builders as a content block
 */

// Imports
import classNames from 'classnames';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './index.module.css';

// Types
type C = FC<
	PropsWithChildren &
		HTMLAttributes<HTMLQuoteElement> & {
			image?: string | StaticImageData;
			alt?: string;
		}
>;

// Main component
const Quote: C = ({ children, image, alt, ...props }) => {
	// Escape empty quotes
	if (!children) throw new Error('Quotes component called without content');

	// Quote element
	const content = (
		<blockquote data-aos="title" className={classNames('section', styles.quote)} {...props}>
			{children}
		</blockquote>
	);

	// Return wrapped or unwrapped quote
	return image ? (
		<figure className={styles.figure}>
			<Image
				className={styles.image}
				src={image}
				alt={alt || ''}
				width={1920}
				height={1080}
				data-aos="fade-in"
			/>
			{content}
		</figure>
	) : (
		content
	);
};

// Exports
export default Quote;
