export default class Airport {
  /**
   * ينشئ كائناً يمثل مطاراً.
   * @param {String} name - اسم المطار.
   * @param {String} code - رمز المطار (مثل SFO).
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * تخصيص الوصف النصي الافتراضي للكائن.
   * سيؤدي هذا إلى جعل الكائن يظهر كـ [object CODE] عند تحويله لنص.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
