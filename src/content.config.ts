import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const socialIcon = z.enum(['github', 'linkedin', 'twitter', 'facebook', 'email']);

const home = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		ogImage: z.string().optional(),
		heroGreeting: z.string(),
		heroName: z.string(),
		heroRoles: z.string(),
		social: z.array(
			z.object({
				label: z.string(),
				href: z.string(),
				icon: socialIcon,
			}),
		),
		columns: z.array(
			z.object({
				heading: z.string(),
				items: z.array(
					z.object({
						name: z.string(),
						description: z.string().optional(),
						href: z.string().optional(),
						tailLinks: z
							.array(z.object({ label: z.string(), href: z.string() }))
							.optional(),
					}),
				),
			}),
		),
		copyrightName: z.string(),
		copyrightUrl: z.string(),
	}),
});

const pages = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
	}),
});

export const collections = { home, pages };
