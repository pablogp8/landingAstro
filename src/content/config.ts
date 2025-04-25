import { defineCollection, z } from "astro:content";

const sales = defineCollection({
  schema: z.object({
    title: z.string(),
    address: z.string(),
    description: z.string(),
    image: z.string(),
  })
});

export const collections = { 'sales': sales };