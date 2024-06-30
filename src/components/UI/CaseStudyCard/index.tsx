// Imports
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import type { ProjectRecord } from '@/types/graphql';
import fallbackImage from 'Assets/gauze-01.jpeg';
import ImageHelper from 'Helpers/Image';

import styles from './index.module.css';

// Types
type C = FC<{
	project: ProjectRecord;
}>;

// Main component
const CaseStudyCard: C = ({ project }) => {
	console.log(project);
	return (
		<article className={classNames('section', styles.case)}>
			<Link
				href={`work/${project.slug}`}
				className={styles.imageLink}
				data-aos="photo"
				aria-hidden="true"
				tabIndex={-1}
			>
				{project.featuredImage ? (
					<ImageHelper data={project.featuredImage?.responsiveImage} />
				) : (
					<Image src={fallbackImage} alt="" />
				)}
			</Link>

			<p data-aos="title" className={styles.client}>
				{project.title}
			</p>

			<p data-aos="fade-in" data-aos-delay={50} className={styles.description}>
				{project.subtitle}
			</p>

			<Link
				data-aos="fade-in"
				data-aos-delay={100}
				href={`work/${project.slug}`}
				className={styles.link}
				aria-label={`View the ${project.title} case`}
			>
				View project
			</Link>
		</article>
	);
};

// Exports
export default CaseStudyCard;
