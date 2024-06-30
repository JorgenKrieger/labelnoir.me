import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

/** @type {import('graphql-config').IGraphQLConfig} */

const config = {
	schema: [
		{
			'https://graphql.datocms.com': {
				headers: {
					Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
					'X-Exclude-Invalid': 'true',
				},
			},
		},
	],
	documents: './src/**/*.graphql',
	generates: {
		'src/types/graphql.ts': {
			plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
			config: {
				documentMode: 'string',
				strictScalars: true,
				futureProofEnums: true,
				scalars: {
					BooleanType: 'boolean',
					CustomData: 'Record<string, unknown>',
					Date: 'string',
					DateTime: 'string',
					FloatType: 'number',
					IntType: 'number',
					ItemId: 'string',
					JsonField: 'unknown',
					MetaTagAttributes: 'Record<string, string>',
					UploadId: 'string',
				},
				namingConvention: {
					enumValues: './pascalCaseWithUnderscores.cjs',
				},
			},
		},
	},
};

export default config;
