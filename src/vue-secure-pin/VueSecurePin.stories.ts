import { Meta, StoryObj } from '@storybook/vue3';
import { SecurePin } from "./src/index";

/**
 * SecurePin - A secure PIN input component with virtual keyboard 
 * designed for financial applications
 */
const meta = {
  title: "Components/Secure Pin (Vue.js)",
  component: SecurePin,
} satisfies Meta<typeof SecurePin>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default example
 */
export const Default: Story = {
  args: {
    maxLength: 5,
    isError: false,
    errorMessage: "",
    placeholder: "Enter PIN",
    isEnableShuffle: true,
    showKeyboard: true,
    title: "Use this keyboard to enter your PIN",
    clearLabel: "Clear",
  }
};

/**
 * With error
 */
export const WithError: Story = {
  args: {
    maxLength: 5,
    isError: true,
    errorMessage: "Invalid PIN. Please try again.",
    placeholder: "Enter PIN",
    isEnableShuffle: true,
    showKeyboard: true,
    title: "Use this keyboard to enter your PIN",
    clearLabel: "Clear",
  }
};
