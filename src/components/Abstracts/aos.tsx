'use client';

import AOS from 'aos';
import type { FC } from 'react';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const AnimateOnScroll: FC = () => {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-quad',
		});
	}, []);

	return null;
};

export default AnimateOnScroll;
