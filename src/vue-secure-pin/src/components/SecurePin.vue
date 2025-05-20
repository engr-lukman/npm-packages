<template>
  <div class="pin">
    <div
      class="pin__field"
      :class="{ 'pin__field--error': isError }"
    >
      <div
        class="pin__display"
        :data-placeholder="placeholder"
        :class="{ 'pin__display--empty': !pinMasked }"
      >
        <div class="pin__masked-value">
          {{ pinMasked }}
        </div>
      </div>

      <div class="pin__actions">
        <div
          class="pin__toggle"
          @click="toggleKeyboard"
        >
          <span class="pin__icon">⌨️</span>
        </div>
      </div>

      <div
        v-if="isError"
        class="pin__error"
        role="alert"
      >
        {{ errorMessage }}
      </div>
    </div>

    <div
      v-if="showKeyboard"
      ref="keyboardPopup"
      class="pin__keyboard"
    >
      <numeric-keyboard
        :is-enable-shuffle="isEnableShuffle"
        :is-max-length-reached="isMaxLengthReached"
        :title="title"
        :clear-label="clearLabel"
        @input="keyboardHandler"
        @clear="clearHandler"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, defineExpose } from "vue";
import useSecurePin from "../composables/useSecurePin";
import { PROPS } from "../utils/constants";
import NumericKeyboard from "./NumericKeyboard.vue";

/**
 * Component props definition
 */
interface SecurePinProps {
  maxLength?: number;
  isError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  isEnableShuffle?: boolean;
  showKeyboard?: boolean;
  title?: string;
  clearLabel?: string;
}

/**
 * Import the event payload interface from the main module
 */
import type { PinEventPayload } from "../index";

const props = withDefaults(defineProps<SecurePinProps>(), {
  maxLength: PROPS.maxLength,
  isError: PROPS.isError,
  errorMessage: PROPS.errorMessage,
  placeholder: PROPS.placeholder,
  isEnableShuffle: PROPS.isEnableShuffle,
  showKeyboard: PROPS.showKeyboard,
  title: PROPS.title,
  clearLabel: PROPS.clearLabel,
});

const emit = defineEmits<{
  (e: 'callbackEvent', payload: PinEventPayload): void;
}>();

// Component state management
const showKeyboard = ref<boolean>(props.showKeyboard);
const keyboardPopup = ref<HTMLElement | null>(null);

// Initialize PIN handling logic
const { pinMasked, pin, isMaxLengthReached, clear, pinHandler } =
  useSecurePin({ maxLength: props.maxLength });

/**
 * Toggles the keyboard visibility
 * Shows/hides the virtual keyboard when the toggle is clicked
 */
const toggleKeyboard = (): void => {
  showKeyboard.value = !showKeyboard.value;
};

/**
 * Handles PIN clearing and emits empty values
 * Resets both masked and actual PIN values
 */
const clearHandler = (): void => {
  clear();
  emit("callbackEvent", { pin: "", pinMasked: "" });
};

/**
 * Processes keyboard input and emits updated PIN values
 * 
 * @param value - Numeric value from the keypad
 */
const keyboardHandler = (value: number): void => {
  pinHandler(value);
  emit("callbackEvent", {
    pin: pin.value,
    pinMasked: pinMasked.value,
  });
};

/**
 * Closes keyboard when clicking outside the component
 * Improves user experience and security by hiding keyboard when not in focus
 * 
 * @param event - Mouse click event
 */
const handleClickOutside = (event: MouseEvent): void => {
  if (
    keyboardPopup.value &&
    !keyboardPopup.value.contains(event.target as Node) &&
    !(event.target as Element).closest(".pin__toggle")
  ) {
    showKeyboard.value = false;
  }
};

// Expose component methods for external use
defineExpose({
  clearHandler,
  toggleKeyboard
});

// Setup event listeners for outside clicks
onMounted((): void => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted((): void => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
@keyframes scale-in {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.pin {
  position: relative;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

/* Input field with border */
.pin__field {
  display: flex;
  position: relative;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  height: 40px;
}

.pin__field--error {
  border-color: #e2136e;
}

/* PIN value display area */
.pin__display {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 12px;
  outline: none;
  background: transparent;
  font-size: 16px;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Placeholder text for empty PIN field */
.pin__display--empty::before {
  content: attr(data-placeholder);
  color: #757575;
  font-size: 14px;
}

.pin__actions {
  display: flex;
  align-items: center;
  padding-right: 8px;
}

/* Keyboard toggle button */
.pin__toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  height: 100%;
  user-select: none;
}

.pin__toggle:focus {
  outline: 2px solid #4c9aff;
  outline-offset: -2px;
  border-radius: 2px;
}

.pin__icon {
  font-size: 20px;
}

/* Error message display */
.pin__error {
  color: #e2136e;
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  left: 0;
}

/* Popup numeric keyboard container */
.pin__keyboard {
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 9999;
  animation: scale-in 0.2s ease-out;
}

.pin__masked-value {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 5px;
}
</style>
