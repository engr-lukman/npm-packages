/**
 * Default configuration for the SecurePassword component
 * These values can be overridden by passing props to the component
 */
export const PROPS = {
  maxLength: 100,
  isError: false,
  errorMessage: "",
  placeholder: "Enter Password",
  isEnableShuffle: false,
  showKeyboard: true,
  title: "Use this keyboard to enter your password",
  shiftLabel: "Aa",
  clearLabel: "Clear",
} as const;

export type SecurePasswordProps = typeof PROPS;
