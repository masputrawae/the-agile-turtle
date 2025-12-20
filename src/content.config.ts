import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { config } from "./site.config.ts"

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),

  heroImage: z.string().default(config.heroImage),

  tags: z.array(z.string()).default(["uncategorized"]),
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
