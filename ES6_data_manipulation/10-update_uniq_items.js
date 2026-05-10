/**
 * Updates the quantity of unique items (quantity of 1) to 100 in a map.
 * @param {Map} map - The map of grocery items to update.
 * @returns {Map} The updated map.
 * @throws {Error} If the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  // التحقق مما إذا كان المعامل عبارة عن Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // المرور على جميع عناصر الخريطة وتحديث القيم التي تساوي 1
  map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    }
  });

  return map;
}
