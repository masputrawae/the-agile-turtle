import { themeHandler, resolveTheme, setTheme } from './theme-handler'

export const main = () => {
	document.addEventListener('astro:before-preparation', () => {
		setTheme(resolveTheme(), document.documentElement)
	})

	document.addEventListener('astro:page-load', () => {
		themeHandler()
	})
}
