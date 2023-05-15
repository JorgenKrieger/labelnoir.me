'use client';

import Link from 'next/link';
import { H } from './Headings';
import { StructuredText } from 'react-datocms/structured-text';
import { useTranslations } from 'next-intl';

export default async function ProjectTile({ data, children }) {
	const t = useTranslations('home');

	return (
		<article style={{ height: '100vh', display: 'flex' }}>
			<header>
				<H>{data.title}</H>
				<StructuredText data={data.excerpt} />
				<Link href={`/cases/${data.slug}`}>{t('project_button')}</Link>
			</header>

			{children}
		</article>
	);
}
