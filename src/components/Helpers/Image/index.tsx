/**
 * Image Helper component
 * ---
 * This component renders an image without any pre-set styling.
 */

// Imports
import type { FC } from 'react';
import type { ImagePropTypes, SRCImagePropTypes } from 'react-datocms';
import { Image as ClientImage, SRCImage as ServerImage } from 'react-datocms';

import styles from './index.module.css';

// Types
type C = FC<SRCImagePropTypes & ImagePropTypes & { ssr?: boolean }>;

// Main component
const Image: C = ({ ssr = true, data, className, ...props }) => {
	return (
		<>
			{ssr ? (
				<ServerImage data={data} pictureClassName={className} {...props} />
			) : (
				<ClientImage className={className} data={data} {...props} />
			)}
			{data.title && <figcaption className={styles.figcaption}>{data.title}</figcaption>}
		</>
	);
};

// Exports
export default Image;
