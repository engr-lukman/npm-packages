import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'; // Plugin to generate TypeScript declaration files
import { resolve } from 'path';

/**
 * Vite configuration for building the is-object-checker library
 * This configuration produces both ESM and UMD builds with TypeScript declarations
 */
export default defineConfig({
  build: {
    lib: {
      // Source entry file
      entry: resolve(__dirname, 'src/index.ts'),
      // Global variable name when used in browser via UMD build
      name: 'IsObjectChecker',
      // Output filename pattern for the different formats
      fileName: (format) => `is-object-checker.${format}.js`,
    },
    // Generate source maps for easier debugging
    sourcemap: true,
    rollupOptions: {
      // List external dependencies that shouldn't be bundled
      external: [],
      output: {
        // Define global variable names for external dependencies when using UMD build
        globals: {},
      },
    },
  },
  // Generate TypeScript declaration files (.d.ts)
  plugins: [dts()],
});