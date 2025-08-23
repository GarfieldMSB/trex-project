// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://github.com/GarfieldMSB/trex-project', // 👈 URL final de GitHub Pages
  base: '/', // 👈 nombre del repo
});