import BaseView from './BaseView';
import CategoryWrapper from '../templates/CategoryWrapper';
import RepeatButton from '../templates/RepeatButton';
import GameCard from '../templates/GameCard';
import GameSound from '../templates/GameSound';
import NewGameButton from '../templates/NewGameButton';
import QuoteButton from '../templates/QuoteButton';
import StarCorrect from '../templates/StarCorrect';
import StarIncorrect from '../templates/StarIncorrect';
import VictoryGameOver from '../templates/VictoryGameOver';
import FailureGameOver from '../templates/FailureGameOver';
import cards from '../cards';
export default class PagePageView extends BaseView {
  wrapper: any;
  starLine: any;
  buttonWrapper: any;
  buttonWrapperForQuote: any;
  gameInProcess: boolean;
  audioQuote: any;
  quoteTextWrapper:any;

  constructor() {
    super();
    this.main.innerHTML = CategoryWrapper();
    this.wrapper = this.main.querySelector('.main-wrapper');
    this.starLine = this.main.querySelector('.star-line');
    this.buttonWrapper = this.main.querySelector('.button-wrapper');
    this.buttonWrapperForQuote = this.main.querySelector('.quote-button-wrapper');
    this.quoteTextWrapper = this.main.querySelector('.quote-text-wrapper');
    this.gameInProcess = false;
  }

  bindNewGameStarted(handler: any) {
    this.buttonWrapper.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('new-game')) {
        handler(); // controller.handleNewGameStarted() -> выполнение сеттера model.cardsForGame, в котором вызывается view.setNewGame
      }
    });
  }

  setNewGameStart(cards: any) {
    //(this.model.cardsForGame)

    this.starLine.innerHTML = '';
    this.wrapper.innerHTML = cards.map(GameCard).join('') + GameSound;
    this.buttonWrapper.innerHTML = RepeatButton();

    // this.buttonWrapperForQuote.innerHTML = QuoteButton();

    this.gameInProcess = true;

    const randomNumber = Math.floor(Math.random() * cards.length);

    //вывод цитаты
    this.quoteTextWrapper.innerHTML = cards[randomNumber].textQuote;

    const audio = this.wrapper.querySelector(`audio.${cards[randomNumber].word}`);
    audio.play();
  }

  setGameLayout(cards: any) {
    this.starLine.innerHTML = '';
    this.wrapper.innerHTML = cards.map(GameCard).join('') + GameSound;
    this.buttonWrapper.innerHTML = NewGameButton();
  }

  bindWordSelected(handler: any) {
    this.wrapper.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('card__container-item')) {
        handler(event.target.dataset.word);
      }
    });
  }

  bindRepeatButtonClicked(handler: any) {
    this.buttonWrapper.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('repeat')) {
        handler();
      }
    });
  }

  bindQuoteButtonClicked(handler: any) {
    this.buttonWrapper.addEventListener('click', (event: any) => {
      if (event.target.classList.contains('quote-button')) {
        handler();
      }
    });
  }

  bindPlayAudioStarted = (handler: any) => {
    this.wrapper.addEventListener(
      'ended',
      (event: any) => {
        // каждый раз, когда произносится слово
        if (event.target.dataset.word === 'audio') {
          handler(event.target.className);
        }
      },
      true,
    );
  };

  victoryGameOver() {
    this.wrapper.innerHTML = VictoryGameOver + GameSound;
    this.buttonWrapper.innerHTML = '';

    const audio = this.wrapper.querySelector('.success-sound');
    audio.play();

    this.gameInProcess = false;
  }

  failureGameOver(count: number) {
    this.wrapper.innerHTML = FailureGameOver(count) + GameSound;
    this.buttonWrapper.innerHTML = '';

    const audio = this.wrapper.querySelector('.failure-sound');
    audio.play();

    this.gameInProcess = false;
  }

  bindNewGameAfterVictory(handler: any) {
    this.wrapper.addEventListener(
      'ended',
      (event: any) => {
        if (event.target.className === 'success-sound') {
          handler();
        }
      },
      true,
    );
  }

  bindNewGameAfterFailure(handler: any) {
    this.wrapper.addEventListener(
      'ended',
      (event: any) => {
        if (event.target.className === 'failure-sound') {
          handler();
        }
      },
      true,
    );
  }

  handleCorrectAnswer(word: string) {
    this.starLine.innerHTML += StarCorrect;

    const success = this.wrapper.querySelector('.correct-sound');
    success.play();

    this.gameInProcess = true;

    const successElement = this.wrapper.querySelector(`.card__container-item[data-word=${word}]`);
    successElement.classList.add('grey-out');
  }

  bindCorrectAnswerRecieved(handler: any) {
    // по окончанию correct-sound

    this.wrapper.addEventListener(
      'ended',
      (event: any) => {
        if (event.target.className === 'correct-sound') {
          handler(); //вызывается handleCorrectAnswerRecieved, которая вызывает view.playNext(this.model.cardsForGameRemaining);
        }
      },
      true,
    );
  }

  handleIncorrectAnswer() {
    this.starLine.innerHTML += StarIncorrect;

    const incorrect = this.wrapper.querySelector('.incorrect-sound');
    incorrect.play();

    this.gameInProcess = true;
  }

  bindInCorrectAnswerRecieved(handler: any) {
    this.wrapper.addEventListener(
      'ended',
      (event: any) => {
        if (event.target.className === 'incorrect-sound') {
          handler();
        }
      },
      true,
    );
  }

  playWord(word: string) {
    const audio = this.wrapper.querySelector(`audio.${word}`);
    audio.play();
  }

  playQuote(word: string) {
    const audios = this.wrapper.querySelectorAll(`audio.${word}`);

    const audio = audios[1];
    if (audio.src.slice(-9) !== 'undefined') {
      const btn: any = document.querySelector('.repeat');
      btn.disabled = true;
      audio.addEventListener('ended', () => {
        const btn: any = document.querySelector('.repeat');
        btn.disabled = false;
      });
      audio.play();
    }
  }

  playNext(cardsRemaining: any, randomNumber: number, array: any) {
    // console.log(cardsRemaining[randomNumber].textQuote);
    console.log(randomNumber);


    this.wrapper.innerHTML = array.map(GameCard).join('') + GameSound;
    this.buttonWrapper.innerHTML = RepeatButton();
    this.gameInProcess = true;
    const audio = this.wrapper.querySelector(`audio.${cardsRemaining[randomNumber].word}`);
    this.quoteTextWrapper.innerHTML = cardsRemaining[randomNumber].textQuote;
    audio.play();
  }
}
