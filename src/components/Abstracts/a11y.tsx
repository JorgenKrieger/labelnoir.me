'use client';

import type { FC } from 'react';
// eslint-disable-next-line no-restricted-syntax
import React from 'react';

const config = {};

const AxeCore: FC = () => {
	if (typeof window !== 'undefined') {
		Promise.all([import('@axe-core/react'), import('react-dom')]).then(([axe, ReactDOM]) =>
			axe.default(React, ReactDOM, 1000, config)
		);
	}

	return null;
};

export default AxeCore;
