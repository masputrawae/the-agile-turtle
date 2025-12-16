// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost:4321',
	base: '/',

	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [icon()],

	experimental: {
		fonts: [
			{
				name: 'Geist',
				provider: fontProviders.google(),
				weights: [400, 500, 600, 700],
				cssVariable: '--font-sans'
			}
		]
	}
})
