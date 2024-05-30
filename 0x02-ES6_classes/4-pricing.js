import Currency from './3-currency';

export default class {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount(){
    return this._amount;
  }
  set amount(value){
    return this._amount = value;
  }
  get currency(){
    return this._currency;
  }
  set currency(value){
    return this._currency = value;
  }

  displayFullPrice(){
    return `${this._amount} ${this._currency._name} (${this._currency._code})`
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
