/**
 * Vue Secure Password - A Vue 3 component for secure password input with masked display
 * 
 * This component provides a secure password entry interface with virtual keyboard
 * and masked input for enhanced security in financial applications.
 * 
 * @module @engr-lukman/vue-secure-password
 */

import { App } from 'vue';
import SecurePassword from "./components/SecurePassword.vue";

/**
 * Callback event payload interface
 */
export interface PasswordEventPayload {
  password: string;
  passwordMasked: string;
}

/**
 * Install the SecurePassword component as a Vue plugin
 * 
 * @param app - Vue application instance
 */
function install(app: App): void {
  app.component("SecurePassword", SecurePassword);
}

// Named exports for individual component usage
export { SecurePassword };

// Default export as Vue plugin
export default {
  install,
  SecurePassword
};
