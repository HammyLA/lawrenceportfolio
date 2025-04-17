import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: '/lawrenceportfolio/', // Replace <REPO> with your repository name if needed
})
