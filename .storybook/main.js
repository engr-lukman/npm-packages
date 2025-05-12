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
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins || []), vue()];
    return config;
  },
};
export default config;
