import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Proxy API requests to your backend server
      '/api': {
        target: 'http://localhost:3000', // Your backend server address
        changeOrigin: true,
        secure: false,
      }
    }
  }
});