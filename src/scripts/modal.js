// закрытие попапа через esc
const handleEscUp = (evt) => {
    if(evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_is-opened');
        closeModalWindow(activePopup);
    }
};

export const openModalWindow = (modalWindow) => {
    modalWindow.classList.add('popup_is-opened');
    document.addEventListener('keyup', handleEscUp);
};

export const closeModalWindow= (modalWindow) => {
    modalWindow.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', handleEscUp);
};

export const setCloseModalWindowEventListeners = (modalWindow) => {
    const closeButonElement = modalWindow.querySelector('.popup__close');
    closeButonElement.addEventListener('click', () => {
        closeModalWindow(modalWindow);
    });

    modalWindow.addEventListener('mousedown', (evt) => {
        if(evt.target.classList.contains('popup')) {
            closeModalWindow(modalWindow);
        }
    });
};

