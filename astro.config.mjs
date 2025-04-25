// @ts-check
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
   site: 'https://mcknowledgebook.vercel.app',
   integrations: [
      starlight({
         title: 'McKnowledgeBook',
         favicon: '/favicon.ico',
         logo: {
            src: './src/assets/favicon.webp'
         },
         description: 'The Minecraft modding knowledge book',
         social: [
            {
               icon: 'github',
               label: 'GitHub',
               href: 'https://github.com/modpackker/mcknowledgebook'
            }
         ],
         sidebar: [
            'overview',
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
   ],
   vite: {
      plugins: [tailwindcss()]
   }
});
