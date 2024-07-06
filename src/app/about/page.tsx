// Imports
import classNames from 'classnames';
import type { FC } from 'react';
import { type SeoOrFaviconTag, toNextMetadata } from 'react-datocms';

import { H, Section } from '@/components/Abstracts/headings';
import { performRequest } from '@/lib/datocms';
import { type AboutMeRecord, type TextModelContentField, AboutMeDocument } from '@/types/graphql';
import image from 'Assets/gauze-05.jpeg';
import Gallery from 'Content/Gallery';
import Picture from 'Content/Picture';
import Quote from 'Content/Quote';
import TextHelper from 'Helpers/Text';
import Biography from 'UI/Biography';
import BusinessCard from 'UI/BusinessCard';
import Expertise from 'UI/Expertise';
import Hero from 'UI/Hero';

import styles from './page.module.css';

// GraphQL fetcher
const fetchData = async () => {
	const {
		aboutMe,
	}: {
		aboutMe: AboutMeRecord;
	} = await performRequest({ query: AboutMeDocument });

	return aboutMe;
};

// Meta data
export const generateMetadata = async () => {
	const aboutMe = await fetchData();
	return toNextMetadata([...(aboutMe._seoMetaTags as Array<SeoOrFaviconTag>)]);
};

// Page components
const About: FC = async () => {
	const aboutMe = await fetchData();

	return (
		<main className="spaceInPage">
			<Hero>
				<Hero.Title className="text-center">Profile</Hero.Title>
			</Hero>

			<Section>
				<BusinessCard data={aboutMe} />

				<div className={classNames('section', 'unsetInSectionSpacing', styles.stats)}>
					{/* Stats */}
					{Object.entries(
						aboutMe.stats as {
							[s: string]: string;
						}
					).map(([text, number]) => (
						<div key={text} className={styles.stat} data-aos="fade-in">
							<p className={styles.number}>{number}</p>
							<p className={styles.text}>{text}</p>
						</div>
					))}
				</div>

				<Biography>
					{aboutMe.profilePhoto?.responsiveImage && (
						<Biography.Picture data={aboutMe.profilePhoto.responsiveImage} />
					)}

					<Biography.Text>
						<TextHelper data={aboutMe.biography?.value as TextModelContentField} />
					</Biography.Text>
				</Biography>

				<Quote image={image}>{aboutMe.quote}</Quote>

				<Expertise
					data={[
						aboutMe.concepting as Array<string>,
						aboutMe.design as Array<string>,
						aboutMe.development as Array<string>,
						aboutMe.management as Array<string>,
					]}
				/>

				<Gallery type="mosaic">
					<H>{aboutMe.heading}</H>
					<p>{aboutMe.description}</p>

					{aboutMe.photos.map(photo => (
						<Picture key={photo.id} spacing={false} data={photo.responsiveImage} />
					))}
				</Gallery>
			</Section>
		</main>
	);
};

// Exports
export default About;
