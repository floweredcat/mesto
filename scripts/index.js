let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__button-close');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_description');
let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.form');

function openPopup() {
	popup.classList.add('popup_opened');
	nameInput.value = profileName.textContent;
	jobInput.value = profileText.textContent;
}

function closePopup() {
	popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileText.textContent = jobInput.value;
	closePopup(evt);
}

//обработчик кнопки сохранения(отправки формы)
popupForm.addEventListener('submit', formSubmitHandler); 

//обработчик кнопки открытия ПопАпа(изменения профиля)
openPopupButton.addEventListener('click', openPopup);

//обработчик кнопки закрытия попапа
closePopupButton.addEventListener('click', closePopup);