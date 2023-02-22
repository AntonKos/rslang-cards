import BaseModel from './BaseModel';
import cards from '../cards';

export default class MainPageModel extends BaseModel{
  categories:any;
  constructor() {
    super('Main');
    this.categories = cards[0].map((name, index) => ({ name, hash: `category/${name}` }));
  }
}
