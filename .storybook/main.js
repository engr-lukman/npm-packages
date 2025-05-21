/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import vue from "@vitejs/plugin-vue";

const config = {
  stories: ["../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  viteFinal: async (config, { configType }) => {
    // Add Vue plugin
    config.plugins = [...(config.plugins || []), vue()];
    
    // Set the base URL for GitHub Pages when building for production
    if (configType === 'PRODUCTION') {
      // This ensures assets are loaded from the correct path on GitHub Pages
      config.base = '/npm-packages/';
    }
    
    return config;
  },
};
export default config;
