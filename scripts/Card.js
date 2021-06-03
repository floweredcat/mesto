import { setOverlayListener, setEscListener, closePopup } from './utlis.js';

const popupFigure = document.querySelector('.popup_type_image');
const popupFigureImg = popupFigure.querySelector('.figure__image');
const popupFigureCaption = popupFigure.querySelector('.figure__caption');
const cardsContainer = document.querySelector('.elements');
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
        .cloneNode(true)

        return cardElement
    }
    _openPopup() {
        popupFigure.classList.add('popup_opened');
        popupFigureImg.src = this._link;
        popupFigureCaption.textContent = this._name;
        popupFigureImg.alt = this._name;

        document.addEventListener('mousedown', setOverlayListener);
        document.addEventListener('keydown', setEscListener);
        popupImgClose.addEventListener('mousedown', closePopup)
    }

    _deleteCard(evt) {
        const element = evt.target.closest('.element');
        element.remove();
    }
    
    _handlelikeButton(evt) {
        evt.target.classList.toggle('element__like-button_active');
    }

    _setEventListeners() {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._openPopup();
        })
        this._element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
            this._deleteCard(evt);
        })
        this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
            this._handlelikeButton(evt);
        })
    }

    _createCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        this._setEventListeners();
        // this._deleteCard();
        // this._handlelikeButton();

        return this._element;
    }

    renderCard() {
        cardsContainer.prepend(this._createCard());
    }
}

export {Card}