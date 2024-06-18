import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import logo from '@/assets/logo.svg';
import Socials from '@/components/UI/Socials';

import styles from './index.module.css';

const nav = [
	{ text: 'Home', link: '/' },
	{ text: 'Work', link: '/work' },
	{ text: 'About', link: '/about' },
	{ text: 'Articles', link: '/articles' },
];

const Footer: FC = () => {
	return (
		<footer className={styles.section}>
			<Image src={logo} alt="LabelNoir" data-aos="photo" />

			<div>
				<Socials />
				<nav data-aos="fade">
					{nav.map((item, index) => (
						<Link
							href={item.link}
							key={item.text}
							data-aos="fade"
							data-aos-delay={index * 50}
						>
							{item.text}
						</Link>
					))}
				</nav>
			</div>

			<p className="small" data-aos="fade" data-aos-offset="50">
				Published under CC licence.
				<br />
				Designed with love in 🧡 <span>The Netherlands</span>
			</p>
		</footer>
	);
};

export default Footer;
