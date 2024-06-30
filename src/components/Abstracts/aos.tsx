'use client';

// Imports
import AOS from 'aos';
import type { FC } from 'react';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

// Main components
const AnimateOnScroll: FC = () => {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-quad',
		});
	}, []);

	return null;
};

// Exports
export default AnimateOnScroll;
