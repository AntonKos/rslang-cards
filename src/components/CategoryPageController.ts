import BaseController from './BaseController';
export default class CategoryPageController extends BaseController {

  constructor(model:any, view:any) {
   super(model,view)

   this.view.bindNewGameStarted(this.handleNewGameStarted);

   this.model.bindCardsGorGameChange(this.onCardsForGameChange);



   this.view.setGameLayout(this.model.pages); // должно быть в функции setTrain, вроде

  //  this.onTrainChange();
  }

  handleNewGameStarted = () => {

    this.model.cardsForGameRemaining = this.model.cardsForGame.slice(0); // срабатывание геттера model.cardsForGame
    this.model.gameErrors = 0;
    this.model.cardsForGame = this.model.cardsForGame.sort(() => Math.random() - 0.5); // срабатывание сеттера model.cardsForGame и геттера во второй части

  }

  onCardsForGameChange = () => {
    this.view.setNewGameStart(this.model.cardsForGame);
  }

  // onTrainChange = () => {
  //   this.view.setTrain(this.model.isTrain);
  //   if (this.model.isTrain) {
  //       this.view.setTrainingCards(this.model.cards);
  //   } else {
  //       this.view.setGameLayout(this.model.cards);
  //   }
  // }

}
