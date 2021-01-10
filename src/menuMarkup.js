import refs from './refs.js';
const { menuList } = refs;

import menu from './menu.json';

import templateMarkup from './template.hbs';

// console.log(templateMarkup);

const menuItems = templateMarkup(menu);
console.log(menuItems);

menuList.insertAdjacentHTML('afterbegin', menuItems);
