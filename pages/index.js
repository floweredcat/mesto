let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__button-close');
let saveProfileButton = document.querySelector('.popup__button-save');
let profile = document.querySelector('.profile__info');

let popup = document.querySelector('.popup');

function openPopup() {

	popup.classList.add('popup_opened');
}

function closePopup() {
	popup.classList.remove('popup_opened');
}

function editProfile() {
let name = document.querySelector('.input__text_type_name');
let description = document.querySelector('.input__text_type_description');

	profile.innerHTML = `
				<div class="profile__info">
                    <h1 class="profile__name">${name.value}<button class="profile__edit-button button"></button></h1>
                    <p class="profile__text">${description.value}</p>
                </div>
				`;
	closePopup();
}
openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
saveProfileButton.addEventListener("click", editProfile);