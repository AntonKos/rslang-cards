export default class BaseController {
  model:any;
  view:any;
  constructor(model:any, view:any) {
      this.model = model;
      this.view = view;

      this.model.bindMenuOpenChange(this.onMenuOpenChange);
      this.view.bindChangeMenuOpen(this.handleChangeMenuOpen);

      this.view.setMenuItems(this.model.menuItems);
      this.view.setCurrentMenuItem(this.model.currentMenuItem);

      this.view.setMenuOpen(this.model.isMenuOpen);
      

  }

    onMenuOpenChange = () => {
        this.view.setMenuOpen(this.model.isMenuOpen);
    }

    handleChangeMenuOpen = () => {
        this.model.isMenuOpen = !this.model.isMenuOpen;
    }
}
