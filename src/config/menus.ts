import type { NavigationType } from '../types/menus.type'

const main: NavigationType[] = [
	{
		name: 'Home',
		url: '/',
		icon: 'bi:house-fill'
	},
	{
		name: 'About',
		url: '/about/',
		icon: 'bi:person-circle'
	},
	{
		name: 'Blog',
		url: '/blog/',
		icon: 'bi:globe'
	},
	{
		name: 'Tags',
		url: '/tags/',
		icon: 'bi:tags-fill'
	},
	{
		name: 'Archives',
		url: '/archives/',
		icon: 'bi:archive-fill'
	}
]

const social: NavigationType[] = [
	{
		name: 'Twitter X',
		url: 'https://example.com/',
		icon: 'bi:twitter-x',
		isExternal: true,
	},
	{
		name: 'Instagram',
		url: 'https://example.com/',
		icon: 'bi:instagram',
		isExternal: true,
	},
	{
		name: 'Facebook',
		url: 'https://example.com/',
		icon: 'bi:facebook',
		isExternal: true,
	},
	{
		name: 'Github',
		url: 'https://example.com/',
		icon: 'bi:github',
		isExternal: true,
	},
	{
		name: 'Discord',
		url: 'https://example.com/',
		icon: 'bi:discord',
		isExternal: true,
	}
]

export const MENUS = { social, main }
