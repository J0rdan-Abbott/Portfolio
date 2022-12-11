//makes a box pop up when clicked further info etc...

let modalButton = document.querySelector('.modal-btn');
let modalOverlay = document.querySelector('.modal-overlay');
let closeButton = document.querySelector('.close-btn');

modalButton.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal');
});

closeButton.addEventListener('click', () => {
    if (modalOverlay.classList.contains('open-modal')) {
        modalOverlay.classList.remove('open-modal');
    }
});