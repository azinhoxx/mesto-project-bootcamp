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

const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoContainer = popupPhoto.querySelector('.popup__container-photo');
const popupPhotoDescription = popupPhoto.querySelector('.popup-photo__description');

function reloadPopupInfo(card) {
    popupPhotoContainer.setAttribute('src', card.getAttribute('src'));
    popupPhotoContainer.setAttribute('alt', card.getAttribute('alt'));
    popupPhotoDescription.textContent = card.getAttribute('alt').replace('Фото ', '');
}

function addPhotoCard(name, url) {
    locationContainer.insertAdjacentHTML('afterbegin', `
    <li class="unmarked-list__item">
    <article class="location">
        <button class="location__delete-button" type="button" aria-label="Удалить"></button>
        <img class="location__image" src="${url}" alt="Фото ${name}">
        <div class="location__info-box">
            <h2 class="location__name">${name}</h2>
            <button title="Лайк" class="location__like-button" type="button"></button>
        </div>
    </article>
    </li>
    `)

    const firstCard = locationContainer.querySelector('.location');
    const firstCardPhoto = firstCard.querySelector('.location__image');

    firstCardPhoto.addEventListener('click', () => {
        reloadPopupInfo(firstCardPhoto);
        openOverlay(popupPhoto);
    })

    const firstCardLikeButton = firstCard.querySelector('.location__like-button');
    firstCardLikeButton.addEventListener('click', () => {
      if (firstCardLikeButton.classList.contains('location__like-button_active')) {
        firstCardLikeButton.classList.remove('location__like-button_active');
      } else {
        firstCardLikeButton.classList.add('location__like-button_active');
      }
    })

    const firstCardDeleteButton = firstCard.querySelector('.location__delete-button');
    firstCardDeleteButton.addEventListener('click', () => {
      firstCard.parentElement.remove();
    })
};

for (let i = 0; i < initialCards.length; ++i) {
    addPhotoCard(initialCards[i].name, initialCards[i].link);
}

const closeCard = document.querySelector('.popup-photo__close-button');

closeCard.addEventListener('click', () => {
    closeOverlay(popupPhoto);
})
