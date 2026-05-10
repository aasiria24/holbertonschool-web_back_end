/**
 * A WeakMap to track the number of calls for each endpoint object.
 */
export const weakMap = new WeakMap();

/**
 * Tracks the number of queries made to a specific endpoint.
 * @param {Object} endpoint - The endpoint object { protocol, name }.
 * @throws {Error} If the number of queries for an endpoint is >= 5.
 */
export function queryAPI(endpoint) {
  // الحصول على القيمة الحالية من الـ WeakMap، أو 0 إذا لم تكن موجودة
  let count = weakMap.get(endpoint) || 0;

  // زيادة العداد
  count += 1;

  // تحديث الـ WeakMap بالقيمة الجديدة
  weakMap.set(endpoint, count);

  // التحقق من سعة التحميل
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
