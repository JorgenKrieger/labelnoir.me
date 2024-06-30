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
type C = FC<SRCImagePropTypes & ImagePropTypes & HTMLAttributes<HTMLDivElement>>;

// Main component
const Picture: C = ({ data, className, ...props }) => {
	return (
		<figure className={classNames('section', className)} data-aos="photo" {...props}>
			<ImageHelper data={data} />
		</figure>
	);
};

// Exports
export default Picture;
