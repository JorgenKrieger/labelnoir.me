'use client';

import React from 'react';

export default function Axe() {
	if (typeof window == 'undefined' || process.env.NODE_ENV == 'production') return false;

	const ReactDOM = require('react-dom');
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);

	return true;
}
