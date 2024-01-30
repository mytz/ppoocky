// Obtener la referencia a la imagen de Chucky
const chuckyImage = document.querySelector('.chucky');

// Guardar la ruta original de la imagen de Chucky
const originalChuckySrc = 'https://i.ibb.co/hDJfXfN/chucky1.png';

// Guardar la ruta de la imagen de Chucky en hover
const hoverChuckySrc = 'https://i.ibb.co/S7GyCYB/chucky2.png';

// Crear un objeto de audio
const terrorSound = new Audio('terror.wav');

// Añadir un evento de hover a la imagen de Chucky
chuckyImage.addEventListener('mouseover', function () {
    // Cambiar la fuente de la imagen a la versión en hover
    chuckyImage.src = hoverChuckySrc;

    // Reproducir el sonido
    terrorSound.play();
});

// Añadir un evento cuando se retira el mouse de la imagen de Chucky
chuckyImage.addEventListener('mouseout', function () {
    // Volver a la fuente original de la imagen
    chuckyImage.src = originalChuckySrc;
});
