// Imports
import classNames from 'classnames';
import Image from 'next/image';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import type { ResponsiveImageType } from 'react-datocms';

import { H } from '@/components/Abstracts/headings';
import fallbackImage from 'Assets/gauze-01.jpeg';
import ImageHelper from 'Helpers/Image';

import styles from './index.module.css';

// Types
type TC = FC<PropsWithChildren & HTMLAttributes<HTMLHeadingElement>>;
type DC = FC<PropsWithChildren & HTMLAttributes<HTMLDivElement>>;
type MC = FC<
	PropsWithChildren &
		HTMLAttributes<HTMLDivElement> & {
			img?: ResponsiveImageType;
		}
> & {
	Title: TC;
	Description: DC;
};

// Sub components
const HeroTitle: TC = ({ children, className, ...props }) => {
	return (
		<H data-aos="title" className={classNames(styles.title, className)} {...props}>
			{children}
		</H>
	);
};

const HeroDescription: DC = ({ children, className, ...props }) => {
	return (
		<div data-aos="fade-in" className={classNames(styles.description, className)} {...props}>
			{children}
		</div>
	);
};

// Main component
const Hero: MC = ({ children, className, img, ...props }) => {
	return (
		<>
			<div className={classNames('section', styles.section, className)} {...props}>
				{children}
			</div>
			{img ? (
				<ImageHelper data={img} className={classNames(styles.background, '!opacity-50')} />
			) : (
				<Image
					priority={true}
					width={1920}
					src={fallbackImage}
					alt=""
					className={styles.background}
				/>
			)}
		</>
	);
};

// Assign subcomponents
Hero.Title = HeroTitle;
Hero.Description = HeroDescription;

// Exports
export default Hero;
