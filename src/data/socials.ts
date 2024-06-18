import {
	faCodepen,
	faDribbble,
	faGithub,
	faInstagram,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type TSocials = {
	platform: string;
	icon: IconDefinition;
	url: string;
};

export default [
	{
		platform: 'linkedin',
		icon: faLinkedinIn,
		url: 'https://www.linkedin.com/in/jorgenkrieger/',
	},
	{
		platform: 'github',
		icon: faGithub,
		url: 'https://github.com/jorgenkrieger',
	},
	{
		platform: 'instagram',
		icon: faInstagram,
		url: 'https://www.instagram.com/jorgenkrieger/',
	},
	{
		platform: 'dribbble',
		icon: faDribbble,
		url: 'https://dribbble.com/labelnoir',
	},
	{
		platform: 'codepen',
		icon: faCodepen,
		url: 'https://codepen.io/labelnoir',
	},
	{
		platform: 'mail',
		icon: faEnvelope,
		url: 'mailto:jorgen@labelnoir.me',
	},
] satisfies Array<TSocials>;
