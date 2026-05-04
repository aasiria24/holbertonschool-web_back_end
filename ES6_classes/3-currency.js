export default class Currency {
  /**
   * ينشئ كائناً يمثل عملة معينة.
   * @param {String} code - رمز العملة (مثل $).
   * @param {String} name - اسم العملة (مثل Dollars).
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter & Setter لرمز العملة (code)
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Getter & Setter لاسم العملة (name)
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * يعيد تفاصيل العملة بتنسيق محدد.
   * @returns {String} الاسم (الرمز)
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
