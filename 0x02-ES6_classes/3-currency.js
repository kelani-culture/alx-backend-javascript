export default class Currency {
  constructor(code, name) {
    this._code = this._validate(code, "Code");
    this._name = this._validate(name, "Name");
  }

  get code() {
    return this._code;
  }

  set code(value){
    return this._code = this._validate(value, "Code");
  }

  get name() {
    return this._name;
  }

  set name(value){
    return this._name = this._validate(value, "Name");
  }
  _validate(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`{attribute} must be a string`);
    }
    return value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

