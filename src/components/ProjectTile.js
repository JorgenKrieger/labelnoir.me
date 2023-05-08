'use client'

import Link from "next/link";
import { H } from "./Headings";
import { StructuredText } from "react-datocms/structured-text";

export default function ProjectTile({ data, children }) {
	return (
		<article style={{height: '100vh'}}>
			<header>
				<H>{data.title}</H>
				<StructuredText data={data.excerpt} />
				<Link href={`/cases/${data.slug}`}>Explore</Link>
			</header>

			{children}
		</article>
	)
}