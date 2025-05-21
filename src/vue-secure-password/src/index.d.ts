/**
 * Type definitions for @engr-lukman/vue-secure-password
 */
import { App, DefineComponent } from 'vue';

export interface PasswordEventPayload {
  password: string;
  passwordMasked: string;
}

export const SecurePassword: DefineComponent;

export interface SecurePasswordPlugin {
  install: (app: App) => void;
  SecurePassword: typeof SecurePassword;
}

declare const _default: SecurePasswordPlugin;
export default _default;
