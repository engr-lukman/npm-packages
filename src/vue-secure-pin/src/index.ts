/**
 * Vue Secure PIN - A Vue 3 component for secure PIN input with masked display
 * 
 * This component provides a secure PIN entry interface with virtual keyboard
 * and masked input for enhanced security in financial applications.
 * 
 * @module @engr-lukman/vue-secure-pin
 */

import { App } from 'vue';
import SecurePin from "./components/SecurePin.vue";

/**
 * Callback event payload interface
 */
export interface PinEventPayload {
  pin: string;
  pinMasked: string;
}

/**
 * Install the SecurePin component as a Vue plugin
 * 
 * @param app - Vue application instance
 */
function install(app: App): void {
  app.component("SecurePin", SecurePin);
}

// Named exports for individual component usage
export { SecurePin };

// Default export as Vue plugin
export default {
  install,
  SecurePin
};
