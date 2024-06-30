// Imports
import classNames from 'classnames';
import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import type { ImagePropTypes, SRCImagePropTypes } from 'react-datocms';

import ImageHelper from 'Helpers/Image';

import styles from './index.module.css';

// Types
type PC = FC<
	SRCImagePropTypes &
		ImagePropTypes & {
			ssr?: boolean;
		}
>;

type TC = FC<PropsWithChildren & HTMLAttributes<HTMLDivElement>>;
type MC = FC<PropsWithChildren & HTMLAttributes<HTMLDivElement>> & {
	Picture: PC;
	Text: TC;
};

// Subcomponents
const ProfilePicture: PC = ({ ssr = true, data }) => {
	return <ImageHelper data={data} ssr={ssr} className={styles.profilePicture} />;
};

const Text: TC = ({ children, ...props }) => (
	<div className={styles.text} {...props}>
		{children}
	</div>
);

// Main component
const Biography: MC = ({ children, className, ...props }) => {
	return (
		<div
			className={classNames('section unsetInSectionSpacing', styles.section, className)}
			{...props}
		>
			{children}
		</div>
	);
};

// Assign subcomponents
Biography.Picture = ProfilePicture;
Biography.Text = Text;

// Export
export default Biography;
