/**
 * Type definitions for @engr-lukman/vue-secure-pin
 */

import { DefineComponent } from 'vue';

export interface SecurePinProps {
  /**
   * Maximum PIN length
   * @default 5
   */
  maxLength?: number;
  
  /**
   * Shows error styling when true
   * @default false
   */
  isError?: boolean;
  
  /**
   * Error message to display
   */
  errorMessage?: string;
  
  /**
   * Placeholder text when empty
   * @default "Enter PIN"
   */
  placeholder?: string;
  
  /**
   * Randomize keypad numbers
   * @default true
   */
  isEnableShuffle?: boolean;
  
  /**
   * Show keyboard when component loads
   * @default true
   */
  showKeyboard?: boolean;
  
  /**
   * Title for the component
   * @default "Use this keyboard to enter your PIN"
   */
  title?: string;
  
  /**
   * Label for the clear button
   * @default "Clear"
   */
  clearLabel?: string;
}

export interface SecurePinEvents {
  /**
   * Emitted when the PIN value changes or is cleared
   * Returns both the actual PIN and masked PIN values
   */
  'callbackEvent': (payload: PinEventPayload) => void;
}

/**
 * PIN event payload with both actual and masked values
 */
export interface PinEventPayload {
  /**
   * The actual PIN value (sensitive)
   */
  pin: string;
  
  /**
   * The masked PIN value (shown to user)
   */
  pinMasked: string;
}

/**
 * Methods exposed by the SecurePin component
 */
export interface SecurePinExpose {
  /**
   * Clear the PIN value
   */
  clearHandler: () => void;
  
  /**
   * Toggle keyboard visibility
   */
  toggleKeyboard: () => void;
}

export const SecurePin: DefineComponent<SecurePinProps>;

/**
 * Vue plugin installation function
 */
declare function install(app: any): void;

declare const _default: {
  install: typeof install;
  SecurePin: DefineComponent<SecurePinProps>;
};

export default _default;
