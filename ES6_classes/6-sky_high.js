import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
   * ينشئ مبنى شاهق الارتفاع.
   * @param {Number} sqft - المساحة (تورث للأب).
   * @param {Number} floors - عدد الطوابق.
   */
  constructor(sqft, floors) {
    // استدعاء مشيد الكلاس الأب (Building) لإرسال المساحة له
    super(sqft);
    this._floors = floors;
  }

  // Getter للمساحة (sqft) - موروث أصلاً ولكن يمكن استخدامه
  get sqft() {
    return this._sqft;
  }

  // Getter لعدد الطوابق (floors)
  get floors() {
    return this._floors;
  }

  /**
   * تطبيق الدالة المطلوبة من الكلاس الأب (Override)
   * @returns {String} رسالة الإخلاء
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
