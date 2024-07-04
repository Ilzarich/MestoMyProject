const cardTemplate = document.querySelector('#card-template').content;

const createCard = (data, deleteUserCard) => {
    const templateClone = cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardBtnDelete = cardList.querySelector('.card__delete-button');
    
    const cardImage = templateClone.querySelector('.card__image');
    cardImage.src = data.link;
    cardImage.alt = data.name;

    cardImage.querySelector('.card__title').textContent = data.name;
    cardBtnDelete.addEventListener('click', deleteUserCard);

    return templateClone
}

const deleteCard = card => {
    card.remove();
}



export {createCard, deleteCard}