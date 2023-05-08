'use client'

import React from 'react'

const LevelContext = React.createContext({
	level: 1,
	Component: "h1"
})

// Returns the current heading and level
export function useLevel() {
	return React.useContext(LevelContext)
}

function InternalH({ render, ...props }, forwardedRef) {
	const context = useLevel()

	if (render) {
		return render(context)
	}

	return <context.Component ref={forwardedRef} {...props} />
}

// Renders a dynamic HTML heading (h1, h2, etc.) or custom component according to the current level
export const H = React.forwardRef(InternalH)

/**
 * Renders `component` in the current level and `children` in the next level.
 * @param component A component containing a heading
 * @param children The children in the next level 
 */
export function Section({ component, children }) {
	const { level } = useLevel()
	const nextLevel = Math.min(level + 1, 6)

	const value = {
		level: nextLevel,
		Component: `h${nextLevel}`
	}

	return (
		<>
			{component}
			<LevelContext.Provider value={value}>{children}</LevelContext.Provider>
		</>
	)
}