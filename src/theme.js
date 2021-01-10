import refs from './refs.js';
const { body, themeSwitch } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// const refs = {
//   body: document.querySelector('body'),
//   themeSwitch: document.getElementById('theme-switch-toggle'),
// };

// const themeSwitchRef = document.getElementById('theme-switch-toggle');
// const bodyRef = document.querySelector('body');

themeSwitch.addEventListener('input', onThemeChange);

const themeSaved = localStorage.getItem('Theme');

if (themeSaved) {
  body.classList.add(themeSaved);
  if (themeSaved === Theme.DARK) {
    themeSwitch.checked = true;
  }
} else {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
}

function onThemeChange(event) {
  if (event.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
