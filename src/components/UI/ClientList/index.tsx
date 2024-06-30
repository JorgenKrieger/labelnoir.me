// Imports
import classNames from 'classnames';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './index.module.css';

// Types
type C = FC<
	PropsWithChildren &
		HTMLAttributes<HTMLDivElement> & {
			clients: Array<string> | unknown;
		}
>;

// Main components
const ClientList: C = ({ children, className, clients, ...props }) => {
	return (
		<div className={classNames('section', styles.section, className)} {...props}>
			<p data-aos="fade-in" className={styles.title}>
				{children}
			</p>

			<ul className={styles.list}>
				{(clients as Array<string>).map((client, index) => (
					<li
						className={styles.client}
						key={client}
						data-aos="fade-in"
						data-aos-delay={50 * index}
					>
						{client}
					</li>
				))}
			</ul>
		</div>
	);
};

// Exports
export default ClientList;
