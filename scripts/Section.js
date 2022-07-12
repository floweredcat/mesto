export class Section {
    constructor( objRender, containerSelector) {
        this._items = objRender.items;
        this._renderer = objRender.renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderElements() {
      const domCards = this._items.map(item => {
        return this._renderer(item);
      })
      return domCards;
    }

    addItem(cardElement) {
        this._container.prepend(cardElement);
  }
}