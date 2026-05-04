export default class Car {
  /**
   * ينشئ كائناً يمثل سيارة.
   * @param {String} brand - العلامة التجارية.
   * @param {String} motor - نوع المحرك.
   * @param {String} color - اللون.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Symbol.species يسمح لنا بتحديد المشيد الافتراضي للكلاس.
   * نستخدمه هنا لضمان أن cloneCar تعيد كائناً من نفس النوع الحالي.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * تقوم بإنشاء نسخة جديدة من الكائن الحالي.
   * @returns {Object} نسخة جديدة من نفس نوع الكلاس.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
