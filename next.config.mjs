'use strict';

import headers from './next.headers.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	skipTrailingSlashRedirect: true,
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					headers.xDns,
					headers.referrerPolicy,
					headers.permissionPolicy,
					headers.xFrameOptions,
					headers.xContentTypeOptions,
				],
			},
		];
	},
};

export default nextConfig;
