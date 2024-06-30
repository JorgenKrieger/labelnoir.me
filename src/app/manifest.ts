import type { MetadataRoute } from 'next';

const sizes = [36, 48, 72, 96, 144, 192];
const icons = sizes.map(size => {
	return {
		src: `/images/icon-${size}.png`,
		size: `${size}x${size}`,
		type: 'image/png',
	};
});

const manifest = (): MetadataRoute.Manifest => {
	return {
		name: 'LabelNoir.me',
		short_name: 'LabelNoir',
		description: 'Portfolio website',
		start_url: '/',
		display: 'browser',
		background_color: '#000',
		theme_color: '#000',
		icons: icons,
	};
};

export default manifest;
