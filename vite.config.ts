import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use default server headers. Vite will set correct MIME types for module scripts.
})