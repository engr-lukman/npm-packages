# Is Object Checker

A lightweight utility for checking if a value is a pure object (not an array and not null).

## Installation

```bash
npm install @engr-lukman/is-object-checker
```

Or with yarn:

```bash
yarn add @engr-lukman/is-object-checker
```

## Usage

```typescript
// ES Modules / TypeScript
import isPureObject from '@engr-lukman/is-object-checker';

// CommonJS
const isPureObject = require('@engr-lukman/is-object-checker').default;

// Examples
isPureObject({});                  // true
isPureObject({ name: 'John' });    // true
isPureObject(null);                // false
isPureObject([]);                  // false
isPureObject(123);                 // false
isPureObject('string');            // false
isPureObject(new Date());          // true (Date is an object)
isPureObject(() => {});            // false (functions are not pure objects)
```

## TypeScript Support

This package includes TypeScript typings:

```typescript
import isPureObject from '@engr-lukman/is-object-checker';

function processValue(value: unknown): void {
  if (isPureObject(value)) {
    // TypeScript knows value is an object here
    console.log('This is an object with keys:', Object.keys(value));
  } else {
    console.log('Not a pure object');
  }
}
```

## API Reference

### isPureObject(value: unknown): boolean

Returns `true` if the provided value is a pure object (not an array and not null), otherwise returns `false`.

## License

MIT

## Author

Mohammad Lukman Hussain