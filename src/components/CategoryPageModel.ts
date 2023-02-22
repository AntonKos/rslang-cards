import BaseModel from './BaseModel';
import cards from '../cards';

export default class CategoryPageModel extends BaseModel {
  pages: any;
  cards: any;
  _cardsForGame: any;
  _cardsForGameRemaining: any;
  _playedCard: any;
  _animatedCard: any;
  _selectedCard: any;
  gameErrors: any;

  menuItems: any;
  currentMenuItem: any;
  onCardsForGameChange: any;

  constructor(currentMenuItem: any) {
    super(currentMenuItem);
    this.pages = cards[1].map((name) => ({ name, hash: `category/${currentMenuItem}/${name}` }));
    console.log(this.pages);
    this._cardsForGame = this.pages.slice(0);
    this._cardsForGameRemaining = this._cardsForGame.slice(0);
    this._playedCard = null;
    this._animatedCard = null;
    this._selectedCard = null;
    this.gameErrors = 0;
    this.currentMenuItem = currentMenuItem;
  }

  get cardsForGame() {
    return this._cardsForGame;
  }

  set cardsForGame(cardsForGame) {
    this._cardsForGame = cardsForGame;
    this.onCardsForGameChange();
  }

  bindCardsGorGameChange(callback: any) {
    this.onCardsForGameChange = callback;
  }
}
