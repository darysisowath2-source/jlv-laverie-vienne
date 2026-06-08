import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://jlv-laverie-vienne.pages.dev',
  vite: { plugins: [tailwindcss()] },
})
