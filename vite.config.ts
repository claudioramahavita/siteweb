import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/siteweb/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "swiper/swiper-bundle.css";`,
      },
    },
  },
  build: {
    outDir: "dist", // Assure-toi que l’output est bien dist
  },
})
