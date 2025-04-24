// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
               label: 'GitHub',
               href: 'https://github.com/modpackker/mcknowledgebook',
               icon: 'github'
            }
         ],
         sidebar: [
            'overview',
         ],
         editLink: {
            baseUrl: 'https://github.com/modpackker/mcknowledgebook/edit/main/'
         },
         customCss: [
            './src/styles/index.css'
         ]
      }),
   ],
});
