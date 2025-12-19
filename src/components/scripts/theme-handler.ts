type Theme = 'dark' | 'light'
const KEY_THEME = 'theme'
export const resolveTheme = (): Theme => {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
	const storage = sessionStorage.getItem(KEY_THEME)

	// Checking
	const systemTheme = mediaQuery.matches ? 'dark' : 'light'
	return storage === 'dark' || storage === 'light' ? storage : systemTheme
}

export const setTheme = (
	theme: Theme,
	elm: HTMLElement,
	icons?: { dark: HTMLElement; light: HTMLElement }
) => {
	if (typeof window === 'undefined') return

	sessionStorage.setItem(KEY_THEME, theme)
	elm.setAttribute('data-theme', theme)

	if (!icons) return
	icons.dark.classList.toggle('hidden', theme !== 'dark')
	icons.light.classList.toggle('hidden', theme !== 'light')
}

export const themeHandler = () => {
	let theme = resolveTheme()

	const button = document.getElementById('toggle-theme')
	const elHtml = document.documentElement
	const iconLight = document.getElementById('icon-light-mode')
	const iconDark = document.getElementById('icon-dark-mode')

	if (iconDark && iconLight) {
		button?.addEventListener('click', () => {
			theme = theme === 'dark' ? 'light' : 'dark'
			setTheme(theme, elHtml, { dark: iconDark, light: iconLight })
		})

		setTheme(theme, elHtml, { dark: iconDark, light: iconLight })
	} else {
		setTheme(theme, elHtml)
	}
}
