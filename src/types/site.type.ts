import type { HTMLAttributes } from 'astro/types'

export interface ConfigType {
	siteTitle: string
	description: string
	heroImage: string
	languageCode: string
	author: AuthorType
	copyright: CopyrightType
	social: SocialType
	navigations: LinkType[]
}

export interface AuthorType {
	name: string
	email: string
	avatar: string
}

export interface CopyrightType {
	year: string
	license: string
	licenseUrl: string
}

export interface LinkType extends HTMLAttributes<'a'> {
	icon?: string
}

export interface SocialType {
	twitterX: string
	facebookAdmin: string
	facebookAppId: string
	links: LinkType[]
}
