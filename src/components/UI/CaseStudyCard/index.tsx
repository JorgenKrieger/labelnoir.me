// Imports
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, HTMLAttributes } from 'react';

import type { ProjectRecord } from '@/types/graphql';
import fallbackImage from 'Assets/gauze-01.jpeg';
import ImageHelper from 'Helpers/Image';

import styles from './index.module.css';

// Types
type C = FC<
	HTMLAttributes<HTMLDivElement> & {
		project: ProjectRecord;
		aos?: boolean;
		delay?: number;
	}
>;

// Main component
const CaseStudyCard: C = ({ project, className, delay = 0, aos = true }) => {
	return (
		<div className={classNames(styles.container, className)}>
			<article className={styles.case}>
				<Link
					href={`/work/${project.slug}`}
					className={styles.imageLink}
					data-aos={aos && 'photo'}
					data-aos-delay={delay * 50}
					aria-hidden="true"
					tabIndex={-1}
				>
					{project.featuredImage ? (
						<ImageHelper data={project.featuredImage?.responsiveImage} />
					) : (
						<Image src={fallbackImage} alt="" />
					)}
				</Link>

				<p data-aos={aos && 'title'} data-aos-delay={delay * 50} className={styles.client}>
					{project.title}
				</p>

				<p
					data-aos={aos && 'fade-in'}
					data-aos-delay={50 + delay * 50}
					className={styles.description}
				>
					{project.subtitle}
				</p>

				<Link
					data-aos={aos && 'fade-in'}
					data-aos-delay={100 + delay * 50}
					href={`/work/${project.slug}`}
					className={styles.link}
					aria-label={`View the ${project.title} case`}
				>
					View project
				</Link>
			</article>
		</div>
	);
};

// Exports
export default CaseStudyCard;
