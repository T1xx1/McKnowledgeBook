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
         description: 'Documentation for Minecraft content.',
         social: [
            {
               icon: 'github',
               label: 'GitHub',
               href: 'https://github.com/modpackker/mcknowledgebook'
            }
         ],
         sidebar: [
            {
               label: 'News',
               items: [
                  'news',
                  {
                     slug: 'versions',
                     label: '25w19a snapshot',
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
                  },
                  {
                     slug: 'springtolife',
                     badge: {
                        variant: 'tip',
                        text: 'New'
                     }
                  }
               ]
            },
            {
               label: 'McKnowledgeBook',
               items: [
                  'overview',
                  'why'
               ]
            },
            {
               label: 'Minecraft',
               items: [
                  'minecraft',
                  'versions',
                  'edition',
                  'environment',
                  'minecraftmisc'
               ]
            },
            {
               label: 'Modding',
               items: [
                  'modding',
                  'minecraftsobfuscatedcodebase',
                  'projecttype',
                  'loader',
                  'moddingmisc'
               ]
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
