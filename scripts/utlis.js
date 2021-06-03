// вынес функции слушателей в отдельный файл для определения их в глобальной области видимости

    const setOverlayListener = (evt) =>{
    const openedPopup = document.querySelector('.popup_opened');
    if (evt.target === openedPopup) {
        closePopup();
    }
}


const setEscListener = (evt) => {
    if(evt.key === 'Escape') {
        closePopup();
}
}

const closePopup = () => {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
    document.removeEventListener('mousedown', setOverlayListener);       
    document.removeEventListener('keydown', setEscListener);
}

export { setOverlayListener, setEscListener, closePopup }