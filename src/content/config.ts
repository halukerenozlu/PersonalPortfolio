import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    date: z.date().default(() => new Date()),
  }),
});

export const collections = { blog };
