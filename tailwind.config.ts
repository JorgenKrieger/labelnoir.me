import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				noir: {
					50: '#F4F4F4',
					100: '#E6E6E6',
					200: '#CACACA',
					300: '#AEAEAE',
					400: '#929292',
					500: '#767676',
					600: '#5A5A5A',
					700: '#3E3E3E',
					800: '#222222',
					900: '#060606',
					950: '#000000',
				},
				orange: '#F79F1F',
			},
			fontFamily: {
				display: ['var(--font-space-grotesk)'],
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
			lineHeight: {
				'11': '2.75rem',
			},
			screens: {
				'@2x': {
					raw: 'only screen and (min-resolution: 2dppx)',
				},
			},
		},
	},
	plugins: [require('tailwindcss-safe-area')],
} satisfies Config;
