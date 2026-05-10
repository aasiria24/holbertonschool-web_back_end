/**
 * Returns a string of set values that start with a specific string,
 * appending only the rest of the string separated by hyphens.
 * @param {Set} set - The set of strings to process.
 * @param {String} startString - The prefix to look for.
 * @returns {String} The cleaned and formatted string.
 */
export default function cleanSet(set, startString) {
  // التحقق من أن startString نص وليس فارغاً، وأن set هي فعلاً Set
  if (!startString || typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }

  const parts = [];

  for (const value of set) {
    // التحقق مما إذا كانت القيمة نصاً وتبدأ بالبادئة المطلوبة
    if (typeof value === 'string' && value.startsWith(startString)) {
      // استخراج ما بعد البادئة وإضافته للمصفوفة
      parts.push(value.slice(startString.length));
    }
  }

  // ربط الأجزاء بواصلة "-"
  return parts.join('-');
}
