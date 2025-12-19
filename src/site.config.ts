export interface ConfigType {
	siteTitle: string
	description: string
	heroImage: string
	languageCode: string
}

export interface CopyrightType {
	year: string
	license: string
	licenseUrl: string
}

export const config: ConfigType = {
	siteTitle: 'Masputrawae',
	description: 'Personal blog. Tempat berbagi ide dan pengalaman',
	languageCode: 'id',
	heroImage: 'https://res.cloudinary.com/mpw-img/image/upload/v1764700311/default-banner_pfmolv.jpg'
}
