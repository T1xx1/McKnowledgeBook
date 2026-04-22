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
					topic: z.enum(['vanilla', 'modding']),
					aliases: z.array(z.string()).optional(),
					icon: z.union([image().optional(), z.string()]),
					links: z
						.object({
							discord: z.string().optional(),
							github: z.string().optional(),
							website: z.string().optional(),
						})
						.optional(),
					topics: z
						.array(
							z.object({
								label: z.string(),
								link: z.string(),
							}),
						)
						.optional(),
					lastUpdated: z.date(),
				});
			},
		}),
	}),
};
