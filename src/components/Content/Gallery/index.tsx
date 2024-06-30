/**
 * Modular content: Image gallery
 * ---
 * Used by page builders as a content block
 */

// TODO: Implement swiper for carousel type galleries
// TODO: Implement mosaic type gallery

// Imports
import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';

import type { Maybe } from '@/types/graphql';

import styles from './index.module.css';

// Types
type C = FC<
	PropsWithChildren & {
		type?: string | Maybe<string>;
	}
>;

// Main component
const Gallery: C = ({ children, type }) => {
	return <div className={classNames(type && styles[type])}>{children}</div>;
};

// Exports
export default Gallery;
