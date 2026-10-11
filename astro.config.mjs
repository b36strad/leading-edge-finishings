// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://b36strad.github.io',
	base: '/leading-edge-finishings',
	vite: {
		plugins: [tailwindcss()],
	},
});
