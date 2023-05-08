export default async function fetchAllProjects() {
	const res = await fetch(process.env.GRAPHQL_ENDPOINT, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"authorization": `Bearer ${process.env.DATOCMS_API_TOKEN}`
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
			`
		})
	})

	if (!res.ok) return undefined

	return res.json()
}