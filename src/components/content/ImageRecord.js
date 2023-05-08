'use client'

import { Image } from "react-datocms";

export default function ImageRecord({ data }) {
	if (!data.image.responsiveImage) return false

	return (
		<figure>
			{/* Ignore eslint alt attr warning, included in data attr */}
			{/* eslint-disable-next-line */}
			<Image data={data.image.responsiveImage} />

			{/* If title is available */}
			{data.image.responsiveImage.title && (
				<figcaption>{data.image.responsiveImage.title}</figcaption>
			)}
		</figure>
	)
}