import { notFound } from "next/navigation"
import fetchAllProjects from "./query"
import ProjectTile from "@/components/ProjectTile"
import RouteCheck from "./RouteCheck"
import { Section } from "@/components/Headings"

async function getAllProjects() {
	const data = await fetchAllProjects()

	if (!data.data?.allCases) {
		notFound()
	}

	return data.data.allCases
}

export default async function PortfolioLayout({children}) {
	const projects = await getAllProjects()

	return (
		<>
			<header>
				<h1>Intro title goes here</h1>
			</header>
			<Section>
				{projects.sort((a, b) => b.year - a.year).map(project => (
					<ProjectTile key={project.slug} data={project}>
						<RouteCheck project={project.slug}>
							{children}
						</RouteCheck>
					</ProjectTile>
				))}
			</Section>
		</>
	)
}	