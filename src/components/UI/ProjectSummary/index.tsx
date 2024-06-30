import classNames from 'classnames';
import type { FC, ReactNode } from 'react';

import { H } from '@/components/Abstracts/headings';

import styles from './index.module.css';

type TProjectSummary = FC<{
	challenge: ReactNode;
	outcome: ReactNode;
}>;

const ProjectSummary: TProjectSummary = ({ challenge, outcome }) => {
	return (
		<div className={classNames('section', styles.summary)}>
			<div className={styles.challenge}>
				<H className="h3" data-aos="title">
					Challenge
				</H>
				{typeof challenge == 'string' ? <p data-aos="fade-in">{challenge}</p> : challenge}
			</div>

			<div className={styles.outcome}>
				<H className="h3" data-aos="title" data-aos-delay="50">
					Outcome
				</H>
				{typeof outcome == 'string' ? (
					<p data-aos="fade-in" data-aos-delay="50">
						{outcome}
					</p>
				) : (
					outcome
				)}
			</div>
		</div>
	);
};

export default ProjectSummary;
