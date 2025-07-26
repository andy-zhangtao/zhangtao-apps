import { defineCollection, z } from 'astro:content';

const appsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['mobile', 'desktop', 'web', 'cli']),
    tech: z.array(z.string()),
    status: z.enum(['published', 'beta', 'development', 'archived']),
    publishDate: z.date(),
    featured: z.boolean().default(false),
    github: z.string().url().optional(),
    website: z.string().url().optional().or(z.literal('')),
    appStore: z.string().url().optional().or(z.literal('')),
    playStore: z.string().url().optional().or(z.literal('')),
    screenshots: z.array(z.string()).optional(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  apps: appsCollection,
};