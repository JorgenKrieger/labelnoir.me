'use client'

import { Image } from 'react-datocms'

export default function GalleryRecord({ data }) {
	return (
		<>
			{data.images.map(image => (
				<figure key={image.filename}>
					{/* Ignore eslint alt attr warning, included in data attr */}
					{/* eslint-disable-next-line */}
					<Image data={image.responsiveImage} />

					{/* If title is available */}
					{image.responsiveImage.title && (
						<figcaption>{image.responsiveImage.title}</figcaption>
					)}
				</figure>
			))}
		</>
	)
}