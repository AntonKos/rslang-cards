import BaseController from './BaseController';
import AnaliticsCounter from './AnaliticsCounter';
export default class PagePageController extends BaseController {
  analiticsCounter: any;
  constructor(model: any, view: any) {
    super(model, view);

    this.analiticsCounter = new AnaliticsCounter(this.model.currentMenuItem);

    this.view.bindNewGameStarted(this.handleNewGameStarted);

    this.view.bindWordSelected(this.handleWordSelected);
    this.view.bindPlayAudioStarted(this.handlePlayAudioStarted);

    this.view.bindCorrectAnswerRecieved(this.handleCorrectAnswerRecieved);
    this.view.bindInCorrectAnswerRecieved(this.handleInCorrectAnswerRecieved);

    this.view.bindNewGameAfterVictory(this.handleNewGameAfterVictory);
    this.view.bindNewGameAfterFailure(this.handleNewGameAfterFailure);
    this.view.bindRepeatButtonClicked(this.handleRepeatButtonClicked);
    this.view.bindQuoteButtonClicked(this.handleQuoteButtonClicked);

    this.model.bindCardsForGameChange(this.onCardsForGameChange);
    this.model.bindCardsForGameContinueChange(this.onCardsForGameContinueChange);

    this.view.setGameLayout(this.model._cardsForGame); // должно быть в функции onTrainChange

    //  this.onTrainChange();
  }

  handleWordSelected = (word: string) => {
    // формируется model.cardsForGameRemaining

    if (word === this.model.playedCard.word) {
      this.model.cardsForGameRemaining = this.model.cardsForGameRemaining.filter(
        (element: any) => element.word !== this.model.playedCard.word,
      );

      this.view.handleCorrectAnswer(word);
    } else {
      this.model.cardsForGameRemaining = this.model.cardsForGameRemaining.filter(
        (element: any) => element.word !== this.model.playedCard.word,
      );
      this.view.handleIncorrectAnswer();
    }
  };

  handleRepeatButtonClicked = () => {
    this.view.playWord(this.model.playedCard.word);
  };

  handleQuoteButtonClicked = () => {
    this.view.playQuote(this.model.playedCard.word);
  };

  handleNewGameStarted = () => {

    this.model.cardsForGameRemaining = this.model.cards.slice(0);
    this.model.gameErrors = 0;
    this.model.cardsForGame = this.model.cardsForGame.sort(() => Math.random() - 0.5); //срабатывание сеттера model.cardsForGame и геттера во второй части
  };

  handlePlayAudioStarted = (word: string) => {
    this.model.playedCard = this.model.cardsForGame // формируется playedCard, и срабатывает сеттер playedCard
      .find((element: any) => element.word === word);
  };

  onCardsForGameChange = () => {
    this.model.isGameStart = false;
    this.view.setNewGameStart(this.model.cardsForGame);
  };

  onCardsForGameContinueChange = () => {
    this.view.setContinueGame(this.model.cards, this.model.cardsForGameRemaining);
  };

  handleCorrectAnswerRecieved = () => {
    this.analiticsCounter.incrementGameClick(this.model.playedCard.word);

    if (this.model.cardsForGameRemaining.length !== 0) {
      // если еще остались карточки

      /*    переместить в model и view        начало     */

      const array: any = [];
      const randomNumber = Math.floor(Math.random() * this.model.cardsForGameRemaining.length);
      const playCard: any = this.model.cardsForGameRemaining[randomNumber]; // объект playCard
      const mixCardsForGame = this.model.cards.sort(() => Math.random() - 0.5);
      array.push(playCard);

      let i = 0;
      do {
        if (!array.includes(mixCardsForGame[i])) {
          array.push(mixCardsForGame[i]);
        }
        i++;
      } while (array.length < 5);

      this.model._cardsForGame = array.sort(() => Math.random() - 0.5);

      /*  переместить в model и view           конец    */

      this.view.playNext(this.model.cardsForGameRemaining, randomNumber, this.model._cardsForGame);
    } else if (this.model.cardsForGameRemaining.length === 0 && this.model.gameErrors === 0) {
      this.view.victoryGameOver();
    } else {
      this.view.failureGameOver(this.model.gameErrors);
    }
  };

  handleInCorrectAnswerRecieved = () => {
    this.analiticsCounter.incrementErrorCount(this.model.playedCard.word);
    this.model.gameErrors += 1;

    if (this.model.cardsForGameRemaining.length !== 0) {
      /*    переместить в model и view        начало     */

      const array: any = [];
      const randomNumber = Math.floor(Math.random() * this.model.cardsForGameRemaining.length);
      const playCard: any = this.model.cardsForGameRemaining[randomNumber]; // объект playCard
      const mixCardsForGame = this.model.cards.sort(() => Math.random() - 0.5);
      array.push(playCard);

      let i = 0;
      do {
        if (!array.includes(mixCardsForGame[i])) {
          array.push(mixCardsForGame[i]);
        }
        i++;
      } while (array.length < 5);

      this.model._cardsForGame = array.sort(() => Math.random() - 0.5);

      /*  переместить в model и view           конец    */

      this.view.playNext(this.model.cardsForGameRemaining, randomNumber, this.model._cardsForGame);
    } else {
      this.view.failureGameOver(this.model.gameErrors);
    }
  };

  handleNewGameAfterFailure = () => {
    window.location.href = '/';
  };

  handleNewGameAfterVictory = () => {
    window.location.href = '/';
  };
}
