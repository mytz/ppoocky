// Obtener la referencia a la imagen de Chucky
const chuckyImage = document.querySelector('.chucky');
const chuckySound = new Audio('terror.wav');

chuckyImage.addEventListener('mouseenter', function () {
    chuckyImage.src = 'https://i.ibb.co/S7GyCYB/chucky2.png';
    chuckySound.play();
});

chuckyImage.addEventListener('mouseleave', function () {
    chuckyImage.src = 'https://i.ibb.co/hDJfXfN/chucky1.png';
    chuckySound.pause();
    chuckySound.currentTime = 0;
});

// Obtener la referencia a la imagen de LUZ
const luzImage = document.querySelector('.luz');
const luzSound = new Audio('parpadeo.wav');

luzImage.addEventListener('mouseenter', function () {
    luzSound.play();
});

luzImage.addEventListener('mouseleave', function () {
    luzSound.pause();
    luzSound.currentTime = 0;
});

// Repetir el mismo proceso para DEHMI, SINBI y MYT
// Obtener la referencia a la imagen DEHMI
const dehmiImage = document.querySelector('.dehmi');
const dehmiSound = new Audio('hover.wav');

dehmiImage.addEventListener('mouseenter', function () {
    dehmiImage.src = 'https://i.ibb.co/Rhgv0fg/DEHMI2.png';
    dehmiSound.play();
});

dehmiImage.addEventListener('mouseleave', function () {
    dehmiImage.src = 'https://i.ibb.co/ZHFhTQs/DEHMI1.png';
    dehmiSound.pause();
    dehmiSound.currentTime = 0;
});

// Obtener la referencia a la imagen SINBI
const sinbiImage = document.querySelector('.sinbi');
const sinbiSound = new Audio('hover.wav');

sinbiImage.addEventListener('mouseenter', function () {
    sinbiImage.src = 'https://i.ibb.co/X7MgtMJ/SINBI2.png';
    sinbiSound.play();
});

sinbiImage.addEventListener('mouseleave', function () {
    sinbiImage.src = 'https://i.ibb.co/qpYK2bd/SINBI1.png';
    sinbiSound.pause();
    sinbiSound.currentTime = 0;
});

// Obtener la referencia a la imagen MYT
const mytImage = document.querySelector('.myt');
const mytSound = new Audio('hover.wav');

mytImage.addEventListener('mouseenter', function () {
    mytImage.src = 'https://i.ibb.co/DwFqq4d/MYT2.png';
    mytSound.play();
});

mytImage.addEventListener('mouseleave', function () {
    mytImage.src = 'https://i.ibb.co/mtFXDqX/MYT1-copia.png';
    mytSound.pause();
    mytSound.currentTime = 0;
});
