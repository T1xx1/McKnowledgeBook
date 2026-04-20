import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: ({ image }) => {
				return z.object({
					aliases: z.array(z.string()).optional(),
					icon: z.union([image().optional(), z.string()]),
					lastUpdated: z.date(),
				});
			},
		}),
	}),
};
