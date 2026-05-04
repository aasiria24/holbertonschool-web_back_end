import Car from './10-car';

export default class EVCar extends Car {
  /**
   * ينشئ كائناً يمثل سيارة كهربائية.
   * @param {String} brand - العلامة التجارية.
   * @param {String} motor - نوع المحرك.
   * @param {String} color - اللون.
   * @param {String} range - مدى البطارية.
   */
  constructor(brand, motor, color, range) {
    // استدعاء مشيد الكلاس الأب (Car)
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * Override للـ Symbol.species
   * نطلب من البرنامج أن يستخدم كلاس Car كـ "أصل" لعمليات الاستنساخ
   * بدلاً من كلاس EVCar الحالي.
   */
  static get [Symbol.species]() {
    return Car;
  }
}
