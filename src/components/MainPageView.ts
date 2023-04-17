import BaseView from './BaseView';
import MainWrapper from '../templates/MainWrapper';
import Category from '../templates/Category';

export default class MainPageView extends BaseView {
  wrapper: any;

  constructor() {
    super();
    this.main.innerHTML = MainWrapper();
    this.wrapper = this.main.querySelector('.main-wrapper');
  }

  setCategories(categories: any) {
    this.wrapper.innerHTML = categories.map((category: any) => Category(category)).join('');
  }
}
