# Array Object Validator

A lightweight, TypeScript-compatible utility for checking if a value is a valid array containing only object elements.

## Installation

```bash
npm install @engr-lukman/array-object-validator
# or
yarn add @engr-lukman/array-object-validator
# or
pnpm add @engr-lukman/array-object-validator
```

## Demo

Check out the [interactive Storybook demo](https://engr-lukman.github.io/npm-packages/?path=/story/utilities-array-object-validator--empty-array) to see the component in action.

## Features

- Accurately validates arrays containing only object elements
- Distinguishes arrays from other data types
- Ensures all array items are objects (not null or primitive types)
- Full TypeScript support with type definitions
- Zero dependencies
- ES6 module compatible
- TypeScript type guards for improved type inference
- Built for Node.js 20 LTS or higher and modern browsers

## Usage

### Basic Usage

```typescript
// ES Modules / TypeScript
import isValidArrayOfObject from '@engr-lukman/array-object-validator';

// CommonJS
const isValidArrayOfObject = require('@engr-lukman/array-object-validator').default;

// Examples
isValidArrayOfObject([]);                       // true (empty array is valid)
isValidArrayOfObject([{}, {name: 'John'}]);     // true
isValidArrayOfObject(null);                     // false
isValidArrayOfObject({});                       // false (not an array)
isValidArrayOfObject([1, 2, 3]);               // false (contains non-objects)
isValidArrayOfObject(['string']);               // false (contains non-objects)
isValidArrayOfObject([{}, 'string']);          // false (mixed content)
```

### With TypeScript Type Guards

```typescript
import isValidArrayOfObject from '@engr-lukman/array-object-validator';

function processArrayData(data: unknown): void {
  if (isValidArrayOfObject(data)) {
    // TypeScript knows data is an array of objects here
    console.log('Valid array with', data.length, 'objects');
    
    // Process each object in the array
    data.forEach(item => {
      console.log('Object keys:', Object.keys(item));
    });
  } else {
    console.log('Not a valid array of objects');
  }
}

// Type safety example
const dataFromAPI: unknown = [{ userId: 1, name: 'John' }, { userId: 2, name: 'Jane' }];

if (isValidArrayOfObject(dataFromAPI)) {
  // TypeScript correctly narrows the type
  const firstItem = dataFromAPI[0];
  console.log(Object.keys(firstItem)); // ['userId', 'name']
}
```

## API Reference

### isValidArrayOfObject(data: unknown): boolean

Checks if a value is a valid array containing only object elements.

| Parameter | Type | Description |
|-----------|------|-------------|
| data | unknown | The value to check |

**Returns**: A boolean indicating if the value is a valid array of objects.

## Compatibility

- Node.js 20 LTS or higher
- Modern browsers supporting ES6 modules
- TypeScript 4.0+

## Use Cases

- Validating API responses that should be arrays of objects
- Type-safe handling of unknown data structures
- Defensive programming patterns
- Data validation before processing

## License

MIT © Mohammad Lukman Hussain