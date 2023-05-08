import { notFound } from "next/navigation"
import getProject from "./query"
import { H, Section } from "@/components/Headings"
import { StructuredText } from "react-datocms/structured-text"
import DynamicRecord from "@/components/content"

// Reusable function with checks for GraphQL query
async function getProjectData(slug) {
	const data = await getProject(slug)

	if (!data.data?.case) {
		notFound()
	}

	return data.data.case
}

// Generate page-specific meta data
export async function generateMetadata({ params: { slug } }) {
	const { seo: { title, description, twitterCard } } = await getProjectData(slug)

	return {
		title: {
			absolute: title
		},
		description: description,
		twitter: {
			card: twitterCard,
			title: title,
			description: description
		},
		openGraph: {
			title: title,
			description: description
		}
	}
}

// Default page
export default async function Page({ params: { slug } }) {
	const { title, challenge, outcome, quote, content } = await getProjectData(slug)
	return (
		<Section>
			<div>
				{challenge && (
					<section>
						<H>Challenge</H>
						<StructuredText data={challenge} />
					</section>
				)}

				{outcome && (
					<section>
						<H>Outcome</H>
						<StructuredText data={outcome} />
					</section>
				)}
			</div>

			{quote && (
				<blockquote>
					{quote}
				</blockquote>
			)}

			{content.map(record => DynamicRecord(record))}
		</Section>
	)
}