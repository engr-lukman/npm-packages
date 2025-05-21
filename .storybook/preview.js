/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Ensure dynamic imports are correctly handled
    docs: {
      story: {
        inline: true, // Display the story inline
      },
    },
    // Make sure assets are loaded from the right base path
    assets: {
      // Use relative paths that will be prefixed with the base URL
      prefix: '',
    },
  },
};

export default preview;