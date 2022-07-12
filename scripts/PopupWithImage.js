import { Popup } from './Popup.js'


export class PopupWithImage extends Popup {
    constructor(popupSelector, link, name) {
        super(popupSelector);
        this._link = link;
        this._name = name;
    }

    open() {
        super.open();
        const popup = document.querySelector('.popup_opened');
        const popupImage = popup.querySelector('.figure__image');
        const popupCaption = popup.querySelector('.figure__caption');
        
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupCaption.textContent = this._name;
    }

    close() {
        const popup = document.querySelector(this._popupSelector);
        const popupImage = popup.querySelector('.figure__image');
        const popupCaption = popup.querySelector('.figure__caption');
        popupImage.src = '';
        popupImage.alt = '';
        popupCaption.textContent = '';
        super.close();
    }
}