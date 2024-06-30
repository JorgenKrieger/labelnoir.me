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
				mono: ['var(--font-space-mono)'],
			},
			fontSize: {
				h1: 'var(--font-size-h1)',
				h2: 'var(--font-size-h2)',
				h3: 'var(--font-size-h3)',
				'p-jumbo': 'var(--font-size-p-jumbo)',
				'p-intro': 'var(--font-size-p-intro)',
				p: 'var(--font-size-p)',
				'p-small': 'var(--font-size-p-small)',
				quote: 'var(--font-size-quote)',
				'10xl': '10rem',
			},
			lineHeight: {
				'11': '2.75rem',
			},
			screens: {
				'@2x': {
					raw: 'only screen and (min-resolution: 2dppx)',
				},
				hd: '1920px',
			},
		},
	},
	plugins: [require('tailwindcss-safe-area')],
} satisfies Config;
