import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { Space_Grotesk, Space_Mono } from 'next/font/google';

export const GEIST_MONO = GeistMono;
export const GEIST_SANS = GeistSans;

export const SPACE_GROTESK = Space_Grotesk({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-space-grotesk',
});

export const SPACE_MONO = Space_Mono({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700'],
	variable: '--font-space-mono',
});
