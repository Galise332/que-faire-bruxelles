import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = {
  restaurants: 'Restaurants',
  bars: 'Bars & cafés',
  activites: 'Activités',
  sorties: 'Sorties',
  tops: 'Tops',
} as const;
export type Category = keyof typeof CATEGORIES;

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) => z.object({
    image: image().optional(),
    image_credit: z.string().optional(),
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),
    category: z.enum(Object.keys(CATEGORIES) as [Category, ...Category[]]),
    place_id: z.string().optional(),
    address: z.string().optional(),
    website: z.string().url().optional(),
    maps: z.string().url().optional(),
    sponsored: z.boolean().default(false),
    featured: z.boolean().default(false), // adresse mise en avant (offre mensuelle)
  }),
});

export const collections = { articles };
