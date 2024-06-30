/**
 * Modular content: Code block
 * ---
 * Used by page builders as a content block.
 */

// Imports
import type { FC, PropsWithChildren } from 'react';

import CodeHelper from 'Helpers/Code';

// Types
type C = FC<
	PropsWithChildren & {
		inline?: boolean;
		language?: string | undefined;
	}
>;

// Main component
const Code: C = ({ inline = false, language, children }) => {
	return inline ? (
		<CodeHelper language={language}>{children}</CodeHelper>
	) : (
		<div className="section">
			<CodeHelper language={language}>{children}</CodeHelper>
		</div>
	);
};

// Exports
export default Code;
