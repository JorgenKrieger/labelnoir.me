'use client';

import { Transition } from '@headlessui/react';
import { Spin as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';

import backgroundImage from '@/assets/gauze-01.jpeg';
import logo from '@/assets/logo.svg';
import Socials from '@/components/UI/Socials';

import styles from './index.module.css';

const nav = [
	{ text: 'Work', link: '/work' },
	{ text: 'About', link: '/about' },
	{ text: 'Articles', link: '/articles' },
];

const Navigation: FC = () => {
	const [isOpen, setOpen] = useState<boolean>(false);

	return (
		<>
			<header className={styles.section}>
				<Link href="/">
					<Image src={logo} alt="LabelNoir logo" />
				</Link>

				<Hamburger toggled={isOpen} toggle={setOpen} hideOutline={false} color="#FFFFFF" />

				<nav>
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
			</header>

			<Transition
				show={isOpen}
				enter="transition-all duration-300"
				enterFrom="scale-125 blur-xl opacity-0"
				enterTo="scale-100 blur-none opacity-100"
				leave="transition-all duration-500"
				leaveFrom="opacity-100 blur-none scale-100"
				leaveTo="opacity-0 blur-xl scale-125"
			>
				<div className={styles.mobileNav}>
					<Image src={backgroundImage} className={styles.background} alt="" />
					<nav>
						{nav.map((item, index) => (
							<Link
								href={item.link}
								key={item.text}
								data-aos="fade"
								data-aos-delay={150 + index * 50}
							>
								{item.text}
							</Link>
						))}
					</nav>

					<aside>
						<p data-aos="fade" data-aos-delay={200}>
							Hello, I'm <strong>J&ouml;rgen</strong>. You can get in touch through
							social media or email. Check out all options below.
						</p>

						<Socials />
					</aside>
				</div>
			</Transition>
		</>
	);
};

export default Navigation;
