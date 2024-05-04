const accountAddButton = document.querySelector('.account__add-button');
const popupAddCloseButton = document.querySelector('.popup-add__close-button');
const popupAdd = document.querySelector('.popup-add')

const nameAddInput = popupAdd.querySelector('.popup__input_type_name');
const linkAddInput = popupAdd.querySelector('.popup__input_type_activity');

function submitAddForm(event) {
    event.preventDefault();
    addPhotoCard(nameAddInput.value, linkAddInput.value);
    closeOverlay(popupAdd);
}

accountAddButton.addEventListener('click', () => {
    openOverlay(popupAdd);
})

popupAddCloseButton.addEventListener('click', () => {
    closeOverlay(popupAdd);
})

popupAdd.addEventListener('submit', submitAddForm);

popupAdd.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        submitAddForm(event);
    }
})