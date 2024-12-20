import type { ImageLoaderProps } from 'next/image';

export default function imgixLoader({ src, width, quality }: ImageLoaderProps) {
	const url = new URL(`https://labelnoir.imgix.net/${src}`);
	const params = url.searchParams;
	params.set('auto', params.getAll('auto').join(',') || 'format');
	params.set('fit', params.get('fit') || 'max');
	params.set('w', params.get('w') || width.toString());
	params.set('q', (quality || 50).toString());
	return url.href;
}
