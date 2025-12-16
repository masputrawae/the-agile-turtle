import type { SiteType, AuthorType, FaviconType } from '../types/site.type'

const SITE: SiteType = {
	title: 'SiteTitle',
	description: 'Minim culpa nulla commodo voluptate tempor aute nostrud proident.',
	copyright: `Copyright © ${new Date().getFullYear()} Putra Jaya. All Rights Reserved.`,
	languageCode: 'id',
	heroImage: 'https://res.cloudinary.com/mpw-img/image/upload/v1764700311/default-banner_pfmolv.jpg'
}

const AUTHOR: AuthorType = {
	name: 'Putra Jaya',
	email: 'masputrawae.official@gmail.com',
	avatar: 'https://res.cloudinary.com/mpw-img/image/upload/v1751292526/logo_cudnki.jpg'
}

const FAVICONS: FaviconType[] = [
	{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
	{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
	{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
	{ rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' }
]

export default { SITE, AUTHOR, FAVICONS }
