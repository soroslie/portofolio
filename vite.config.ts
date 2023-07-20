import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://soroslie.github.io/soros-lie',
  plugins: [react()],
})
