import fetchAllProjects from "./(portfolio)/query"

export default async function sitemap() {
	// Manually added pages
	const pages = [
		{
			url: new URL(`https://${process.env.VERCEL_URL}`),
			lastModified: new Date()
		}
	]

	// Add projects
	const allProjects = await fetchAllProjects()
	allProjects?.data?.allCases.map(project => {
		pages.push({
			url: new URL(`https://${process.env.VERCEL_URL}/cases/${project.slug}`),
			lastModified: new Date(project._updatedAt)
		})
	})

	// Return pages
	return pages
}