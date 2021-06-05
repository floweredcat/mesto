import { openPopup, closePopup } from './index.js';

const popupFigure = document.querySelector('.popup_type_image');
const popupFigureImg = popupFigure.querySelector('.figure__image');
const popupFigureCaption = popupFigure.querySelector('.figure__caption');
const popupImgClose = popupFigure.querySelector('.popup__button-close');


class Card {
    constructor(cardSelector, name, link) {
        this._cardSelector = cardSelector;
        this._name = name;
        this._link = link
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)

        return cardElement
    }
    _openPopup() {
        openPopup(popupFigure)
        popupFigureImg.src = this._link;
        popupFigureCaption.textContent = this._name;
        popupFigureImg.alt = this._name;
        popupImgClose.addEventListener('click', () => {
            closePopup(popupFigure);
        })
    }

    _deleteCard() {
        this._element.remove();
    }
    
    _handlelikeButton(evt) {
        evt.target.classList.toggle('element__like-button_active');
    }

    _setEventListeners() {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._openPopup();
        })
        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deleteCard();
        })
        this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
            this._handlelikeButton(evt);
        })
    }

    createCard() {
        this._element = this._getTemplate();

        const image = this._element.querySelector('.element__image');
        const title = this._element.querySelector('.element__title');

        image.src = this._link;
        image.alt = this._name;
        title.textContent = this._name;

        this._setEventListeners();

        return this._element;
    }
}

export {Card}