/**
 * Checks if the value is a valid array of objects
 * 
 * A valid array is defined as:
 * 1. Not null
 * 2. Is an Array
 * 3. Every item in the array is an object
 * 
 * This function is useful for validating arrays containing only object items.
 * 
 * @param data - The value to check
 * @returns boolean - Returns true if the value is a valid array of objects, false otherwise
 * 
 * @example
 * isValidArrayOfObject([])                       // true (empty array is valid)
 * isValidArrayOfObject([{}, {name: 'John'}])     // true
 * isValidArrayOfObject(null)                     // false
 * isValidArrayOfObject('string')                 // false
 * isValidArrayOfObject([1, 2, 3])               // false (contains non-objects)
 * isValidArrayOfObject([{}, 'string'])          // false (mixed content)
 */
export const isValidArrayOfObject = (data: unknown): boolean => {
  return data !== null && Array.isArray(data) &&
    data.every(item =>
      typeof item === 'object' && item !== null
    );
};

export default isValidArrayOfObject;