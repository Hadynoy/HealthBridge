import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    visualizer({
      filename: './dist/bundle-stats.html', // output file for the report
      open: true, // automatically open report in browser after build
      gzipSize: true,
      brotliSize: true,
    })
  ],
  server: {
    port: 5173,
  },
})
