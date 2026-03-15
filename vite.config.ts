import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/donovan-portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'esnext',
    cssMinify: true,
  },
})
