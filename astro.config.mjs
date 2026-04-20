// @ts-check
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	site: 'https://mcknowledgebook.vercel.app',
	integrations: [
		svelte(),
		starlight({
			title: 'McKnowledgeBook',
			favicon: '/favicon.ico',
			logo: {
				src: './src/assets/favicon.webp',
			},
			description: 'The Minecraft modding Wiki.',
			social: [
				{
					icon: 'blueSky',
					label: 'BlueSky',
					href: 'https://bsky.app/profile/modpackker.bsky.social',
				},
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/gaDqYhxyzB',
				},
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/modpackker/mcknowledgebook',
				},
				{
					icon: 'instagram',
					label: 'Instagram',
					href: 'https://instagram.com/modpackker',
				},
				{
					icon: 'threads',
					label: 'Threads',
					href: 'https://threads.net/@modpackker',
				},
			],
			sidebar: [
				{
					label: 'Minecraft',
					items: [
						'minecraft',
						'vanilla',
						'edition',
						'gameplay',
						'environment',
						'versions',
						'launcher',
						/* technical */
						'identifier',
						'command',
						'seed',
						'worldgeneration',
						'nbt',
						'structure',
						'lighting',
						/* exts */
						'resourcepack',
						'datapack',
						'vibrantvisuals',
						/* tools */
						'tools',
						'minecraftwiki',
						/*  */
						'misc',
					],
				},
				{
					label: 'Modding',
					items: [
						'modding',
						'minecraftsobfuscatedcodebase',
						'moddingenvironment',
						/*  */
						'projecttype',
						'loader',
						'modpack',
						'mod',
						'shader',
						'plugin',
						'serverengine',
						'proxyserver',
						/* tech */
						'schematic',
						/* tools */
						'moddingtools',
						'modrinth',
						'modpackker',
						/*  */
						'moddingmisc',
					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/modpackker/mcknowledgebook/edit/main/',
			},
			customCss: ['./src/styles/index.css'],
			components: {
				PageTitle: './src/components/pagetitle.astro',
			},
			plugins: [starlightImageZoom(), starlightLinksValidator()],
		}),
	],
});
