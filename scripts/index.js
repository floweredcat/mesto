const openPopupButton = document.querySelector('.profile__edit-button');
const closeEditProfileButton = document.querySelector('#edit-profile-close');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const popupFormProfile = document.querySelector('#form-profile');
const openAddCardButton = document.querySelector('.profile__add-button');
const inputAddCardName = document.querySelector('.form__input_type_place');
const inputAddCardLink = document.querySelector('.form__input_type_link');
const closePopupAddButton = document.querySelector('.popup__button-close_add');
const cardsContainer = document.querySelector('.elements');
const popupFormCard = document.querySelector('#form-card');

const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupFigure = document.querySelector('.popup_type_image');
const addCardButtonSave = popupAddCard.querySelector('.form__button-save');

const popupFigureImage = popupFigure.querySelector('.figure__image');
const popupFigureCaption = popupFigure.querySelector('.figure__caption');
const closeImgButton = document.querySelector('#closeImg');

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

const setOverlayListener = function(evt) {
    const openedPopup = document.querySelector('.popup_opened');
        if(evt.target === openedPopup) {
            closePopup(openedPopup);
        }
    }

const setEscListener = function(evt) {
            if(evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_opened');
            closePopup(openedPopup);
        }
}

// Функция добавления карточек при загрузке страницы
initialCards.forEach (function (item){
    renderCard(item.link, item.name);
})

function renderCard(link, name) {
    cardsContainer.prepend(createCard(link, name));
}

function createCard(link, name) {
    const card = template.querySelector('.element').cloneNode(true);

    card.querySelector('.element__image').src = link;
    card.querySelector('.element__image').alt = name;
    card.querySelector('.element__title').textContent = name;

    handleLikeButton(card);
    deleteCard(card);
    openPopupImg(card);

    return card
}

// Функция добавления карточек через инпут попапа
function handleAddCard(evt) {
    evt.preventDefault();
    renderCard(inputAddCardLink.value, inputAddCardName.value);
    popupFormCard.reset();
    closePopup(popupAddCard);
    addCardButtonSave.disabled = true;
}


// Функция удаления карточек

function deleteCard(card) {
card.querySelector('.element__delete-button').addEventListener('click', function(evt) {
    const element = evt.target.closest('.element')
    element.remove();
});
}

// Функция лайка для карточек
function handleLikeButton(card) {
    card.querySelector('.element__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like-button_active');
    })
}

// открытие попапа фото карточки
function openPopupImg(card) {
card.querySelector('.element__image').addEventListener('click', function(evt) {
        openPopup(popupFigure);
        const caption = evt.target.closest('.element').querySelector('.element__title').textContent;
        popupFigureImage.alt = caption;
        popupFigureImage.src = evt.target.src;
        popupFigureCaption.textContent = caption;
    });
}

// открытие окна редактирования профиля
function openEditPopup() {
	openPopup(popupEditProfile)
	nameInput.value = profileName.textContent;
	jobInput.value = profileText.textContent;
}

// изменение данных профиля из инпута попапа
function handleProfileSubmitForm(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileText.textContent = jobInput.value;
	closePopup(popupEditProfile);
}

function closeAddCardPopup() {
    closePopup(popupAddCard);
    popupFormCard.reset();
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('mousedown', setOverlayListener);
    document.addEventListener('keydown', setEscListener);
}

function closePopup(popup) {
    document.removeEventListener('keydown', setEscListener);
    document.removeEventListener('mousedown', setOverlayListener)
    popup.classList.remove('popup_opened');
}

//слушатель отправки формы редактирования профиля
popupFormProfile.addEventListener('submit', handleProfileSubmitForm); 

//слушатель кнопки открытия попапа редактирования профиля
openPopupButton.addEventListener('click', openEditPopup);

//кнопка закрытия попапа редактирования профиля
closeEditProfileButton.addEventListener('click', () => {
    closePopup(popupEditProfile)
});

//Слушатель кнопки открытия попапа для добавления карточки
openAddCardButton.addEventListener('click', () => {
    openPopup(popupAddCard)
});

//Слушатель кнопки закрытия попапа добавления карточки
closePopupAddButton.addEventListener('click', closeAddCardPopup);

//слушатель отправки формы добавления карточки из попапа
popupFormCard.addEventListener('submit', handleAddCard);

//слушатель кнопки закрытия попапа с фото
closeImgButton.addEventListener('click', () => {
    closePopup(popupFigure);
});



