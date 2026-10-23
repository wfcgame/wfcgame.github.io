import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			coverImage: z.string().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		author: z.string().optional(),
		concept: z.boolean().default(false),
		experience: z.boolean().default(false),
		order: z.number().default(100),
		videoId: z.string().regex(/^[A-Za-z0-9_-]{11}$/).optional(),
		videoCredit: z.string().optional(),
		videoTitle: z.string().optional(),
		article: z.string().optional(),
		tags: z.array(z.string()).default([]),
		href: z.string().optional(),
	}),
});

export const collections = { blog, projects };
