/* eslint-disable object-curly-newline */
const DrawerInitiator = {
  init({ button, drawer, links, content }) {
    button.addEventListener('click', (event) => {
      this._openDrawer(event, drawer, content);
    });

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer, content);
      });
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, content);
    });
  },

  _openDrawer(event, drawer, content) {
    event.stopPropagation();
    content.classList.add('main-blur');
    drawer.classList.add('navbar-active');
  },

  _closeDrawer(event, drawer, content) {
    event.stopPropagation();
    content.classList.remove('main-blur');
    drawer.classList.remove('navbar-active');
  },
};

export default DrawerInitiator;
