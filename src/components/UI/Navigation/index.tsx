'use client';

// Imports
import { Transition } from '@headlessui/react';
import { Spin as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import backgroundImage from 'Assets/gauze-01.jpeg';
import logo from 'Assets/logo.svg';
import nav from 'Data/nav.json';
import Socials from 'UI/Socials';

import styles from './index.module.css';

// Main component
const Navigation: FC = () => {
	const [isOpen, setOpen] = useState<boolean>(false);

	const pathname = usePathname();

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<>
			<header className={styles.section} aria-label="Site navigation">
				<Link
					href="/"
					aria-label="Go to homepage"
					className="justify-self-start duration-200 hover:-rotate-6 hover:scale-110"
				>
					<Image priority={true} src={logo} alt="LabelNoir logo" />
				</Link>

				<Hamburger toggled={isOpen} toggle={setOpen} hideOutline={false} color="#FFFFFF" />

				<nav aria-label="Main navigation">
					{nav
						.filter(obj => obj.link != '/')
						.map((item, index) => (
							<Link
								href={item.link}
								key={item.text}
								data-aos="fade"
								data-aos-delay={index * 50}
								data-aos-offset={0}
								onClick={() => setOpen(false)}
								className={styles.link}
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
					<nav aria-label="Mobile navigation">
						{nav
							.filter(obj => obj.link != '/')
							.map((item, index) => (
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

// Exports
export default Navigation;
