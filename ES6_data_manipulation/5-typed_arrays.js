/**
 * Creates an Int8 typed array inside an ArrayBuffer.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The position to insert the value.
 * @param {Number} value - The Int8 value to insert.
 * @returns {DataView} A DataView of the created buffer.
 * @throws {Error} If the position is outside the range of the buffer.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  // تعيين القيمة كـ Int8 في الموقع المحدد
  view.setInt8(position, value);

  return view;
}
