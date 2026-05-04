export default class Building {
  /**
   * ينشئ مبنى جديداً.
   * @param {Number} sqft - المساحة بالقدم المربع.
   */
  constructor(sqft) {
    this._sqft = sqft;

    /*
      التحقق مما إذا كان الكلاس الذي يتم إنشاؤه هو "Building" نفسه
      أو كلاس وارث منه لم يقم بتعريف الدالة المطلوبة.
    */
    if (this.constructor !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter للمساحة (sqft)
  get sqft() {
    return this._sqft;
  }

  /**
   * دالة مجردة (Abstract method) يجب على الكلاسات الوارثة تنفيذها.
   */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
