// parallax effect
const parallax = document.getElementById('parallax');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

// light/dark mode toggle
let lightMode = localStorage.getItem('lightMode');
const lightModeToggle = document.querySelector('#light-mode');

const enableLightMode = () => {
    document.body.classList.add('light-mode');
    localStorage.setItem('lightMode', 'enabled');
};

const disableLightMode = () => {
    document.body.classList.remove('light-mode');
    localStorage.removeItem('lightMode');
};

if (lightMode === "enabled") {
    enableLightMode();
};

lightModeToggle.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightMode');
    if (lightMode !== "enabled") {
        enableLightMode();
    } else {
        disableLightMode();
    };
});