const xDns = {
	key: 'X-DNS-Prefecth-Control',
	value: 'on',
};

const xFrameOptions = {
	key: 'X-Frame-Option',
	value: 'SAMEORIGIN',
};

const permissionPolicy = {
	key: 'Permission-Policy',
	value: '',
};

const xContentTypeOptions = {
	key: 'X-Content-Type-Options',
	value: 'nosniff',
};

const referrerPolicy = {
	key: 'Referrer-Policy',
	value: 'origin-when-cross-origin',
};

export default { xDns, xFrameOptions, permissionPolicy, xContentTypeOptions, referrerPolicy };
