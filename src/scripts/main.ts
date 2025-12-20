import { themeHandler, resolveTheme, setTheme } from './theme-handler'
import { handlerNavbar } from './navbar-handler'
export const main = () => {
	document.addEventListener('astro:before-preparation', () => {
		setTheme(resolveTheme(), document.documentElement)
	})

	document.addEventListener('astro:page-load', () => {
		themeHandler()
		handlerNavbar()
	})
}
