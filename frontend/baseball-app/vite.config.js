import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/team": {
        target: 'http://localhost:4000'
      },
      "/hitter": {
        target: 'http://localhost:4000'
      },
      "/pitcher": {
        target: 'http://localhost:4000'
      }
    }
  }
})
