/**
 * Modular content: Text
 * ---
 * Used by page builders as a content block
 */

// Imports
import classNames from 'classnames';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import type { Maybe, TextModelContentField } from '@/types/graphql';
import TextHelper from 'Helpers/Text';

// Types
type C = FC<
	PropsWithChildren &
		HTMLAttributes<HTMLDivElement> & {
			data?: TextModelContentField;
			fullWidth?: boolean;
			align?: 'left' | 'right' | Maybe<string>;
		}
>;

// Component
const Text: C = ({ className, data, children, fullWidth, align, ...props }) => {
	const content = (
		<section
			className={classNames(className, 'space-y-[1.5em]', {
				'lg:w-3/4': !fullWidth,
				'lg:ml-auto': !fullWidth && align == 'right',
			})}
			{...props}
		>
			{data ? <TextHelper data={data} /> : <>{children}</>}
		</section>
	);

	return fullWidth ? content : <div className="section">{content}</div>;
};

// Export
export default Text;
