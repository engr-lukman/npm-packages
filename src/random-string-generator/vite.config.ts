import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'RandomStringGenerator',
      fileName: (format) => `random-string-generator.${format}.js`,
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
  plugins: [
    dts({ 
      include: ['src/**/*.ts'],
      outDir: 'dist',
    }),
  ],
});