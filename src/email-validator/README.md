# Email Validator

A lightweight, TypeScript-compatible utility for validating email addresses.

## Installation

```bash
npm install @engr-lukman/email-validator
# or
yarn add @engr-lukman/email-validator
# or
pnpm add @engr-lukman/email-validator
```

## Demo

Check out the [interactive Storybook demo](https://engr-lukman.github.io/npm-packages/?path=/story/utilities-email-validator--basic) to see the component in action.

## Features

- Validates email addresses with a robust regex pattern
- Checks for proper email format with username, @ symbol, and domain
- Full TypeScript support with type definitions
- Zero dependencies
- ES6 module compatible
- Built for Node.js 20 LTS or higher and modern browsers

## Usage

### Basic Usage

```typescript
// ES Modules / TypeScript
import isValidEmail from '@engr-lukman/email-validator';

// CommonJS
const isValidEmail = require('@engr-lukman/email-validator').default;

// Examples
isValidEmail('user@example.com');           // true
isValidEmail('user.name@example.co.uk');    // true
isValidEmail('user@domain');                // false
isValidEmail('user@.com');                  // false
isValidEmail('@domain.com');                // false
isValidEmail('');                           // false
```

### With Form Validation

```typescript
import isValidEmail from '@engr-lukman/email-validator';

function validateForm(formData) {
  const errors = {};
  
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// Example usage
const result = validateForm({ email: 'invalid-email' });
console.log(result.errors.email); // "Please enter a valid email address"
```

## API Reference

### isValidEmail(email: string = ""): boolean

Validates if a string is a properly formatted email address.

| Parameter | Type | Description |
|-----------|------|-------------|
| email | string | The email address to validate (defaults to empty string) |

**Returns**: A boolean indicating if the email is valid.

## Compatibility

- Node.js 20 LTS or higher
- Modern browsers supporting ES6 modules
- TypeScript 4.0+

## Use Cases

- Form validation for user registration or contact forms
- Data validation before API submissions
- Email verification in user input fields
- Backend validation of email addresses

## License

MIT © Mohammad Lukman Hussain