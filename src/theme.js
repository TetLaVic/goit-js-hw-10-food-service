const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeSwitchRef.addEventListener('input', onThemeChange);

function onThemeChange(event) {
  if (event.target.checked) {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    localStorage.setItem('Theme', Theme.LIGHT);
  } else {
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
    localStorage.setItem('Theme', Theme.DARK);
  }
  console.dir(event);
}

const themeSaved = localStorage.getItem('Theme');
console.log(themeSaved);
