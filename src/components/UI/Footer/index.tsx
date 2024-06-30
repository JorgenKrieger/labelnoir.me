// Imports
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import logo from 'Assets/logo.svg';
import nav from 'Data/nav.json';
import Socials from 'UI/Socials';

import styles from './index.module.css';

// Main component
const Footer: FC = () => {
	return (
		<footer className={styles.section}>
			<Image src={logo} alt="LabelNoir" data-aos="photo" />

			<div>
				<Socials />
				<nav data-aos="fade" data-aos-offset="50">
					{nav.map((item, index) => (
						<Link
							href={item.link}
							key={item.text}
							data-aos="fade"
							data-aos-delay={index * 50}
							data-aos-offset="50"
						>
							{item.text}
						</Link>
					))}
				</nav>
			</div>

			<p className="small" data-aos="fade" data-aos-offset="0">
				Published under CC licence.
				<br />
				Designed with love in 🧡 <span>The Netherlands</span>
			</p>
		</footer>
	);
};

// Exports
export default Footer;
