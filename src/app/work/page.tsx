// Imports
import type { FC } from 'react';
import { type SeoOrFaviconTag, toNextMetadata } from 'react-datocms';

import { performRequest } from '@/lib/datocms';
import type { ProjectOverviewRecord, ProjectRecord } from '@/types/graphql';
import { ProjectOverviewDocument, AllProjectsDocument } from '@/types/graphql';
import CaseStudyCard from 'UI/CaseStudyCard';
import Hero from 'UI/Hero';

// GraphQL fetcher
const fetchData = async () => {
	const {
		projectOverview,
	}: {
		projectOverview: ProjectOverviewRecord;
	} = await performRequest({ query: ProjectOverviewDocument });

	const {
		allProjects,
	}: {
		allProjects: Array<ProjectRecord>;
	} = await performRequest({ query: AllProjectsDocument });

	return { projectOverview, allProjects };
};

// Meta data
export const generateMetadata = async () => {
	const { projectOverview } = await fetchData();
	return toNextMetadata([...(projectOverview._seoMetaTags as Array<SeoOrFaviconTag>)]);
};

// Page component
const WorkOverview: FC = async () => {
	const { projectOverview, allProjects } = await fetchData();

	return (
		<main className="spaceInPage">
			<Hero img={projectOverview.backgroundImage?.responsiveImage}>
				<Hero.Title className="text-center">Case Studies</Hero.Title>
			</Hero>

			<div className="section spaceInPage">
				{allProjects.map(project => (
					<CaseStudyCard key={project.slug} project={project} />
				))}
			</div>
		</main>
	);
};

// Exports
export default WorkOverview;
