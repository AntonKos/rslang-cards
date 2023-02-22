import BaseController from './BaseController';
export default class MainPageController extends BaseController{
  model:any;
  view:any;
  constructor(model:any, view:any) {
    super(model, view);
    this.view.setCategories(this.model.categories, this.model.isTrain);
  }
}
