/**
 * Default configuration for the SecurePin component
 * These values can be overridden by passing props to the component
 */
export interface SecurePinDefaults {
  maxLength: number;
  isError: boolean;
  errorMessage: string;
  placeholder: string;
  isEnableShuffle: boolean;
  showKeyboard: boolean;
  title: string;
  clearLabel: string;
}

export const PROPS: SecurePinDefaults = {
  maxLength: 5,
  isError: false,
  errorMessage: "",
  placeholder: "Enter PIN",
  isEnableShuffle: true,
  showKeyboard: true,
  title: "Use this keyboard to enter your PIN",
  clearLabel: "Clear",
};
