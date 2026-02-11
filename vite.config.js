import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use '/' so dev server and most hosts resolve assets from root (fixes blank page in some setups)
  base: '/',
})
