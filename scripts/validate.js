const hasInvalidInput = (inputList) => {
    return inputList.some((item) => {
      if (item.validity.valid) {
        return false;
      }
      else {
        return true;
      }
    })
  };

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
    }
    else {
        buttonElement.disabled = false;
    }
}

const hideErrorMessage = (formElement, inputElement) => {
    //Убрать спан с ошибкой под инпутом
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove('form__input_invalid');
    errorElement.classList.remove('form__input-error_active');

    errorElement.textContent = ''
}

const showErrorMessage = (formElement, inputElement) => {
    //Добавить спан с ошибкой под инпутом
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add('form__input_invalid');
    errorElement.classList.add('form__input-error_active');

    errorElement.textContent = inputElement.validationMessage
}

const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.valid) {
        hideErrorMessage(formElement, inputElement);
    }
    else {
        showErrorMessage(formElement, inputElement);
    }
}

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault;
    })

    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.form__button-save');
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
            })
        });
    }

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));

    formList.forEach((formElement) => {
        setEventListeners(formElement);
    })
};

enableValidation();