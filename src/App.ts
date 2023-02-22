import './styles/main.scss';
import CategoryPageModel from './components/CategoryPageModel';
import CategoryPageView from './components/CategoryPageView';
import CategoryPageController from './components/CategoryPageController';
import MainPageModel from './components/MainPageModel';
import MainPageView from './components/MainPageView';
import MainPageController from './components/MainPageController';
import PagePageModel from './components/PagePageModel';
import PagePageController from './components/PagePageController';
import PagePageView from './components/PagePageView';

export default class App {
  model: any;
  view: any;
  controller: any;
  path1: any;
  path2: any;
  init() {
    window.addEventListener('hashchange', this.navigate);
    this.navigate();
  }

  navigate = () => {
    const path = window.location.hash.slice(1).split('/');
    if (path.length < 3) {
      if (path[0] === 'category') {
        this.model = new CategoryPageModel(decodeURI(path[1]).replace(/\+/g, ' '));
        this.view = new CategoryPageView();
        this.controller = new CategoryPageController(this.model, this.view);
      }
      if (path[0] === 'main' || !path[0]) {
        this.model = new MainPageModel();
        this.view = new MainPageView();
        this.controller = new MainPageController(this.model, this.view);
      }
    } else if (path.length === 3) {
      this.path1 = decodeURI(path[1]).replace(/\+/g, ' ');
      this.path2 = decodeURI(path[2]).replace(/\+/g, ' ');
      this.model = new PagePageModel(this.path1, this.path2); // передаем 2 параметра, т.к. нужна информация и о текущей category, и о page
      this.view = new PagePageView();
      this.controller = new PagePageController(this.model, this.view);
    }
  };
}
