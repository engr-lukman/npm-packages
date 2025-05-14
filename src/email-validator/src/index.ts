/**
 * Validates if a string is a properly formatted email address
 * 
 * The validation checks:
 * 1. Username part (local part) with optional dots or hyphens
 * 2. @ symbol
 * 3. Domain name with optional dots or hyphens
 * 4. Domain extension (2-3 characters)
 * 
 * @param email - The email string to validate (defaults to empty string)
 * @returns boolean - Returns true if email is valid, false otherwise
 * 
 * @example
 * isValidEmail("user@example.com")    // true
 * isValidEmail("user.name@domain.co") // true
 * isValidEmail("user@domain")         // false
 * isValidEmail("user@.com")           // false
 * isValidEmail("@domain.com")         // false
 * isValidEmail("")                    // false
 */
export const isValidEmail = (email = ""): boolean => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

export default isValidEmail;