import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-reveal': path.resolve(import.meta.dirname, 'src/mocks/react-reveal.jsx'),
    },
  },
  build: {
    outDir: 'build',
  },
});