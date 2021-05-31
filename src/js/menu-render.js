import menuList from '../menu.json';
import menuListTpl from '../templates/menu-items.hbs';

const menuContainerRef = document.querySelector('.js-menu');
const createMenuMarkup = menuListTpl(menuList);
menuContainerRef.insertAdjacentHTML('beforeend', createMenuMarkup);