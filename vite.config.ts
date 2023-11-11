import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    outDir: 'build',
    minify: true,
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          reactDom: ['react-dom'],
          swiper: ['swiper'],
          antd: ['antd'],
          lodash: ['lodash'],
          icons: ['@ant-design/icons'],
        },
      },
    },
  },
  server: {
    port: 7000,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  base: './',
});
