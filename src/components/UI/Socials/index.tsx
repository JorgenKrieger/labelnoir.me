import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FC } from 'react';

import socials from '@/data/socials';

import styles from './index.module.css';

const Socials: FC = () => {
	return (
		<ul className={styles.list}>
			{socials.map((sns, index) => (
				<li
					key={sns.platform}
					data-aos="fade"
					data-aos-delay={index * 50}
					data-aos-offset={48}
				>
					<a href={sns.url} target="_blank">
						<FontAwesomeIcon icon={sns.icon} />
					</a>
				</li>
			))}
		</ul>
	);
};

export default Socials;
