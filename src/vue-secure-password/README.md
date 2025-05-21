# Vue.js Secure Password Component

A secure password input component for Vue.js applications with a virtual keyboard and password masking, specifically designed for financial applications.

## Features

- **Secure Password Entry**: Automatically masks password input for privacy
- **Virtual Keyboard**: Prevents keylogging and enhances security
- **Shuffle Option**: Randomizes keypad numbers for added security
- **Customizable**: Easy to style and adapt to your application's design
- **Simple API**: Straightforward props and events
- **TypeScript Support**: Full TypeScript definitions included

## Requirements

- Vue.js 3.0 or higher
- Node.js 20.0 or higher

## Installation

```bash
# Using npm
npm install @engr-lukman/vue-secure-password

# Using yarn
yarn add @engr-lukman/vue-secure-password

# Using pnpm
pnpm add @engr-lukman/vue-secure-password
```

## Usage

### Register as a Plugin (Global)

```typescript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import SecurePassword from "@engr-lukman/vue-secure-password";

const app = createApp(App);
app.use(SecurePassword);
app.mount("#app");
```

### Import Component Individually

```typescript
// In your Vue component
import { SecurePassword } from "@engr-lukman/vue-secure-password";
```

### Basic Example

```vue
<template>
  <div class="form-group">
    <label>Password</label>
    <secure-password
      :max-length="100"
      :is-error="hasError"
      :error-message="errorMessage"
      placeholder="Enter your password"
      :is-enable-shuffle="true"
      :show-keyboard="true"
      title="Use this keyboard to enter your password"
      shift-label="Aa"
      clear-label="Clear"
      @callback-event="onPasswordHandler"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SecurePassword, type PasswordEventPayload } from "@engr-lukman/vue-secure-password";

// Track form state
const password = ref("");
const passwordMasked = ref("");
const hasError = ref(false);
const errorMessage = ref("");

// Handle password changes from the component
const onPasswordHandler = (payload: PasswordEventPayload) => {
  password.value = payload.password; // Actual password (sensitive)
  passwordMasked.value = payload.passwordMasked; // Masked value ("*****")
  
  // Validate password
  if (payload.password.length < 8 && payload.password.length > 0) {
    hasError.value = true;
    errorMessage.value = "Password must be at least 8 characters";
  } else {
    hasError.value = false;
    errorMessage.value = "";
  }
};
</script>
```

## Component Preview

The SecurePassword component provides a secure way to enter passwords using a virtual keyboard:

- **Password Field**: Shows masked input with customizable placeholder
- **Virtual Keyboard**: Split into Alpha Numeric and Special Characters sections
- **Case Toggle**: "Aa" button toggles between uppercase and lowercase letters
- **Clear Function**: Allows users to reset their input

![Component Interface](https://raw.githubusercontent.com/engr-lukman/npm-packages/main/src/vue-secure-password/secure-password-component.png)

## Component Architecture

The Secure Password component consists of:

1. **SecurePassword**: Main component that provides the input field and keyboard functionality
2. **VirtualKeyboard**: Virtual keyboard with shuffle capability for enhanced security
3. **useSecurePassword**: Composable function that manages password state and masking

## Props

| Prop            | Type    | Default                                    | Description                                      |
| --------------- | ------- | ------------------------------------------ | ------------------------------------------------ |
| maxLength       | Number  | 100                                        | Maximum password length                          |
| isError         | Boolean | false                                      | Shows error styling when true                    |
| errorMessage    | String  | ""                                         | Error message to display                         |
| placeholder     | String  | "Enter Password"                           | Placeholder text when empty                      |
| isEnableShuffle | Boolean | false                                      | Randomize keypad numbers for additional security |
| showKeyboard    | Boolean | true                                       | Show keyboard when component loads               |
| title           | String  | "Use this keyboard to enter your password" | Title above virtual keyboard                     |
| shiftLabel      | String  | "Aa"                                       | Label for the shift button                       |
| clearLabel      | String  | "Clear"                                    | Label for the clear button                       |

## Events

| Event         | Payload                                      | Description                                   |
| ------------- | -------------------------------------------- | --------------------------------------------- |
| callbackEvent | { password: String, passwordMasked: String } | Emitted when password value changes or clears |

## Security Features

1. **Password Masking**: Password is automatically masked with asterisks to protect sensitive information
2. **Virtual Keyboard**: Prevents keylogging attacks by using an on-screen keyboard
3. **Keyboard Shuffling**: Option to randomize numbers on the keypad for enhanced security
4. **No DOM Storage**: Password values are kept in memory and not stored in the DOM

## Customization

The component uses BEM-based CSS classes which you can target for styling. Below are the key CSS selectors you can customize:

### Key CSS Classes for Customization

#### SecurePassword Component

- `.password__field` - The main input field container
- `.password__field--error` - Error state styling
- `.password__error` - Error message text
- `.password__display` - Password display area

#### VirtualKeyboard Component

- `.keyboard` - Main keyboard container
- `.keyboard__button` - Individual keyboard keys
- `.keyboard__button--clear` - Clear button

### Using Scoped Styles in Vue Component

When using the component in Vue files with scoped styles, remember to use the `:deep()` selector (Vue 3) to target the component's internal elements.

## License

MIT © [Mohammad Lukman Hussain](https://github.com/engr-lukman)
