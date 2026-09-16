import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date().or(z.string()),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    heading: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

export const collections = { blog, pages };