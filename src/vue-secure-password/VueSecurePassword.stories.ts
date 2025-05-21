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

/**
 * Default example
 */
export const Default: Story = {
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

/**
 * With error
 */
export const WithError: Story = {
  args: {
    maxLength: 100,
    isError: true,
    errorMessage: "Invalid password. Please try again.",
    placeholder: "Enter Password",
    isEnableShuffle: false,
    showKeyboard: true,
    title: "Use this keyboard to enter your password",
    shiftLabel: "Aa",
    clearLabel: "Clear",
  }
};

/**
 * With shuffled keypad
 */
export const WithShuffledKeypad: Story = {
  args: {
    maxLength: 100,
    isError: false,
    errorMessage: "",
    placeholder: "Enter Password",
    isEnableShuffle: true,
    showKeyboard: true,
    title: "Use this keyboard to enter your password",
    shiftLabel: "Aa",
    clearLabel: "Clear",
  }
};
