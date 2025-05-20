/**
 * Vite configuration for Vue Secure PIN package
 * 
 * This configuration optimizes the build process for publishing
 * as an NPM package with proper Vue component and TypeScript support.
 * 
 * Note: Requires Node.js 20.0 (LTS) or higher
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      // Generate TypeScript declarations
      include: ['src/**/*.vue', 'src/**/*.ts'],
      beforeWriteFile: (filePath, content) => {
        // Ensure proper Vue component typing
        return {
          filePath,
          content
        };
      }
    })
  ],
  build: {
    // Library configuration
    lib: {
      // Entry point for the package
      entry: resolve(__dirname, 'src/index.ts'),
      // Global variable name when used in browser (UMD build)
      name: 'VueSecurePin',
      // Output file name patterns
      fileName: (format) => `vue-secure-pin.${format}.js`,
    },
    // Generate sourcemaps for easier debugging
    sourcemap: true,
    // Clean output directory before each build
    emptyOutDir: true,
    // Configure Rollup options
    rollupOptions: {
      // External dependencies not bundled with the library
      external: ['vue'],
      output: {
        // Provide global variables for external dependencies in UMD build
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
