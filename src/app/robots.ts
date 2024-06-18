import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
	return {
		rules: {
			userAgent: '*',
			disallow: '/',
		},
		sitemap: 'https://labelnoir.me/sitemap.xml',
	};
};

export default robots;
