export default class HolbertonClass {
  /**
   * ينشئ كائناً يمثل فصلاً دراسياً في هولبرتون.
   * @param {Number} size - حجم الفصل.
   * @param {String} location - موقع الفصل.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * تخصيص سلوك التحويل الأنواع الأولية (Primitive casting).
   * @param {String} hint - نوع البيانات المطلوب التحويل إليه (number أو string).
   * @returns {Number|String|this} القيمة المناسبة بناءً على النوع المطلوب.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
