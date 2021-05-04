const openPopupButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__button-close');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_description');
let profileName = document.querySelector('.profile__name');
let profileText = document.querySelector('.profile__text');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupFormProfile = document.querySelector('#form-profile');
const openAddCardButton = document.querySelector('.profile__add-button');
const inputAddCardName = document.querySelector('.form__input_type_place');
const inputAddCardLink = document.querySelector('.form__input_type_link');
const addCardButton = document.querySelector('#profileSave');
const closePopupAddButton = document.querySelector('.popup__button-close_add');
const cardsContainer = document.querySelector('.elements');
const popupFormCard = document.querySelector('#form-card');
const popupAddCard = document.querySelector('.popup_type_add-card');
const likeButton = document.querySelector('.element__like-button');
const popupFigure = document.querySelector('.popup__image');
const popupFigureImage = popupFigure.querySelector('.figure__image');
const popupFigureCaption = popupFigure.querySelector('.figure__caption');

const template = document.querySelector('#template-card').content;
    const card = template.querySelector('.element').cloneNode(true);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 


// Функция добавления карточек при загрузке страницы
initialCards.forEach (function (item){
    const template = document.querySelector('#template-card').content;
    const card = template.querySelector('.element').cloneNode(true);

    card.querySelector('.element__image').src = item.link;
    card.querySelector('.element__image').alt = item.name;
    card.querySelector('.element__title').textContent = item.name;

    likeButtonListener(card);
    deleteButton(card);
    openPopupImg(card);
    closePopupImg();
    
    cardsContainer.prepend(card);
})

// Функция удаления карточек

function deleteButton(card) {
card.querySelector('.element__delete-button').addEventListener('click', function(evt) {
    const element = evt.target.parentElement
    element.remove();
});
}

// Функция лайка для карточек
function likeButtonListener(card) {
    card.querySelector('.element__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like-button_active');
    })
}

// открытие попапа фото карточки
function openPopupImg(card) {
card.querySelector('.element__image').addEventListener('click', function(evt) {
        popupFigure.classList.add('popup_opened');
        const caption = evt.target.nextElementSibling.textContent;
        popupFigureImage.src = evt.target.src;
        popupFigureCaption.textContent = caption;
    });
}

// закрытие попапа фото карточки
function closePopupImg() {
    document.querySelector('#closeImg').addEventListener('click', function() {
        popupFigure.classList.remove('popup_opened');
    })
}

// Функция добавления карточек через инпут попапа
function formCardSubmitHandler(evt) {
    evt.preventDefault();
    

    card.querySelector('.element__image').src = inputAddCardLink.value;
    card.querySelector('.element__image').alt = inputAddCardName.value;
    card.querySelector('.element__title').textContent = inputAddCardName.value;

    likeButtonListener(card);
    deleteButton(card);
    openPopupImg(card);
    closePopupImg();

    cardsContainer.prepend(card);

    inputAddCardLink.value = '';
    inputAddCardName.value = '';

    closeAddCardPopup();
}

// открытие окна редактирования профиля
function openPopup() {
	popupEditProfile.classList.add('popup_opened');
	nameInput.value = profileName.textContent;
	jobInput.value = profileText.textContent;
}
// закрытие окна редактирования профиля
function closePopup() {
	popupEditProfile.classList.remove('popup_opened');
}
// изменение данных профиля из инпута попапа
function formProfileSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileText.textContent = jobInput.value;
	closePopup();
}
// открытие окна добавления карточек
function openAddCardPopup() {
	popupAddCard.classList.add('popup_opened');
}
// закрытие окна добавления карточек
function closeAddCardPopup() {
	popupAddCard.classList.remove('popup_opened');
}

//слушатель отправки формы редактирования профиля
popupFormProfile.addEventListener('submit', formProfileSubmitHandler); 

//слушатель кнопки открытия попапа редактирования профиля
openPopupButton.addEventListener('click', openPopup);

//кнопка закрытия попапа редактирования профиля
closePopupButton.addEventListener('click', closePopup);

//Слушатель кнопки открытия попапа для добавления карточки
openAddCardButton.addEventListener('click', openAddCardPopup);

//Слушатель кнопки закрытия попапа добавления карточки
closePopupAddButton.addEventListener('click', closeAddCardPopup);

//слушатель отправки формы добавления карточки из попапа
popupFormCard.addEventListener('submit', formCardSubmitHandler);



