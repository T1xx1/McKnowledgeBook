// @ts-check
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
   vite: {
      plugins: [tailwindcss()]
   },
   site: 'https://mcknowledgebook.vercel.app',
   integrations: [
      starlight({
         plugins: [
            starlightLinksValidator()
         ],
         title: 'McKnowledgeBook',
         favicon: '/favicon.ico',
         logo: {
            src: './src/assets/favicon.webp'
         },
         description: 'The Minecraft modding Wiki.',
         social: [
            {
               icon: 'blueSky',
               label: 'BlueSky',
               href: 'https://bsky.app/profile/modpackker.bsky.social'
            },
            {
               icon: 'discord',
               label: 'Discord',
               href: 'https://discord.gg/gaDqYhxyzB'
            },
            {
               icon: 'github',
               label: 'GitHub',
               href: 'https://github.com/modpackker/mcknowledgebook'
            },
            {
               icon: 'instagram',
               label: 'Instagram',
               href: 'https://instagram.com/modpackker'
            },
            {
               icon: 'threads',
               label: 'Threads',
               href: 'https://threads.net/@modpackker'
            }
         ],
         sidebar: [
            {
               label: 'News',
               items: [
                  'news',
				  {
					 slug: 'versions',
					 label: '1.21.8',
					 badge: {
						variant: 'tip',
						text: 'New'
					 }
				  },
                  {
                     slug: 'chasetheskies',
                     badge: {
                        variant: 'tip',
                        text: 'New'
                     }
                  },
                  {
                     slug: 'dialogcommand',
                     badge: {
                        variant: 'tip',
                        text: 'New'
                     }
                  },
                  {
                     slug: 'vibrantvisuals',
                     badge: {
                        variant: 'tip',
                        text: 'New'
                     }
                  }
               ]
            },
            {
               label: 'Minecraft',
               items: [
                  'minecraft',
                  'vanilla',
                  'environment',
                  'edition',
                  'versions',
                  'vibrantvisuals',
                  'commands',
                  'resourcepack',
                  'datapack',
                  'minecraftmisc'
               ]
            },
            {
               label: 'Modding',
               items: [
                  'modding',
                  'minecraftsobfuscatedcodebase',
                  'moddingenvironment',
                  'loader',
                  'projecttype',
                  'mod',
                  'plugin',
                  'shader',
                  'moddingmisc',
                  'modpack'
               ]
            },
            {
               label: 'McKnowledgeBook',
               items: [
                  'why',
                  'tech'
               ]
            },
            {
               label: 'Modpackker',
               link: 'https://modpackker.vercel.app',
            },
            {
               label: '💚 T1xx1',
               link: 'https://t1xx1.vercel.app',
            }
         ],
         editLink: {
            baseUrl: 'https://github.com/modpackker/mcknowledgebook/edit/main/'
         },
         head: [
            {
               tag: 'link',
               attrs: {
                  rel: 'preconnect',
                  href: 'https://fonts.googleapis.com'
               }
            },
            {
               tag: 'link',
               attrs: {
                  rel: 'preconnect',
                  href: 'https://fonts.gstatic.com',
                  crossorigin: true
               }
            },
            {
               tag: 'link',
               attrs: {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap'
               }
            }
         ],
         customCss: [
            './src/styles/index.css'
         ]
      }),
   ]
});
