/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.datocms-assets.com',
				port: '',
				pathname: '/64052'
			}
		]
	}
};

module.exports = nextConfig;
