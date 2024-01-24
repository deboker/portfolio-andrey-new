// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Output directory for assets, relative to outDir
    assetsInlineLimit: 4096,
    assetsInclude: ['**/*.pdf'], // Include PDF files in the build process
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  publicDir: 'images', // Set the public directory to point to the "images" folder
});