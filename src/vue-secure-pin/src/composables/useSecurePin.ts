import { computed, ref, Ref } from "vue";

/**
 * Props interface for the useSecurePin composable
 */
export interface SecurePinComposableProps {
  maxLength: number;
}

/**
 * Return type for the useSecurePin composable
 */
export interface SecurePinComposableReturn {
  pinMasked: Ref<string>;
  pin: Ref<string>;
  isMaxLengthReached: Ref<boolean>;
  clear: () => void;
  pinHandler: (input: number) => void;
}

/**
 * Manages secure PIN input with masking for privacy
 * 
 * @param props - Component properties containing maxLength
 * @returns Object with PIN state and management functions
 */
export default function useSecurePin(props: SecurePinComposableProps): SecurePinComposableReturn {
  const { maxLength } = props;
  const pinMasked = ref<string>(""); // Masked PIN display (asterisks)
  const pin = ref<string>(""); // Actual PIN value (hidden)

  // Determines if PIN has reached maximum allowed length
  const isMaxLengthReached = computed<boolean>(
    () => pinMasked.value.length >= maxLength
  );

  /**
   * Resets both the actual PIN and masked PIN values to empty strings
   */
  const clear = (): void => {
    pinMasked.value = "";
    pin.value = "";
  };

  /**
   * Processes PIN input digit and updates both masked and actual values
   * Will not accept more input once maxLength is reached
   * 
   * @param input - Number entered from keypad
   */
  const pinHandler = (input: number): void => {
    if (!isMaxLengthReached.value) {
      pinMasked.value = `${pinMasked.value || ""}*`;
      pin.value = `${pin.value || ""}${input}`;
    }
  };

  return {
    pinMasked,
    pin,
    isMaxLengthReached,
    clear,
    pinHandler,
  };
}
