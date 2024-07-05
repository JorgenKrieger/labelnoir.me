'use client';

// Imports
import { Tilt } from '@jdion/tilt-react';
import type { FC } from 'react';

import type { AboutMeRecord } from '@/types/graphql';
import ImageHelper from 'Helpers/Image';
import Socials from 'UI/Socials';

import styles from './index.module.css';

// Options
const defaultOptions = {
	reverse: false,
	max: 30,
	perspective: 2000,
	scale: 1,
	speed: 1000,
	transition: true,
	axis: null,
	reset: true,
	easing: 'cubic-bezier(.03,.98,.52,.99)',
};

// Types
type C = FC<{
	data: AboutMeRecord;
}>;

// Main component
const BusinessCard: C = ({ data }) => {
	return (
		<div className="unsetInPageSpacing">
			<div className="section" data-aos="photo" data-aos-delay={200}>
				<Tilt className={styles.card} options={defaultOptions}>
					{data.businessPhoto && (
						<ImageHelper
							data={data.businessPhoto.responsiveImage}
							className={styles.photo}
						/>
					)}

					<div className={styles.content}>
						<p className={styles.name}>
							<strong>J&ouml;rgen</strong> Krieger
						</p>
						<p className={styles.function}>Dutch digital designer</p>

						<Socials className={styles.socials} />
					</div>
				</Tilt>
			</div>
		</div>
	);
};

// Exports
export default BusinessCard;
