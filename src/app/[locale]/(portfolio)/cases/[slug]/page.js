import { notFound } from 'next/navigation';
import getProject from './query';
import { H, Section } from '@/components/Headings';
import { StructuredText } from 'react-datocms/structured-text';
import DynamicRecord from '@/components/content';
import { getDictionary } from '@/app/[locale]/dictionaries';

// Reusable function with checks for GraphQL query
async function getProjectData(slug, lang) {
	const data = await getProject(slug, lang);

	if (!data.data?.case) {
		notFound();
	}

	return data.data.case;
}

// Generate page-specific meta data
export async function generateMetadata({ params: { slug, locale } }) {
	const {
		seo: { title, description, twitterCard },
	} = await getProjectData(slug, locale);

	return {
		title: {
			absolute: title,
		},
		description: description,
		twitter: {
			card: twitterCard,
			title: title,
			description: description,
		},
		openGraph: {
			title: title,
			description: description,
		},
	};
}

// Default page
export default async function Page({ params: { slug, locale } }) {
	const { title, challenge, outcome, quote, content } = await getProjectData(slug, locale);
	const dict = await getDictionary(locale);

	return (
		<Section>
			<div>
				{challenge && (
					<section>
						<H>{dict?.case?.challenge}</H>
						<StructuredText data={challenge} />
					</section>
				)}

				{outcome && (
					<section>
						<H>{dict?.case?.outcome}</H>
						<StructuredText data={outcome} />
					</section>
				)}
			</div>

			{quote && <blockquote>{quote}</blockquote>}

			{content.map((record) => DynamicRecord(record))}
		</Section>
	);
}
