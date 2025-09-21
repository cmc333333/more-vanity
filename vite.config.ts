import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './404.html',
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})