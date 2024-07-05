const getTemplate = () => {
    return document.querySelector('#card-template').content.querySelector('.card').cloneNode(true);
}

export const createCardElement = (data, {onPreviewPicture, onLikeIcon, onDeleteCard}) => {
    const cardElement = getTemplate();
    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.style.backgroundImage = `url(${data.link})`;
    cardElement.querySelector('.card__title').textContent = data.name;

    if(onPreviewPicture) {
        cardImage.addEventListener('click', () => onPreviewPicture(data));
    }

    if(onLikeIcon) {
        likeButton.addEventListener('click', onLikeIcon)
    }

    if(onDeleteCard) {
        deleteButton.addEventListener('click', onDeleteCard);
    }

    return cardElement
};

export const handleDeleteCard = (evt) => {
    evt.target.closest('.card').remove();
}

export const handleLikeIcon = (evt) => {
    evt.target.classList.toggle('card__like-button_is-active')
}