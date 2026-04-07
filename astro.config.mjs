// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://centaurlabs.com',
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
