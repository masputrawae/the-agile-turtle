const toggleNavbar = (
	open: boolean,
	navbar: HTMLElement,
	icons: { open: HTMLElement; close: HTMLElement }
) => {
	// tetap gini aja, soalnya cuma transition-all + duration-300 di tailwind
	// dan kalau pakai requestAnimationFrame(), itu ngak jalan malahan, entah aneh
	if (open) {
		setTimeout(() => {
			navbar.classList.remove('scale-y-0')
		}, 1)
		navbar.classList.remove('hidden')
	} else {
		setTimeout(() => {
			navbar.classList.add('hidden')
		}, 300)
		navbar.classList.add('scale-y-0')
	}

	icons.open.classList.toggle('hidden', open)
	icons.close.classList.toggle('hidden', !open)
}

export const handlerNavbar = () => {
	const button = document.getElementById('toggle-navbar')
	const navbar = document.getElementById('navbar')
	const iconOpen = document.getElementById('icon-navbar-open')
	const iconClose = document.getElementById('icon-navbar-close')

	if (!button || !navbar || !iconClose || !iconOpen) return

	// NOTE: ini agak dilay ketika aku habis reloat navbar.classList.contains("hidden")
	// alhasil setelah reload klik pertama ngak jalan, jalan baru klik kedua
	// jadi aku langsung kasih false aja biar ngak dilay
	let isOpen = false

	button.addEventListener('click', () => {
		isOpen = isOpen ? false : true
		toggleNavbar(isOpen, navbar, { open: iconOpen, close: iconClose })
	})
}
