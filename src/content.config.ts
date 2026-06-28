import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A "recipe" is one markdown file in src/content/recipes/.
// These fields are what the visual admin panel (/admin) fills in.
const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    // Who shared this recipe (community credit). Defaults to the site when omitted.
    author: z.string().optional(),
    // Images live in /public/images/recipes/ and are referenced like /images/recipes/file.jpg
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    prepTime: z.string().optional(), // e.g. "15 minutes"
    cookTime: z.string().optional(), // e.g. "30 minutes"
    totalTime: z.string().optional(), // e.g. "45 minutes"
    servings: z.string().optional(), // e.g. "4 servings"
    cost: z.string().optional(), // e.g. "$8 total / ~$2 per serving"
    category: z.string().optional(), // e.g. "Dinner"
    cuisine: z.string().optional(), // e.g. "American"
    keywords: z.array(z.string()).default([]),
    ingredients: z.array(z.string()).default([]),
    instructions: z.array(z.string()).default([]),
    notes: z.string().optional(),
    // Affiliate product recommendations shown on the recipe page.
    products: z
      .array(
        z.object({
          name: z.string(),
          url: z.string(),
          description: z.string().optional(),
          image: z.string().optional(),
        })
      )
      .default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// "Collections" are roundup/blog posts — e.g. "12 Cheap Dinners Under $5".
// Great for SEO, Pinterest, and grouping affiliate product picks.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { recipes, posts };
