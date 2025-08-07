import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: ({ image }) => {
				return z.object({
					aliases: z.array(z.string()).optional(),
					icon: z.union([image().optional(), z.string()]),
				});
			},
		}),
	}),
};
