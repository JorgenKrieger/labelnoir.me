// Imports
import { notFound } from 'next/navigation';
import type { FC } from 'react';
import type { SeoOrFaviconTag } from 'react-datocms';
import { toNextMetadata } from 'react-datocms';

import { Section } from '@/components/Abstracts/headings';
import { performRequest } from '@/lib/datocms';
import { AllProjectsDocument, ProjectDocument, type ProjectRecord } from '@/types/graphql';
import Quote from 'Content/Quote';
import Hero from 'UI/Hero';
import PageBuilder from 'UI/PageBuilder';
import ProjectMetaData from 'UI/ProjectMetaData';
import ProjectSummary from 'UI/ProjectSummary';

// Types
type C = FC<{
	params: {
		slug: string;
	};
}>;

/**
 * Static Site Generation
 * ---
 * - Disable dynamic pages
 *
 * - Generate static pages
 */
export const dynamicParams = false;

export const generateStaticParams = async () => {
	const {
		allProjects,
	}: {
		allProjects: Array<ProjectRecord>;
	} = await performRequest({ query: AllProjectsDocument });

	return allProjects.map((project: ProjectRecord) => ({
		slug: project.slug,
	}));
};

/**
 * Page functionality
 * ---
 */
// GraphQL fetcher
const fetchData = async (slug: string) => {
	const { project }: { project: ProjectRecord } = await performRequest({
		query: ProjectDocument,
		variables: { slug: slug },
	});

	return project;
};

// Meta data
export const generateMetadata = async ({ params: { slug } }: { params: { slug: string } }) => {
	const project = await fetchData(slug);
	return toNextMetadata([...(project.seo as Array<SeoOrFaviconTag>)] || []);
};

// Main component
const CaseStudy: C = async ({ params: { slug } }) => {
	const project = await fetchData(slug);

	if (!project) {
		notFound();
	}

	return (
		<main className="spaceInPage w-full">
			<Hero img={project.featuredImage?.responsiveImage}>
				<Hero.Title>{project.title}</Hero.Title>
				<Hero.Description>
					<p>{project.subtitle}</p>
				</Hero.Description>
			</Hero>

			<Section>
				<ProjectSummary challenge={project.challenge} outcome={project.outcome} />
			</Section>

			{project.quote && <Quote>{project.quote}</Quote>}

			<ProjectMetaData
				agency={project.agency}
				year={project.year}
				scope={project.scope}
				websiteUrl={project.websiteUrl}
			/>

			{/* Modular content */}
			<div className="spaceInPage">
				{project.pageBuilder.map(section => (
					<PageBuilder key={section.id} section={section} />
				))}
			</div>
		</main>
	);
};

// Exports
export default CaseStudy;
