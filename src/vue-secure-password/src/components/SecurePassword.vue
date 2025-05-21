<template>
  <div class="password">
    <div
      class="password__field"
      :class="{ 'password__field--error': isError }"
    >
      <div
        class="password__display"
        :data-placeholder="placeholder"
        :class="{ 'password__display--empty': !passwordMasked }"
      >
        <div class="password__masked-value">
          {{ passwordMasked }}
        </div>
      </div>

      <div class="password__actions">
        <div
          class="password__toggle"
          @click="toggleKeyboard"
        >
          <span class="password__icon">⌨️</span>
        </div>
      </div>

      <div
        v-if="isError"
        class="password__error"
        role="alert"
      >
        {{ errorMessage }}
      </div>
    </div>

    <div
      v-if="showKeyboard"
      ref="keyboardPopup"
      class="password__keyboard"
    >
      <virtual-keyboard
        :is-enable-shuffle="isEnableShuffle"
        :is-max-length-reached="isMaxLengthReached"
        :title="title"
        :shift-label="shiftLabel"
        :clear-label="clearLabel"
        @input="keyboardHandler"
        @clear="clearHandler"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import useSecurePassword from "../composables/useSecurePassword";
import { PROPS } from "../utils/constants";
import VirtualKeyboard from "./VirtualKeyboard.vue";
import type { PasswordEventPayload } from "../index";

interface Props {
  maxLength?: number;
  isError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  isEnableShuffle?: boolean;
  showKeyboard?: boolean;
  title?: string;
  shiftLabel?: string;
  clearLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  maxLength: PROPS.maxLength,
  isError: PROPS.isError,
  errorMessage: PROPS.errorMessage,
  placeholder: PROPS.placeholder,
  isEnableShuffle: PROPS.isEnableShuffle,
  showKeyboard: PROPS.showKeyboard,
  title: PROPS.title,
  shiftLabel: PROPS.shiftLabel,
  clearLabel: PROPS.clearLabel,
});

const emit = defineEmits<{
  (e: 'callbackEvent', payload: PasswordEventPayload): void
}>();

// Component state management - keyboard show by default unless explicitly disabled
const showKeyboard = ref(props.showKeyboard);
const keyboardPopup = ref(null);

// Initialize password handling logic with computed values
const { passwordMasked, password, isMaxLengthReached, clear, passwordHandler } =
  useSecurePassword(props);

/**
 * Toggles the keyboard visibility
 */
const toggleKeyboard = () => {
  showKeyboard.value = !showKeyboard.value;
};

/**
 * Handles password clearing and emits empty values
 */
const clearHandler = () => {
  clear();
  emit("callbackEvent", { password: "", passwordMasked: "" });
};

/**
 * Processes keyboard input and emits updated password values
 */
const keyboardHandler = (value) => {
  passwordHandler(value);
  emit("callbackEvent", {
    password: password.value,
    passwordMasked: passwordMasked.value,
  });
};

/**
 * Closes keyboard when clicking outside component
 */
const handleClickOutside = (event) => {
  if (
    keyboardPopup.value &&
    !keyboardPopup.value.contains(event.target) &&
    !event.target.closest(".password__toggle")
  ) {
    showKeyboard.value = false;
  }
};

// Setup event listeners for outside clicks
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
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

.password {
  position: relative;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

/* Input field with border */
.password__field {
  display: flex;
  position: relative;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  height: 40px;
}

.password__field--error {
  border-color: #e2136e;
}

/* Password value display area */
.password__display {
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

/* Placeholder text for empty password field */
.password__display--empty::before {
  content: attr(data-placeholder);
  color: #757575;
  font-size: 14px;
}

.password__actions {
  display: flex;
  align-items: center;
  padding-right: 8px;
}

/* Keyboard toggle button */
.password__toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  height: 100%;
  user-select: none;
}

.password__toggle:focus {
  outline: 2px solid #4c9aff;
  outline-offset: -2px;
  border-radius: 2px;
}

.password__icon {
  font-size: 20px;
}

/* Error message display */
.password__error {
  color: #e2136e;
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  left: 0;
}

/* Popup password keyboard container */
.password__keyboard {
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

.password__masked-value {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 5px;
}
</style>
