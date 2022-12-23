/* eslint-disable object-curly-newline */
import DrawerInitiator from '../utils/drawer-initiator';
import WindowScroll from '../utils/window-scroll';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, links, content }) {
    this._button = button;
    this._drawer = drawer;
    this._links = links;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      links: this._links,
      content: this._content,
    });
    WindowScroll.init({
      drawer: this._drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
