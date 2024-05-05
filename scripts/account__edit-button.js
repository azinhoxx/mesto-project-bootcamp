const profileEditButton = document.querySelector('.account__edit-button');
const popupProfileEdit = document.querySelector('.popup-edit');

const profileForm = document.forms["profile-form"];

const nameEditInput = popupProfileEdit.querySelector('.popup__input_type_name');
const jobEditInput = popupProfileEdit.querySelector('.popup__input_type_activity');

const profileName = document.querySelector('.account__name');
const profileTitle = document.querySelector('.account__title');

profileEditButton.addEventListener('click', () => {
    openPopup(popupProfileEdit);
})

function handleProfileFormSubmit(event) {
    event.preventDefault();

    profileName.textContent = nameEditInput.value;
    profileTitle.textContent = jobEditInput.value;

    closePopup(popupProfileEdit);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);