/**
 * Default character set for string generation (uppercase letters and numbers only)
 */
const DEFAULT_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/**
 * Options for random string generation
 */
export interface RandomStringOptions {
  /**
   * Whether to use timestamp prefix to ensure uniqueness
   * @default false
   */
  useTimestampPrefix?: boolean;
}

/**
 * Generates a random string of specified length
 * @param length - The length of the random string (default: 32)
 * @param options - Options for string generation
 * @returns A random string consisting of uppercase letters and numbers
 */
export const generateRandomString = (
  length: number = 32,
  options: RandomStringOptions = {}
): string => {
  // For uniqueness, add timestamp if requested
  const prefix = options.useTimestampPrefix ? Date.now().toString(36) : '';
  
  const actualLength = options.useTimestampPrefix 
    ? Math.max(1, length - prefix.length) 
    : length;
    
  const randomPart = generateRandomStringWithCharset(actualLength, DEFAULT_CHARSET);
  
  return (prefix + randomPart).slice(0, length);
};

/**
 * Generates a random string with customizable character set
 * @param length - The length of the random string
 * @param charset - Custom character set to use (default: uppercase letters and numbers)
 * @returns A random string consisting of characters from the provided charset
 */
export const generateRandomStringWithCharset = (
  length: number = 32,
  charset: string = DEFAULT_CHARSET
): string => {
  if (length < 1) {
    throw new Error('Length must be at least 1');
  }
  
  if (charset.length === 0) {
    throw new Error('Character set cannot be empty');
  }

  let result = '';
  const charactersLength = charset.length;

  // Use Crypto API if available for better randomness
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const randomValues = new Uint32Array(length);
    crypto.getRandomValues(randomValues);
    
    for (let i = 0; i < length; i++) {
      result += charset.charAt(randomValues[i] % charactersLength);
    }
  } else {
    // Fallback to Math.random()
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charactersLength));
    }
  }

  return result;
};