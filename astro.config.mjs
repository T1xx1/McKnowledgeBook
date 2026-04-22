// @ts-check
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';
import starlightSidebarTopics from 'starlight-sidebar-topics';

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
			description: 'The Minecraft wiki for modding.',
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
			editLink: {
				baseUrl: 'https://github.com/modpackker/mcknowledgebook/edit/main/',
			},
			customCss: ['./src/styles/index.css'],
			components: {
				PageTitle: './src/components/overrides/PageTitle.astro',
			},
			plugins: [
				starlightSidebarTopics([
					{
						id: 'vanilla',
						label: 'Vanilla',
						link: '/minecraft',
						items: [
							'minecraft',
							{
								label: 'Baseline',
								items: ['vanilla', 'edition', 'gameplay', 'environment', 'version'],
							},
							'launcher',
							{
								label: 'Project types',
								items: ['projecttype', 'addon', 'behaviorpack', 'datapack', 'resourcepack', 'seed'],
							},
							'vibrantvisuals',
							{
								label: 'Technical',
								items: ['identifier', 'command', 'worldgeneration', 'nbt', 'structure', 'lighting'],
							},
							{
								label: 'Tools',
								items: ['fandom', 'minecraftwiki'],
							},
							{
								label: 'Miscellaneous',
								items: [
									'besttoolsenchantments',
									'craft',
									'formattingcode',
									'lighting',
									'oresbestmininglevel',
									'unobtainableresources',
									'wearblocks',
								],
							},
						],
					},
					{
						id: 'modding',
						label: 'Modding',
						link: '/modding',
						items: [
							'modding',
							'minecraftsobfuscatedcodebase',
							'moddingenvironment',
							{
								label: 'Project types',
								items: ['projecttype', 'mod', 'modpack', 'plugin', 'schematic', 'shader'],
							},
							{
								label: 'Loaders',
								items: [
									'loader',
									'modloader',
									'serverengine',
									'shaderloader',
									'pluginloader',
									'proxyserver',
								],
							},
							{
								label: 'Tools',
								items: ['modrinth', 'modpackker'],
							},
							{
								label: 'Miscellaneous',
								items: ['fpsboostingmods', 'vulkanmod'],
							},
						],
					},
				]),
				starlightImageZoom(),
				starlightLinksValidator(),
			],
		}),
	],
});
