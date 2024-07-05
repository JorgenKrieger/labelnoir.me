// Imports
import type { SeoOrFaviconTag } from 'react-datocms';
import { toNextMetadata } from 'react-datocms';

import { performRequest } from '@/lib/datocms';
import type { HomeRecord, ProjectRecord } from '@/types/graphql';
import { HomeDocument } from '@/types/graphql';
import TextHelper from 'Helpers/Text';
import CaseStudyCard from 'UI/CaseStudyCard';
import ClientList from 'UI/ClientList';
import Hero from 'UI/Hero';

// GraphQL fetcher
const fetchData = async () => {
	const { home }: { home: HomeRecord } = await performRequest({ query: HomeDocument });
	return home;
};

// Meta data
export const generateMetadata = async () => {
	const home = await fetchData();
	return toNextMetadata([...(home.seo as Array<SeoOrFaviconTag>)]);
};

// Page component
const Home = async () => {
	const home = await fetchData();

	return (
		<main className="spaceInPage">
			<Hero className="lg:!gap-y-24">
				<Hero.Title>{home.title}</Hero.Title>
				<Hero.Description className="text-p-jumbo">
					<TextHelper data={home.introduction?.value} />
				</Hero.Description>
			</Hero>

			<div className="section spaceInSections">
				{home.featuredProjects.map((project: ProjectRecord) => (
					<CaseStudyCard key={project.slug} project={project} />
				))}
			</div>

			<ClientList clients={home.clients}>{home.clientHeading}</ClientList>
		</main>
	);
};

// Exports
export default Home;
