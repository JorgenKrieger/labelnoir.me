export default async function getProject(slug, lang) {
	const res = await fetch(process.env.CMS_GRAPHQL_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
		},
		body: JSON.stringify({
			query: `
				query getProject($slug: String!, $lang: SiteLocale) {
					case(locale: $lang ,filter: {slug: {eq: $slug}}) {
						title
						client
						role
						seo {
							title
							description
							twitterCard
							image {
								url
								height
								width
							}
						}
						challenge {
							value
						}
						outcome {
							value
						}
						quote
						content {
							... on TextRecord {
								_modelApiKey
								id
								title
								content {
									value
								}
							}
							... on ImageRecord {
								_modelApiKey
								id
								image {
									responsiveImage {
										src
										width
										height
										alt
										title	
										base64
									}
									filename
								}
							}
							... on GalleryRecord {
								_modelApiKey
								id
								images {
									responsiveImage {
										src
										width
										height
										alt
										title
										base64
									}
									filename
								}
							}
							... on QuoteRecord {
								_modelApiKey
								id
								blockquote
							}
						}
					}
				}
			`,
			variables: {
				slug: slug,
				lang: lang,
			},
		}),
	});

	if (!res.ok) return undefined;

	return res.json();
}
