export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        const popup = document.querySelector(this._popupSelector);
        popup.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        const popup = document.querySelector(this._popupSelector);
        popup.classList.remove('popup_opened');
    }

    _closelosePopupButtonListener() {
        const popup = document.querySelector(this._popupSelector);
        const popupCloseButton = popup.querySelector('.popup__button-close');
        popupCloseButton.addEventListener('click', () => {
            this.close()
        })
    }

    _handleEscClose(evt) {
        if(evt.key === 'Escape') {
            this.close();
        }
    }

    _setOverlayListener(evt) {
        const popup = document.querySelector(this._popupSelector);
        if (evt.target === popup) {
            this.close()
        }
    }

    setEventListeners() {
        document.addEventListener('mousedown', (evt) => {this._setOverlayListener(evt)});
        document.addEventListener('keydown', (evt) => {this._handleEscClose(evt)})
        this._closelosePopupButtonListener();
    }
}