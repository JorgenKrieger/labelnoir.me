/**
 * Modular content: Picture
 * ---
 * Used by page builders as a content block
 */

// Imports
import classNames from 'classnames';
import type { FC, HTMLAttributes } from 'react';
import type { ImagePropTypes, SRCImagePropTypes } from 'react-datocms';

import ImageHelper from 'Helpers/Image';

// Types
type C = FC<
	SRCImagePropTypes &
		ImagePropTypes &
		HTMLAttributes<HTMLDivElement> & {
			spacing?: boolean;
		}
>;

// Main component
const Picture: C = ({ data, className, spacing = true, ...props }) => {
	return (
		<figure
			className={classNames(className, {
				section: spacing,
			})}
			data-aos="photo"
			{...props}
		>
			<ImageHelper data={data} />
		</figure>
	);
};

// Exports
export default Picture;
