'use client';

import { useParams } from 'next/navigation';

export default function RouteCheck({ children, project }) {
	const { slug } = useParams();
	return slug === project ? <>{children}</> : false;
}
