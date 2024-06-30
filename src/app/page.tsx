// Imports
import { performRequest } from '@/lib/datocms';
import type { HomeRecord, ProjectRecord } from '@/types/graphql';
import { AllProjectsDocument, HomeDocument } from '@/types/graphql';
import TextHelper from 'Helpers/Text';
import CaseStudyCard from 'UI/CaseStudyCard';
import ClientList from 'UI/ClientList';
import Hero from 'UI/Hero';

// Page component
const Home = async () => {
	const { home }: { home: HomeRecord } = await performRequest({ query: HomeDocument });
	const {
		allProjects,
	}: {
		allProjects: Array<ProjectRecord>;
	} = await performRequest({ query: AllProjectsDocument });

	return (
		<main className="spaceInPage">
			<Hero className="lg:!gap-y-24">
				<Hero.Title>{home.title}</Hero.Title>
				<Hero.Description>
					<TextHelper data={home.introduction?.value} />
				</Hero.Description>
			</Hero>

			{allProjects.map((project: ProjectRecord) => (
				<CaseStudyCard key={project.slug} project={project} />
			))}

			<ClientList clients={home.clients}>{home.clientHeading}</ClientList>
		</main>
	);
};

// Exports
export default Home;
