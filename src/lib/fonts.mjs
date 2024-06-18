import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { Space_Grotesk } from 'next/font/google';

export const GEIST_MONO = GeistMono;
export const GEIST_SANS = GeistSans;

export const SPACE_GROTESK = Space_Grotesk({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-space-grotesk',
});
