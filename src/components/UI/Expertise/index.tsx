// Imports
import classNames from 'classnames';
import type { HTMLAttributes, FC } from 'react';

import { H } from '@/components/Abstracts/headings';

import styles from './index.module.css';

// Types
type C = FC<
	HTMLAttributes<HTMLDivElement> & {
		column1: Array<string>;
		column2: Array<string>;
		column3: Array<string>;
		column4: Array<string>;
	}
>;

// Main component
const Expertise: C = ({ column1, column2, column3, column4, className, ...props }) => {
	const columns: { [key: string]: Array<string> } = { column1, column2, column3, column4 };

	return (
		<div
			className={classNames('section unsetInPageSpacing', styles.section, className)}
			{...props}
		>
			<H data-aos="title" className={classNames('h2', styles.heading)}>
				Expertise
			</H>

			{Object.keys(columns).map((columnKey, columnIndex) => (
				<ul key={columnKey}>
					{columns[columnKey].map((item, index) => (
						<li
							key={item}
							data-aos="fade-in"
							data-aos-delay={columnIndex * 50 + index * 50}
						>
							{item}
						</li>
					))}
				</ul>
			))}
		</div>
	);
};

// Exports
export default Expertise;
