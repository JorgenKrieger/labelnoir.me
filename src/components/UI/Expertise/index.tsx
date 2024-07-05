// Imports
import classNames from 'classnames';
import type { HTMLAttributes, FC } from 'react';

import { H } from '@/components/Abstracts/headings';

import styles from './index.module.css';

// Types
type C = FC<
	HTMLAttributes<HTMLDivElement> & {
		data: Array<Array<string>>;
	}
>;

// Main component
const Expertise: C = ({ data, className, ...props }) => {
	return (
		<div
			className={classNames('section unsetInPageSpacing', styles.section, className)}
			{...props}
		>
			<H data-aos="title" className={classNames('h2', styles.heading)}>
				Expertise
			</H>

			{data.map((column, columnIndex) => (
				<ul key={`column${columnIndex}`}>
					{column.map((item, index) => (
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
