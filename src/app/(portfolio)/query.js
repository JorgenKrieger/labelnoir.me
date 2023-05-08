export default async function fetchAllProjects() {
	const res = await fetch('https://graphql.datocms.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
		},
		body: JSON.stringify({
			query: `
				query getAllProjects {
					allCases {
						slug
						client
						title
						year
						_updatedAt
						excerpt {
							value
						}
					}
				}
			`,
		}),
	});

	if (!res.ok) throw new Error('Failed to load query');

	return res.json();
}
