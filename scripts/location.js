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

const locationContainer = document.querySelector('.cards__locations-list');

const cardTemplate = document.querySelector('#card-template');

const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoContainer = popupPhoto.querySelector('.popup__container-photo');
const popupPhotoDescription = popupPhoto.querySelector('.popup-photo__description');

function setImagePopupInfo(card) {
    popupPhotoContainer.setAttribute('src', card.getAttribute('src'));
    popupPhotoContainer.setAttribute('alt', card.getAttribute('alt'));
    popupPhotoDescription.textContent = card.getAttribute('alt').replace('Фото ', '');
}

function createCard(name, url) {
  const card = cardTemplate.content.cloneNode(true);

  const cardImage = card.querySelector('.location__image');

  const cardLocationName = card.querySelector('.location__name');

  cardImage.setAttribute('src', url);

  cardImage.setAttribute('alt', 'Фото ' + name);

  cardLocationName.textContent = name;

  cardImage.addEventListener('click', () => {
      setImagePopupInfo(cardImage);
      openPopup(popupPhoto);
  })

  const cardLikeButton = card.querySelector('.location__like-button');
  cardLikeButton.addEventListener('click', () => {
    cardLikeButton.classList.toggle('location__like-button_active');
  })

  const cardDeleteButton = card.querySelector('.location__delete-button');
  cardDeleteButton.addEventListener('click', () => {
    cardDeleteButton.closest('.unmarked-list__item').remove();
  })

  return card;
}

function addPhotoCard(name, url) {
    const cardElement = createCard(name, url);
    locationContainer.prepend(cardElement);
};

initialCards.forEach((card) => {
  addPhotoCard(card.name, card.link);
})