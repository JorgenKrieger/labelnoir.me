import { createElement } from 'react'
import GalleryRecord from './GalleryRecord'
import ImageRecord from './ImageRecord'
import QuoteRecord from './QuoteRecord'
import TextRecord from './TextRecord'

export { default as TextRecord } from './TextRecord'
export { default as ImageRecord } from './ImageRecord'
export { default as GalleryRecord } from './GalleryRecord'
export { default as QuoteRecord } from './QuoteRecord'

const Components = {
	text: TextRecord,
	image: ImageRecord,
	gallery: GalleryRecord,
	quote: QuoteRecord
}

export default function DynamicRecord(block) {
	if (typeof Components[block._modelApiKey] !== "undefined") {
		return createElement(Components[block._modelApiKey], {
			key: block.id,
			data: block
		})
	}

	return false
}