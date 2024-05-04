const accountEditButton = document.querySelector('.account__edit-button');
const popupEditCloseButton = document.querySelector('.popup-edit__close-button');
const popupEdit = document.querySelector('.popup-edit');

const nameEditInput = popupEdit.querySelector('.popup__input_type_name');
const jobEditInput = popupEdit.querySelector('.popup__input_type_activity');

const accountName = document.querySelector('.account__name');
const accountTitle = document.querySelector('.account__title');

accountEditButton.addEventListener('click', () => {
    openOverlay(popupEdit);
})

popupEditCloseButton.addEventListener('click', () => {
    closeOverlay(popupEdit);
})

function handleFormSubmit(event) {
    event.preventDefault();
    accountName.textContent = nameEditInput.value;
    accountTitle.textContent = jobEditInput.value;
    closeOverlay(popupEdit);
}

popupEdit.addEventListener('submit', handleFormSubmit);