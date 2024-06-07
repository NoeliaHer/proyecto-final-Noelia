import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@layouts': resolve(__dirname, 'src/layouts'),
      '@components': resolve(__dirname, 'src/components'),
      // Agrega más alias según sea necesario
    },
  },
});
