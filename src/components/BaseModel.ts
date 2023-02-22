import cards from '../cards';

export default class BaseModel {
  menuItems:any;
  currentMenuItem:any;
  _isMenuOpen:any;
  onMenuOpenChange:any;

    constructor(currentMenuItem:any) {
    this.menuItems = [{ name: 'Main', hash: 'main' }, ...cards[0].map((name) => ({ name, hash: `category/${name}`}))];
    this.currentMenuItem = currentMenuItem;
    this._isMenuOpen = false;
    }

   get isMenuOpen() {
        return this._isMenuOpen;
    }

    set isMenuOpen(isMenuOpen) {
        this._isMenuOpen = isMenuOpen;
        this.onMenuOpenChange();
    }

    bindMenuOpenChange(callback:any) {
        this.onMenuOpenChange = callback;
    }

}
