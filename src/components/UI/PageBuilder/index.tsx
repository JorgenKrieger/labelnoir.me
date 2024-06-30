// Imports
import type { FC } from 'react';
import { Fragment } from 'react';

import Quote from '@/components/Content/Quote';
import Text from '@/components/Content/Text';
import type {
	GalleryRecord,
	MediaItemRecord,
	QuoteRecord,
	SectionRecord,
	TextRecord,
} from '@/types/graphql';
import Gallery from 'Content/Gallery';
import Picture from 'Content/Picture';

// Types
type C = FC<{ section: SectionRecord }>;

// Main component
const PageBuilder: C = ({ section }) => {
	return (
		<div className="spaceInSections">
			{section.content.map(block => {
				switch (block._modelApiKey) {
					case 'text': {
						const textData = block as TextRecord;
						return <Text align={textData.align} data={textData.content} />;
					}
					case 'quote': {
						const quoteData = block as QuoteRecord;
						return <Quote>{quoteData.blockquote}</Quote>;
					}
					case 'media_item': {
						const imageData = block as MediaItemRecord;
						return imageData.asset?.responsiveImage ? (
							<Picture data={imageData.asset.responsiveImage} />
						) : null;
					}
					case 'gallery': {
						const galleryData = block as GalleryRecord;
						return (
							<Gallery type={galleryData.galleryType}>
								{galleryData.assets.map(img => (
									<Fragment key={img.responsiveImage?.alt}>
										{img?.responsiveImage && (
											<Picture data={img.responsiveImage} />
										)}
									</Fragment>
								))}
							</Gallery>
						);
					}
				}
			})}
		</div>
	);
};

// Exports
export default PageBuilder;
