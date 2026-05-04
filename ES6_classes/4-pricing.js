import Currency from './3-currency';

export default class Pricing {
  /**
   * ينشئ كائناً يمثل السعر مع العملة.
   * @param {Number} amount - المبلغ.
   * @param {Currency} currency - كائن من كلاس Currency.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter & Setter للمبلغ (amount)
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // Getter & Setter للعملة (currency)
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  /**
   * يعيد السعر كاملاً مع تفاصيل العملة.
   * @returns {String} amount currency_name (currency_code)
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * دالة ثابتة لتحويل السعر بناءً على سعر الصرف.
   * @param {Number} amount - المبلغ المراد تحويله.
   * @param {Number} conversionRate - سعر الصرف.
   * @returns {Number} المبلغ بعد التحويل.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
