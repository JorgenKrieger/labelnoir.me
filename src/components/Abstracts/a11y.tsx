'use client';

// Imports
import type { FC } from 'react';
// eslint-disable-next-line no-restricted-syntax
import React from 'react';

// Optional config for Axe
const config = {};

// Main component
const AxeCore: FC = () => {
	if (typeof window !== 'undefined') {
		Promise.all([import('@axe-core/react'), import('react-dom')]).then(([axe, ReactDOM]) =>
			axe.default(React, ReactDOM, 2000, config)
		);
	}

	return null;
};

// Exports
export default AxeCore;
