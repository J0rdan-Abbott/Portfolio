let bars = document.querySelector('.sidebar-toggle');
let sideBar = document.querySelector('.sidebar');

bars.addEventListener('click', function() {
    if (sideBar.classList.contains('show-sidebar')) {
        sideBar.classList.remove('show-sidebar');
    }
    else {
        sideBar.classList.add('show-sidebar');
    }
});

// can also write - sideBar.classList.toggle('show-sidebar');

let closeButton = document.querySelector('.close-btn');

closeButton.addEventListener('click', () => {
    sideBar.classList.remove('show-sidebar');
});