import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const baseSchema = z.object({
	title: z.string(),
	description: z.string(),

	// TODO: sementara optional, next ambil default di site.config.ts
	heroImage: z.string().optional(),

	tags: z.array(z.string()).optional(),
	// categories: z.array(z.string()).default(["Uncategorized"])

	featured: z.boolean().default(false),
	pinned: z.boolean().default(false),
	pubDate: z.coerce.date().default(new Date()),
	updatedDate: z.coerce.date().default(new Date())
})

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{mdx,md}', base: './src/content/blog' }),
	schema: baseSchema
})

const projects = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{mdx,md}', base: './src/content/projects' }),
	schema: baseSchema.extend({
		repo: z.string()
	})
})

export const collections = { blog, projects }
