import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "swiper/swiper-bundle.css";',
      },
    },
  },
  //base: "/siteweb/",
  plugins: [react()],
})
