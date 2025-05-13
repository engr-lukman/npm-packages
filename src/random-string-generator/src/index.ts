/**
 * @file Random String Generator
 * @description A lightweight utility for generating random strings with customizable options
 * @author Mohammad Lukman Hussain
 * @version 1.0.0
 */

/**
 * Default character set for string generation (uppercase letters and numbers only)
 * This provides a good balance of readability and randomness
 */
const DEFAULT_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/**
 * Options for random string generation
 * @interface RandomStringOptions
 */
export interface RandomStringOptions {
  /**
   * Whether to use timestamp prefix to ensure uniqueness
   * When true, the generated string will start with a timestamp in base36
   * which helps ensure uniqueness across multiple generations
   * @default false
   */
  useTimestampPrefix?: boolean;
}

/**
 * Generates a random string of specified length
 * 
 * This is the primary function for most use cases, providing a simple
 * way to generate random strings with default character set and optional
 * timestamp prefix for guaranteed uniqueness.
 * 
 * @param length - The length of the random string (default: 32)
 * @param options - Options for string generation
 * @returns A random string consisting of uppercase letters and numbers
 * 
 * @example
 * // Generate a default random string (32 characters)
 * const randomStr = generateRandomString();
 * 
 * @example
 * // Generate a shorter random string
 * const shortStr = generateRandomString(8);
 * 
 * @example
 * // Generate a unique string with timestamp prefix
 * const uniqueStr = generateRandomString(32, { useTimestampPrefix: true });
 */
export const generateRandomString = (
  length: number = 32,
  options: RandomStringOptions = {}
): string => {
  // For uniqueness, add timestamp if requested
  const prefix = options.useTimestampPrefix ? Date.now().toString(36) : '';
  
  // Calculate the actual length needed for the random part
  const actualLength = options.useTimestampPrefix 
    ? Math.max(1, length - prefix.length) 
    : length;
    
  // Generate the random part using the default character set
  const randomPart = generateRandomStringWithCharset(actualLength, DEFAULT_CHARSET);
  
  // Combine prefix and random part, ensuring the total length matches the requested length
  return (prefix + randomPart).slice(0, length);
};

/**
 * Generates a random string with customizable character set
 * 
 * This function allows complete control over the characters used in the
 * generated string. Useful for creating strings with specific requirements
 * like hexadecimal values, numeric-only strings, or custom alphabets.
 * 
 * @param length - The length of the random string
 * @param charset - Custom character set to use (default: uppercase letters and numbers)
 * @returns A random string consisting of characters from the provided charset
 * 
 * @example
 * // Generate a random hexadecimal string
 * const hexString = generateRandomStringWithCharset(16, '0123456789ABCDEF');
 * 
 * @example
 * // Generate a numeric-only string
 * const numericString = generateRandomStringWithCharset(6, '0123456789');
 * 
 * @throws Will throw an error if length is less than 1
 * @throws Will throw an error if charset is empty
 */
export const generateRandomStringWithCharset = (
  length: number = 32,
  charset: string = DEFAULT_CHARSET
): string => {
  // Validate input parameters
  if (length < 1) {
    throw new Error('Length must be at least 1');
  }
  
  if (charset.length === 0) {
    throw new Error('Character set cannot be empty');
  }

  let result = '';
  const charactersLength = charset.length;

  // Use Crypto API if available for better randomness (more secure)
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    // Create a typed array to store random values
    const randomValues = new Uint32Array(length);
    // Fill the array with cryptographically secure random values
    crypto.getRandomValues(randomValues);
    
    // Convert random values to characters from the charset
    for (let i = 0; i < length; i++) {
      result += charset.charAt(randomValues[i] % charactersLength);
    }
  } else {
    // Fallback to Math.random() when Crypto API is not available
    // Note: This is less secure but provides backward compatibility
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charactersLength));
    }
  }

  return result;
};