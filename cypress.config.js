const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		setupNodeEvents(on, config) {
			// Create logging for cypress-axe
			// https://github.com/component-driven/cypress-axe#using-the-violationcallback-argument
			on('task', {
				log(message) {
					console.log(message);
					return null;
				},
				table(message) {
					console.table(message);
					return null;
				},
			});

			// Delete videos for specs without failing or retried tests
			// https://docs.cypress.io/guides/guides/screenshots-and-videos#Delete-videos-for-specs-without-failing-or-retried-tests
			on('after:spec', (spec, results) => {
				const failures = results.tests.some((test) =>
					test.attempts.some((attempt) => attempt.state === 'failed')
				);
				if (!failures) {
					fs.unlinkSync(results.video);
				}
			});
		},
	},
});
