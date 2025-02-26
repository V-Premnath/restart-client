import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwind()],
  server: {
    host: '0.0.0.0',  // Allow the server to be accessed from any device on the network
    port: 3000,        // Set the port you want Vite to listen on (default is 3000)
    open: true,        // Automatically open the app in the browser when the server starts
    proxy: {
      '/api': {
        target: 'http://192.168.103.29:8000', // Your backend URL
        changeOrigin: true,
        secure: false, // If you're not using HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrite the path
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',     // If you want to use @ as an alias for the src folder
    },
  },
  


})
