import { notFound } from 'next/navigation';
import fetchAllProjects from './query';
import ProjectTile from '@/components/ProjectTile';
import RouteCheck from './RouteCheck';
import { Section } from '@/components/Headings';
import { getDictionary } from '../dictionaries';

async function getAllProjects(lang) {
	const data = await fetchAllProjects(lang);

	if (!data.data?.allCases) {
		notFound();
	}

	return data.data.allCases;
}

export default async function PortfolioLayout({ children, params }) {
	const projects = await getAllProjects(params.locale);
	const dict = await getDictionary(params.locale);

	return (
		<>
			<header>
				<h1>{dict.home.title}</h1>
			</header>
			<Section>
				{projects
					.sort((a, b) => b.year - a.year)
					.map((project) => (
						<ProjectTile key={project.slug} data={project}>
							<RouteCheck project={project.slug}>{children}</RouteCheck>
						</ProjectTile>
					))}
			</Section>
		</>
	);
}
