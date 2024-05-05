const accountAddButton = document.querySelector('.account__add-button');
const popupAdd = document.querySelector('.popup-add')

const cardForm = document.forms["card-form"];

const nameAddInput = popupAdd.querySelector('.popup__input_type_name');
const linkAddInput = popupAdd.querySelector('.popup__input_type_activity');

function handleCardFormSubmit(event) {
    event.preventDefault();

    addPhotoCard(nameAddInput.value, linkAddInput.value);

    event.target.reset();

    closePopup(popupAdd);
}

accountAddButton.addEventListener('click', () => {
    openPopup(popupAdd);
})

cardForm.addEventListener('submit', handleCardFormSubmit);