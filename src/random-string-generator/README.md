# Random String Generator

A lightweight, TypeScript-compatible utility for generating random strings.

## Installation

```bash
npm install @engr-lukman/random-string-generator
# or
yarn add @engr-lukman/random-string-generator
# or
pnpm add @engr-lukman/random-string-generator
```

## Demo

Check out the [interactive Storybook demo](https://engr-lukman.github.io/npm-packages/?path=/story/utilities-randomstringgenerator--default-random-string) to see the component in action.

## Features

- Generate random alphanumeric strings of any length
- Customize the character set used for generation
- Optional timestamp prefix for ensuring uniqueness
- Full TypeScript support with type definitions
- Zero dependencies
- ES6 module compatible
- Built for Node.js 20 LTS or higher and modern browsers

## Usage

### Basic Usage

```typescript
import { generateRandomString } from '@engr-lukman/random-string-generator';

// Generate a random string with default length (32 characters)
const randomStr = generateRandomString();
console.log(randomStr); // e.g., "8FKP2JH7SQ9RT5VZ3WX1CV6BN4ML0AD"

// Generate a random string with custom length
const shortRandomStr = generateRandomString(8);
console.log(shortRandomStr); // e.g., "7DH9XP3S"

// Generate a unique random string with timestamp prefix
const uniqueStr = generateRandomString(32, { useTimestampPrefix: true });
console.log(uniqueStr); // e.g., "10EFRG2WCV6BN4ML0ADFKP2JH7SQ9RT"
```

### Custom Character Set

```typescript
import { generateRandomStringWithCharset } from '@engr-lukman/random-string-generator';

// Generate a random string using only numbers
const randomNumbers = generateRandomStringWithCharset(6, '0123456789');
console.log(randomNumbers); // e.g., "847295"

// Generate a random hexadecimal string
const hexString = generateRandomStringWithCharset(16, '0123456789ABCDEF');
console.log(hexString); // e.g., "9A7C3F5D8E2B1064"
```

## API Reference

### generateRandomString(length?: number, options?: RandomStringOptions): string

Generates a random string using uppercase alphanumeric characters (A-Z, 0-9).

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| length | number | 32 | The length of the generated string |
| options | RandomStringOptions | {} | Options for string generation |

**RandomStringOptions:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| useTimestampPrefix | boolean | false | If true, adds a timestamp prefix for uniqueness |

**Returns**: A random string of specified length.

### generateRandomStringWithCharset(length?: number, charset?: string): string

Generates a random string using characters from the provided charset.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| length | number | 32 | The length of the generated string |
| charset | string | "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" | The character set to use for generation |

**Returns**: A random string of specified length using the provided character set.

## Compatibility

- Node.js 20 LTS or higher
- Modern browsers supporting ES6 modules

## Security

For cryptographically secure strings, this library uses the Web Crypto API when available, with a fallback to Math.random() when not.

## License

MIT © Mohammad Lukman Hussain