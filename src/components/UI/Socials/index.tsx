// Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import type { FC, HTMLAttributes } from 'react';

import socials from 'Data/socials';

import styles from './index.module.css';

// Types
type C = FC<HTMLAttributes<HTMLUListElement>>;

// Main component
const Socials: C = ({ className }) => {
	return (
		<ul className={classNames(className, styles.list)}>
			{socials.map((sns, index) => (
				<li
					key={sns.platform}
					data-aos="fade"
					data-aos-delay={index * 50}
					data-aos-offset={48}
				>
					<a
						href={sns.url}
						target="_blank"
						aria-label={`Get in touch via ${sns.platform}`}
					>
						<FontAwesomeIcon icon={sns.icon} />
					</a>
				</li>
			))}
		</ul>
	);
};

// Exports
export default Socials;
