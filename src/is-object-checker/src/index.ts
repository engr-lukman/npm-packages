/**
 * Checks if the value is a pure object (not an array and not null)
 * 
 * A pure object is defined as:
 * 1. Has type "object"
 * 2. Is not null (which has type "object" in JavaScript)
 * 3. Is not an Array (which also has type "object")
 * 
 * This function is useful for distinguishing plain objects from other JavaScript values.
 * 
 * @param value - The value to check
 * @returns boolean - Returns true if the value is a plain object, false otherwise
 * 
 * @example
 * isPureObject({})                // true
 * isPureObject({ key: 'value' })  // true
 * isPureObject(null)              // false
 * isPureObject([])                // false
 * isPureObject(new Date())        // true (Date is an object)
 */
export const isPureObject = (value: unknown): boolean => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

export default isPureObject;