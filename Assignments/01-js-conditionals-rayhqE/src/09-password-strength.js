/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if (typeof password !== "string" || password.length === 0) {
    return "weak";
  }

  let criteria1 = password.length >= 8;
  let criteria2 = /[A-Z]/.test(password);
  let criteria3 = /[a-z]/.test(password);
  let criteria4 = /[0-9]/.test(password);
  let criteria5 = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?`]/.test(password);

  let count = 0;

  if (criteria1) count++;

  if (criteria2) count++;

  if (criteria3) count++;

  if (criteria4) count++;

  if (criteria5) count++;

  if (count >= 0 && count <= 1) {
    return "weak";
  } else if (count <= 3) {
    return "medium";
  } else if (count === 4) {
    return "strong";
  } else if (count) {
    return "very strong";
  }
}
