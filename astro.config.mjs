// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost:4321',
	base: '/',
	trailingSlash: 'always',

	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [icon(), mdx()],
	experimental: {
		fonts: [
			{
				name: 'Geist',
				provider: fontProviders.google(),
				weights: [400, 500, 600, 700],
				cssVariable: '--font-geist'
			}
		]
	}
})
