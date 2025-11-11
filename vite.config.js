import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/walk_smart_front_end/',
  build: {
    outDir: 'docs'
  },
  plugins: [react(), tailwindcss()],
})
