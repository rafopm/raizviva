// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://4321-firebase-raizviva-1751916628046.cluster-etsqrqvqyvd4erxx7qq32imrjk.cloudworkstations.dev/',
	integrations: [mdx(), sitemap(), tailwind()],
});
