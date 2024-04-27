import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				canvas: 'Canvas',
				'canvas-text': 'CanvasText',
			},
			fontFamily: {
				display: ['var(--font-space-grotesk)'],
				sans: ['var(--font-geist-sans)'],
				mono: ['var(--font-geist-mono)'],
			},
		},
	},
	plugins: [],
} satisfies Config;
