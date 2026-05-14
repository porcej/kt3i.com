// @ts-check
import { defineConfig } from 'astro/config';
import { wxPublicIndex } from './vite-plugin-wx-public-index.js';

// Cloudflare Pages: build command `npm run build`, output directory `dist`.
// In the Pages project, set Node.js to 20.x or 22.x (see package.json "engines").
// https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
export default defineConfig({
	site: 'https://www.kt3i.com',
	output: 'static',
	vite: {
		plugins: [wxPublicIndex()],
	},
});
