import { Meta, StoryObj } from '@storybook/vue3';
import { SecurePassword } from "./src/index";

/**
 * SecurePassword - A secure password input component with virtual keyboard 
 * designed for financial applications
 */
const meta = {
  title: "Components/Secure Password (Vue.js)",
  component: SecurePassword,
  argTypes: {
    callbackEvent: { 
      action: 'callbackEvent',
      description: 'Emitted when password value changes or clears' 
    }
  }
} satisfies Meta<typeof SecurePassword>;

export default meta;
type Story = StoryObj<typeof meta>;

// Template for all stories
const Template = (args) => ({
  components: { SecurePassword },
  setup() {
    const onPasswordHandler = (event) => {
      args.callbackEvent(event);
    };
    return { args, onPasswordHandler };
  },
  template: `
    <div style="max-width: 600px; margin: 2rem;">
      <SecurePassword
        :maxLength="args.maxLength"
        :isError="args.isError"
        :errorMessage="args.errorMessage"
        :placeholder="args.placeholder"
        :isEnableShuffle="args.isEnableShuffle"
        :showKeyboard="args.showKeyboard"
        :title="args.title"
        :shiftLabel="args.shiftLabel"
        :clearLabel="args.clearLabel"
        @callbackEvent="onPasswordHandler"
      />
    </div>
  `,
});

/**
 * Default example
 */
export const Default: Story = {
  render: Template,
  args: {
    maxLength: 100,
    isError: false,
    errorMessage: "",
    placeholder: "Enter Password",
    isEnableShuffle: false,
    showKeyboard: true,
    title: "Use this keyboard to enter your password",
    shiftLabel: "Aa",
    clearLabel: "Clear",
  }
};
