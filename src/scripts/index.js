import css from '../pages/index.css'
import { initialCards } from './cards'
import { createCard,deleteCard } from './card'

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

initialCards.forEach((data) => {
 const newCard = createCard(data, deleteCard)
 newCard.append(newCard);
})