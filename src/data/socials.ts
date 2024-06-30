import { faCodepen, faFigma, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type SNS = {
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
		platform: 'figma',
		icon: faFigma,
		url: 'https://www.figma.com/@labelnoir',
	},
	{
		platform: 'github',
		icon: faGithub,
		url: 'https://github.com/jorgenkrieger',
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
] satisfies Array<SNS>;
