import { SecurePin } from "./src/index";

/**
 * SecurePin - A secure PIN input component with virtual keyboard 
 * designed for financial applications
 */
export default {
  title: "Components/Secure Pin (Vue.js)",
  component: SecurePin,
  argTypes: {
    callbackEvent: { 
      action: 'callbackEvent',
      description: 'Emitted when PIN value changes or clears' 
    }
  }
};

// Template for all stories
const Template = (args) => ({
  components: { SecurePin },
  setup() {
    const onPinHandler = (event) => {
      args.callbackEvent(event);
    };
    return { args, onPinHandler };
  },
  template: `
    <div style="max-width: 500px; margin: 2rem;">
      <SecurePin
        :maxLength="args.maxLength"
        :isError="args.isError"
        :errorMessage="args.errorMessage"
        :placeholder="args.placeholder"
        :isEnableShuffle="args.isEnableShuffle"
        :showKeyboard="args.showKeyboard"
        :title="args.title"
        :clearLabel="args.clearLabel"
        @callbackEvent="onPinHandler"
      />
    </div>
  `,
});

/**
 * Default example
 */
export const Default = {
  render: Template,
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