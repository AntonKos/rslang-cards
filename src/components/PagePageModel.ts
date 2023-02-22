import BaseModel from './BaseModel';
import cards from '../cards';

export default class PagePageModel extends BaseModel {

  index1:number;
  index2:number;
  pages:any;
  cards:any;
  _cardsForGame:any;
  cardsForStartGame:any;
  mixCardsForStartGame:any;
  cardsForGameRemaining:any;
  _playedCard:any;
  _animatedCard:any;
  _selectedCard:any;
  gameErrors:any;
  isGameStart:any;

  menuItems:any;
  currentMenuItem:any;
  onCardsForGameChange:any;
  onCardsForGameContinueChange:any;

    constructor(path1:any, currentMenuItem:any) {

        super(currentMenuItem);
        this.isGameStart = true;
        this.index1 = cards[0].indexOf(path1) + 2;
        this.index2 = cards[1].indexOf(currentMenuItem);
        this.cards = cards[this.index1][this.index2];
        this.cardsForGameRemaining;
        this.setCardsForStart();
        this._playedCard = null;
        this._animatedCard = null;
        this._selectedCard = null;
        this.gameErrors = 0;

    }

    setCardsForStart(){

      this.mixCardsForStartGame = this.cards.sort(() => Math.random() - 0.5); // перемешиваем все карточки категории.
      this.cardsForStartGame = this.mixCardsForStartGame.filter((element:any, index:number)=>{
        return index < 5   // берем первые 5 карточек из перемешанной категории
      });
      this._cardsForGame = this.cardsForStartGame.slice(0);

    }

    get cardsForGame() {
      return this._cardsForGame;
    }

    set cardsForGame(cardsForGame) {

      this._cardsForGame = cardsForGame;
      this.onCardsForGameChange()  // onCardsForGameChange --> view.setNewGameStart(this.model.cardsForGame);

    }

    bindCardsForGameContinueChange(callback:any){
      this.onCardsForGameContinueChange = callback;
    }

    bindCardsForGameChange(callback:any) {
      this.onCardsForGameChange = callback;
    }

    get playedCard() {
      return this._playedCard;
    }

    set playedCard(playedCard) {
      this._playedCard = playedCard;
    }

}
