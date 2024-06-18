'use client';

import type {
	DetailedHTMLProps,
	HTMLAttributes,
	ReactElement,
	ForwardedRef,
	FC,
	PropsWithChildren,
} from 'react';
import { createContext, useContext, forwardRef, createElement } from 'react';

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Heading = `h${Level}`;
type LevelContextValue = { level: Level; Component: Heading };

const LevelContext = createContext<LevelContextValue>({
	level: 1,
	Component: 'h1',
});

export function useLevel(): LevelContextValue {
	return useContext(LevelContext);
}

type HProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
	render?: (context: LevelContextValue) => ReactElement;
};

const InternalH = (
	{ render, ...props }: HProps,
	forwardedRef: ForwardedRef<HTMLHeadingElement>
) => {
	const context = useLevel();

	if (render) {
		return render(context);
	}

	return <context.Component ref={forwardedRef} {...props} />;
};

/**
 * Renders a dynamic HTML heading (h1, h2, etc.) or custom component according to the current level.
 */
export const H = forwardRef(InternalH);

type SectionProps = PropsWithChildren &
	HTMLAttributes<HTMLDivElement> & {
		as?: keyof HTMLElementTagNameMap | FC;
	};

/**
 * Renders `component` in the current level and `children` in the next level.
 * @param children The children in the next level
 */

export const Section = ({ as, children, ...props }: SectionProps) => {
	const { level } = useLevel();
	const nextLevel = Math.min(level + 1, 6) as Level;

	const value = {
		level: nextLevel,
		Component: `h${nextLevel}` as Heading,
	};

	if (as) {
		return createElement(
			as,
			// @ts-expect-error: Bug in createElement
			{ ...props },
			<LevelContext.Provider value={value}>{children}</LevelContext.Provider>
		);
	}

	return <LevelContext.Provider value={value}>{children}</LevelContext.Provider>;
};
