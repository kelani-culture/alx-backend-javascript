export default class Building {
  constructor (sqft) {
    this._sqft = sqft;
  }

  get sqft(){
    return this._sqft;
  }

  set sqft(value){
    return this.sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

