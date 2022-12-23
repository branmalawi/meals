const WindowScroll = {
  init({ drawer }) {
    this.offsetYOld = 0;
    window.addEventListener('scroll', (event) => {
      this.offsetYNew = window.scrollY;
      if (this.offsetYNew > this.offsetYOld) {
        this._scrollTop(event, drawer);
      } else {
        this._scrollBottom(event, drawer);
      }
      this.offsetYOld = this.offsetYNew;
    });
  },

  _scrollTop(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('navbar--page-scrol');
  },

  _scrollBottom(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('navbar--page-scrol');
  },

  // _windowScrollEvent(event, drawer) {
  //   event.stopPropagation();
  //   if (this.offsetYNew > this.offsetYOld) {
  //     drawer.classList.add('navbar--page-scrol');
  //   } else {
  //     drawer.classList.remove('navbar--page-scrol');
  //   }
  //   this.offsetYOld = drawer.offsetYNew;
  // },
};

export default WindowScroll;
