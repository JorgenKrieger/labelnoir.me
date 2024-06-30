// Imports
import classNames from 'classnames';
import type { FC } from 'react';

import { performRequest } from '@/lib/datocms';
import type { AboutMeRecord, TextModelContentField } from '@/types/graphql';
import { AboutMeDocument } from '@/types/graphql';
import image from 'Assets/gauze-05.jpeg';
import Quote from 'Content/Quote';
import TextHelper from 'Helpers/Text';
import Biography from 'UI/Biography';
import Expertise from 'UI/Expertise';
import Hero from 'UI/Hero';

import styles from './page.module.css';

// Page components
const About: FC = async () => {
	const {
		aboutMe,
	}: {
		aboutMe: AboutMeRecord;
	} = await performRequest({ query: AboutMeDocument });

	return (
		<main className="spaceInPage">
			<Hero>
				<Hero.Title className="text-center">Profile</Hero.Title>
			</Hero>

			<div className={classNames('section unsetInPageSpacing', styles.stats)}>
				{/* Stats */}
				{Object.entries(aboutMe.stats as { [s: string]: string }).map(([text, number]) => (
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
				column1={aboutMe.concepting as Array<string>}
				column2={aboutMe.design as Array<string>}
				column3={aboutMe.development as Array<string>}
				column4={aboutMe.management as Array<string>}
			/>
		</main>
	);
};

// Exports
export default About;
