import BaseView from './BaseView';
import CategoryWrapper from '../templates/CategoryWrapper';
import RepeatButton from '../templates/RepeatButton';
import GameCard from '../templates/GameCard';
import Category from '../templates/Category';
export default class CategoryPageView extends BaseView {
  wrapper: any;
  starLine: any;
  buttonWrapper: any;
  gameInProcess: any;

  constructor() {
    super();
    this.main.innerHTML = CategoryWrapper();
    this.wrapper = this.main.querySelector('.main-wrapper');
    this.starLine = this.main.querySelector('.star-line');
    this.buttonWrapper = this.main.querySelector('.button-wrapper');
    this.gameInProcess = false;
  }

  bindNewGameStarted(handler: any) {
    this.buttonWrapper.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('new-game')) {
        handler(); // handleNewGameStarted() -> выполнение сеттера cardsForGame
      }
    });
  }
  setNewGameStart(cards: any) {
    this.starLine.innerHTML = '';
    this.wrapper.innerHTML = cards.map(GameCard).join('');
    this.gameInProcess = true;
    const randomNumber = Math.floor(Math.random() * cards.length);
    const audios = this.wrapper.querySelectorAll(`audio.${cards[randomNumber].word}`);
    const audioWord = audios[0];
    const audioQuote = audios[1];
    this.buttonWrapper.innerHTML = RepeatButton(audioQuote.src);
    audioWord.play();
  }
  setGameLayout(pages: any) {
    this.starLine.innerHTML = '';
    this.wrapper.innerHTML = pages.map((category: any) => Category(category)).join('');
  }
}
