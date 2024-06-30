// Imports
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';

import type { Maybe } from '@/types/graphql';

import styles from './index.module.css';

// Types
type TProjectMetaData = FC<{
	agency?: string;
	year?: number | Maybe<number>;
	scope?: Array<string> | unknown;
	websiteUrl?: string | Maybe<string>;
}>;

type AgencyWebsites = {
	[key: string]: {
		name: string;
		url: string;
	};
};

// Data
const agencyWebsites: AgencyWebsites = {
	rox: {
		name: 'Rox',
		url: 'https://rox.nl',
	},
	keplar: {
		name: 'Keplar Agency',
		url: 'https://keplaragency.com',
	},
	elastik: {
		name: 'elastik. concepts',
		url: 'https://elastik.nl',
	},
};

// Component
const ProjectMetaData: TProjectMetaData = props => {
	const { agency, year, scope, websiteUrl } = props;

	const getIndex = (value: string) => {
		return Object.keys(props).findIndex(key => key == value);
	};

	return (
		<div className="section">
			<div className={styles.statsBar}>
				{agency && (
					<div data-aos="fade-in" data-aos-delay={getIndex('agency') * 50}>
						<p className={styles.label}>Agency</p>
						<p>
							<a
								href={agencyWebsites[agency].url}
								target="_blank"
								className={styles.link}
							>
								{agencyWebsites[agency].name}
							</a>
						</p>
					</div>
				)}

				{year && (
					<div data-aos="fade-in" data-aos-delay={getIndex('year') * 50}>
						<p className={styles.label}>Year</p>
						<p className={styles.value}>{year}</p>
					</div>
				)}

				{(scope as Array<string>) && (
					<div data-aos="fade-in" data-aos-delay={getIndex('scope') * 50}>
						<p className={styles.label}>Scope</p>
						<ul className={styles.list}>
							{(scope as Array<string>).length > 1 ? (
								(scope as Array<string>).map(role => <li key={role}>{role}</li>)
							) : (
								<p className={styles.value}>{(scope as Array<string>)[0]}</p>
							)}
						</ul>
					</div>
				)}

				{websiteUrl && (
					<div data-aos="fade-in" data-aos-delay={getIndex('websiteUrl') * 50}>
						<p className={styles.label}>Website</p>
						<p>
							<a href={websiteUrl} target="_blank" className={styles.link}>
								View project{' '}
								<FontAwesomeIcon
									className="ml-1 inline-block size-[1em]"
									icon={faArrowRight}
								/>
							</a>
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectMetaData;
