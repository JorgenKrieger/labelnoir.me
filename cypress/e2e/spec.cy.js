// Logging functionality for Axe-core

const X2JS = require("x2js");

// https://github.com/component-driven/cypress-axe#in-your-spec-file
function terminalLog(violations) {
	cy.task(
		'log',
		`${violations.length} accessibility violation` +
		`${violations.length === 1 ? '' : 's'} ${violations.length === 1 ? 'was' : 'were'
		} detected`
	);
	// pluck specific keys to keep the table readable
	const violationData = violations.map(({ id, impact, description, nodes }) => ({
		id,
		impact,
		description,
		nodes: nodes.length,
	}));

	cy.task('table', violationData);
}

// Inject Axe functionality before all tests
// https://github.com/component-driven/cypress-axe#cyinjectaxe
beforeEach(() => {
	cy.visit('/');
	cy.injectAxe();
});

// Tests
describe('Base tests', () => {
	it('Connects to website', () => {
		cy.visit('/');
	});

	it('Has no a11y violations after asynchronous load', () => {
		// Retry the check if there are initial failures
		cy.checkA11y(
			null,
			{
				retries: 3,
				interval: 100,
			},
			terminalLog
		);
	});

	it('Has a sitemap', () => {
		cy.request('/sitemap.xml')
			.its('body')
			.then((body) => {
				const x2js = new X2JS()
				const json = x2js.xml2js(body)

				expect(json.urlset.url).to.be.an('array').and.have.length.gt(0)
			})
	});
});
