// Imports
import type { FC } from 'react';

import type {
	ArticleModelContentField,
	CodeRecord,
	QuoteRecord,
	TextRecord,
} from '@/types/graphql';
import CodeContent from 'Content/Code';
import Quote from 'Content/Quote';
import Text from 'Content/Text';

// Types
type C = FC<{ data: ArticleModelContentField }>;

// Main component
const DynamicContent: C = ({ data }) => {
	switch (data._modelApiKey) {
		case 'code': {
			const codeData = data as CodeRecord;
			return (
				<CodeContent inline={true} language={codeData.language}>
					{codeData.code}
				</CodeContent>
			);
		}
		case 'quote': {
			const quoteData = data as QuoteRecord;
			return <Quote>{quoteData.blockquote}</Quote>;
		}
		case 'text': {
			const textData = data as TextRecord;
			return <Text fullWidth={true} data={textData.content} />;
		}
		default: {
			return <></>;
		}
	}
};

// Exports
export default DynamicContent;
