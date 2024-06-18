import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { H } from '@/components/Abstracts/headings';

import styles from './index.module.css';

// Types
type TitleType = FC<PropsWithChildren & HTMLAttributes<HTMLHeadingElement>>;
type DescriptionType = FC<PropsWithChildren & HTMLAttributes<HTMLDivElement>>;
type HeroType = FC<PropsWithChildren> & {
	Title: TitleType;
	Description: DescriptionType;
};

// Sub components
const HeroTitle: TitleType = ({ children }) => {
	return <H>{children}</H>;
};

const HeroDescription: DescriptionType = ({ children }) => {
	return <p>{children}</p>;
};

// Main component
const Hero: HeroType = ({ children }) => {
	return <header className={styles.section}>{children}</header>;
};

// Add subcomponents to main component
Hero.Title = HeroTitle;
Hero.Description = HeroDescription;

// Export
export default Hero;
