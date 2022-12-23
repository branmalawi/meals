import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import './components/navbar';
import './components/catalogue-placeholder';
import './components/menu-placeholder';
import './components/review-placeholder';

import App from './views/app';
import swRegister from './utils/sw-register';

console.log('hello coders');
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navbar'),
  links: document.querySelectorAll('.navbar__list-item'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
