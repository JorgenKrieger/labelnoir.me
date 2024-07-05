/**
 * Syntax Highlight Helper
 * ---
 * Component that helps render code blocks. Depending on React Syntax Highlighter
 *
 * Link: https://github.com/react-syntax-highlighter/react-syntax-highlighter
 */

// Imports
import type { FC, PropsWithChildren } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { funky as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Types
type C = FC<
	PropsWithChildren & {
		language: string | undefined;
	}
>;

// Main component
const CodeHelper: C = ({ language, children }) => {
	return (
		<SyntaxHighlighter
			language={language}
			style={style}
			showLineNumbers={true}
			data-aos="fade-in"
		>
			{children as string}
		</SyntaxHighlighter>
	);
};

// Exports
export default CodeHelper;
