import Page from '../templates/Page';
import MenuItem from '../templates/MenuItem';
// import Switch from '../templates/Switch';
export default class BaseView {
  body:any;
  header:any;
  headerWrapper:any;
  main:any;
  burger:any;
  menu:any;
  switch:any;

  constructor() {
      this.body = document.querySelector('body');
      this.body.innerHTML = Page();
      this.header = document.querySelector('header');
      this.headerWrapper = document.querySelector('.header-wrapper');
      this.main = document.querySelector('main');
      this.burger = document.querySelector('.burger');
      this.menu = document.querySelector('.menu');
      this.switch = null;
  }

    setMenuOpen(isMenuOpen:any) {
        if (isMenuOpen) {
            this.menu.classList.remove('hidden');
            this.burger.classList.add('active');
            this.burger.querySelectorAll('.burger-line').forEach((element:any) => element.classList.add('active'));
        } else {
            this.menu.classList.add('hidden');
            this.burger.classList.remove('active');
            this.burger.querySelectorAll('.burger-line').forEach((element:any) => element.classList.remove('active'));
        }
    }


    bindChangeMenuOpen(handler:any) {
        this.body.addEventListener('click', (event:any) => {
            if (!event.target.classList.contains('menu') && !this.menu.classList.contains('hidden')) {
                handler();
            } else if (event.target.classList.contains('burger') || event.target.classList.contains('burger-line')) {
                handler();
            }
        });
    }

  setMenuItems(menuItems:any) {
    const menuList = this.menu.querySelector('ol');
    menuList.innerHTML = menuItems.map(MenuItem).join('');
   }

  setCurrentMenuItem(currentMenuItem:any) {

    const menuItems = this.menu.querySelectorAll('.menu__items-link');

    menuItems.forEach((element:any) => {
        element.classList.remove('highlighted');
        if (element.innerText === currentMenuItem) {
            element.classList.add('highlighted');
        }
    });
  }
}
