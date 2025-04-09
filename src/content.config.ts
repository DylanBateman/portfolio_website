import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/projects' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    status: z.string(),
    tech: z.array(z.string()),
  }),
})
export const collections = { projects }
