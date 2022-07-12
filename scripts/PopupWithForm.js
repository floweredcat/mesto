import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._popup = document.querySelector(this._popupSelector);
        this._form = this._popup.querySelector('.form');
        this._handleInputForm = this._handleInputForm.bind(this)
    }

    _getInputValues() {
        const form = document.querySelector(this._popupSelector);
        const inputsArr = Array.from(form.querySelectorAll('.form__input'));
        const inputValues = []

        inputsArr.forEach((input) => {
            inputValues[input.name] = input.value;
        })

        return inputValues;
    }

    _handleInputForm(evt) {
        evt.preventDefault();
        this._submitForm(this._getInputValues())
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleInputForm)
    }

    close() {
        super.close();
        this._form.reset();
    }
}