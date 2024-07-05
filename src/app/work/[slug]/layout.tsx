// Imports
import type { FC, PropsWithChildren } from 'react';

import { performRequest } from '@/lib/datocms';
import type { ProjectRecord } from '@/types/graphql';
import { AllProjectsDocument } from '@/types/graphql';
import Slider from 'src/components/UI/RelatedProjects';

// Types
type C = FC<
	PropsWithChildren & {
		params: {
			slug: string;
		};
	}
>;

// Layout component
const CaseStudyLayout: C = async ({ children, params: { slug } }) => {
	const {
		allProjects,
	}: {
		allProjects: Array<ProjectRecord>;
	} = await performRequest({ query: AllProjectsDocument });

	return (
		<>
			{children}
			<section className="setInPageSpacing spaceInSections w-full overflow-hidden">
				<h2 className="section">More cases</h2>
				<Slider projects={allProjects} slug={slug} />
			</section>
		</>
	);
};

// Exports
export default CaseStudyLayout;
