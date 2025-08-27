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
			plugins: [starlightImageZoom(), starlightLinksValidator()],
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
					label: 'News',
					items: [
						'news',
						{
							slug: 'versions',
							label: 'Versions • 25w35a',
							badge: {
								variant: 'tip',
								text: 'New',
							},
						},
						'chasetheskies',
						'vibrantvisuals',
					],
				},
				{
					label: 'Minecraft',
					items: [
						'minecraft',
						'vanilla',
						'edition',
						{
							label: 'Environments',
							items: ['environment', 'client', 'server'],
						},
						'launcher',
						{
							label: 'Versions',
							items: ['versions', 'chasetheskies', 'springtolife'],
							collapsed: true,
						},
						'resourcepack',
						{
							label: 'Datapack',
							items: [
								'datapack',
								'datapackvsmod',
								'craftdatapack',
								'datapackadvancement',
								'datapackdimension',
								'datapackenchantment',
								'datapackfunction',
								'datapackloottable',
								'datapackpredicate',
								'datapackrecipe',
								'datapackstructure',
								'datapacktag',
								'datapackworldgeneration',
							],
							collapsed: true,
						},
						'vibrantvisuals',
						'tools',
						'minecraftwiki',
						'misc'
					],
				},
				{
					label: 'Modding',
					items: [
						'modding',
						'minecraftsobfuscatedcodebase',
						'moddingenvironment',
						{
							label: 'Loaders',
							items: ['loader', 'modloader', 'pluginloader', 'shaderloader'],
						},
						{
							label: 'Project types',
							items: ['projecttype', 'mod', 'modpack', 'plugin', 'shader'],
						},
						'modrinth',
						'moddingtools',
						'moddingmisc',
					],
				},
				{
					label: 'McKnowledgeBook',
					items: ['why', 'tech'],
				},
				{
					label: '📦 Modpackker',
					link: 'https://modpackker.vercel.app',
				},
				{
					label: '💚 T1xx1',
					link: 'https://t1xx1.vercel.app',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/modpackker/mcknowledgebook/edit/main/',
			},
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: true,
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap',
					},
				},
			],
			customCss: ['./src/styles/index.css'],
			components: {
				PageTitle: './src/components/pagetitle.astro',
				ThemeSelect: './src/components/themeselect.astro',
			},
		}),
	],
});
