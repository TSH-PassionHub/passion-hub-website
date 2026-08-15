import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string().default('Marketing'),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    seo: z.object({
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { insights };
