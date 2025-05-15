/**
 * Vite configuration for ArrayObjectValidator package
 * 
 * This configuration optimizes the build process for publishing
 * as an NPM package with proper TypeScript definitions.
 */
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    // Library configuration
    lib: {
      // Entry point for the package
      entry: resolve(__dirname, 'src/index.ts'),
      // Global variable name when used in browser (UMD build)
      name: 'ArrayObjectValidator',
      // Output file name patterns
      fileName: (format) => `array-object-validator.${format}.js`,
    },
    // Generate sourcemaps for easier debugging
    sourcemap: true,
    // Clean output directory before each build
    emptyOutDir: true,
    // Configure Rollup options
    rollupOptions: {
      output: {
        // Use named exports format
        exports: 'named',
      },
    },
  },
  // Configure plugins
  plugins: [
    // Generate TypeScript declaration files
    dts({ 
      // Include TypeScript files for declaration generation
      include: ['src/**/*.ts'],
      // Output directory for declarations
      outDir: 'dist',
    }),
  ],
});