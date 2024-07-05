/**
 * WARNING
 * --
 * Although component runs fairly normal,hacky CSS was used to make this function.
 * Check `/src/styles/lint-free/swiper.css` for more info.
 */

'use client';

// Imports
import type { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import type { ProjectRecord } from '@/types/graphql';
import CaseStudyCard from 'UI/CaseStudyCard';

// Types
type C = FC<{
	projects: Array<ProjectRecord>;
	slug: string;
}>;

const RelatedProjects: C = ({ projects, slug }) => {
	return (
		<Swiper slidesPerView="auto" spaceBetween={32}>
			{projects
				.filter(obj => obj.slug != slug)
				.slice(0, 3)
				.map((project, index) => (
					<SwiperSlide key={project.slug} className="!w-max">
						<CaseStudyCard
							project={project}
							className="swiper-card"
							delay={index}
							aos={false}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	);
};

// Exports
export default RelatedProjects;
