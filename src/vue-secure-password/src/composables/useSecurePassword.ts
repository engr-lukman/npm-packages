import { computed, ref, Ref } from "vue";

interface SecurePasswordProps {
  maxLength: number;
}

/**
 * Manages secure password input with masking for privacy
 * 
 * This composable provides state management for the secure password
 * component, handling both the actual password value and its masked
 * display representation.
 */
export default function useSecurePassword(props: SecurePasswordProps) {
  const { maxLength } = props;
  
  // Masked password display (asterisks)
  const passwordMasked: Ref<string> = ref("");
  
  // Actual password value 
  const password: Ref<string> = ref("");

  /**
   * Check if password has reached maximum length
   */
  const isMaxLengthReached = computed(
    () => passwordMasked.value.length >= maxLength
  );

  /**
   * Reset password values to empty
   */
  const clear = (): void => {
    passwordMasked.value = "";
    password.value = "";
  };

  /**
   * Process password input and update both masked and actual values
   * Will not accept more input once maxLength is reached
   * 
   * @param input - The character to append to the password
   */
  const passwordHandler = (input: string): void => {
    if (!isMaxLengthReached.value) {
      passwordMasked.value = `${passwordMasked.value || ""}*`;
      password.value = `${password.value || ""}${input}`;
    }
  };

  return {
    passwordMasked,
    password,
    isMaxLengthReached,
    clear,
    passwordHandler,
  };
}
