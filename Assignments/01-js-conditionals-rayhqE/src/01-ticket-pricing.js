/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  if (age < 0 || isNaN(age)) {
    return -1;
  }
  let children = age >= 0 && age <= 12;
  let Teens = age >= 13 && age <= 17;
  let adult = age >= 18 && age <= 59;
  let senior = age >= 60;

  if (children && !isWeekend) {
    return 8;
  } else if (Teens && !isWeekend) {
    return 12;
  } else if (adult && !isWeekend) {
    return 15;
  } else if (senior && !isWeekend) {
    return 10;
  } else if (children && isWeekend) {
    return 11;
  } else if (Teens && isWeekend) {
    return 15;
  } else if (adult && isWeekend) {
    return 18;
  } else if (senior && isWeekend) {
    return 13;
  }
}
getTicketPrice(22, true);
