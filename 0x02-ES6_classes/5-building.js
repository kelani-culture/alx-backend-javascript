export default class Building {
  constructor(sqft) {
    this._sqft = this._validateNumber(sqft, 'Square feet');

    // Check if the subclass has implemented evacuationWarningMessage
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage && this.constructor.name !== 'Building') {
      this.evacuationWarningMessage();
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(value) {
    this._sqft = this._validateNumber(value, 'Square feet');
  }

  // Validation method for numbers
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number' || value <= 0) {
      throw new TypeError(`${attributeName} must be a positive number.`);
    }
    return value;
  }

  // Abstract method
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

