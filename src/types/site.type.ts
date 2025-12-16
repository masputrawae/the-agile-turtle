export interface SiteType {
	title: string
	description: string
	heroImage: string
	copyright: string
	languageCode: string
}

export interface AuthorType {
	name: string
	email: string
	avatar: string
}

export interface FaviconType {
	rel?: string
	type?: string
	href?: string
	sizes?: string
}
