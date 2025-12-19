import type { HTMLAttributes } from 'astro/types'

export interface ConfigType {
  siteTitle: string
  description: string
  heroImage: string
  languageCode: string
  author: AuthorType
  copyright: CopyrightType
  social: SocialType
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

export const config: ConfigType = {
  siteTitle: 'Masputrawae',
  description: 'Personal blog. Tempat berbagi ide dan pengalaman',
  languageCode: 'id',
  heroImage:
    'https://res.cloudinary.com/mpw-img/image/upload/v1764700311/default-banner_pfmolv.jpg',

  author: {
    name: 'Putra Jaya',
    email: 'masputrawae.official@gmail.com',
    avatar: "https://res.cloudinary.com/mpw-img/image/upload/v1751292526/logo_cudnki.jpg"
  },

  copyright: {
    year: '2024 - 2025',
    license: 'Under Creative Commons Attribution 4.0 International License.',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
  },

  social: {
    twitterX: '@masputrawae',
    facebookAdmin: 'xxxx',
    facebookAppId: 'xxxx',

    links: [
      {
        name: 'Twitter X',
        href: 'https://example.com',
        target: '_blank',
        icon: 'bi:twitter-x'
      },
      {
        name: 'Instagram',
        href: 'https://example.com',
        target: '_blank',
        icon: 'bi:instagram'
      },
      {
        name: 'Facebook',
        href: 'https://example.com',
        target: '_blank',
        icon: 'bi:facebook'
      },
      {
        name: 'Discord',
        href: 'https://example.com',
        target: '_blank',
        icon: 'bi:discord'
      },
      {
        name: 'Github',
        href: 'https://example.com',
        target: '_blank',
        icon: 'bi:github'
      }
    ]
  }
}
