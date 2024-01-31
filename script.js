// Obtener la referencia a la imagen de Chucky
const chuckyImage = document.querySelector('.chucky');

// Guardar la ruta original de la imagen de Chucky
const originalChuckySrc = 'https://i.ibb.co/hDJfXfN/chucky1.png';

// Guardar la ruta de la imagen de Chucky en hover
const hoverChuckySrc = 'https://i.ibb.co/S7GyCYB/chucky2.png';

// Crear un objeto de audio para el sonido de hover
const hoverSoundChucky = new Audio('terror.wav');

// Añadir un evento de hover a la imagen de Chucky
chuckyImage.addEventListener('mouseenter', function () {
    // Cambiar la fuente de la imagen a la versión en hover
    chuckyImage.src = hoverChuckySrc;

    // Reproducir el sonido de hover
    hoverSoundChucky.play();
});

// Añadir un evento cuando se retira el mouse de la imagen de Chucky
chuckyImage.addEventListener('mouseleave', function () {
    // Volver a la fuente original de la imagen
    chuckyImage.src = originalChuckySrc;
});

// Obtener la referencia a la imagen de LUZ
const luzImage = document.querySelector('.luz');

// Crear un objeto de audio para el sonido de parpadeo
const parpadeoSound = new Audio('parpadeo.wav');

// Función para cambiar la visibilidad de la imagen de LUZ de manera aleatoria y rápida
function parpadeoRapido() {
    // Reproducir el sonido de parpadeo
    parpadeoSound.play();

    // Generar un número aleatorio entre 0 y 1
    const aleatorio = Math.random();

    // Establecer la visibilidad según el número aleatorio
    luzImage.style.opacity = aleatorio > 0.5 ? 1 : 0;

    // Configurar el próximo parpadeo después de un intervalo aleatorio corto
    const intervaloAleatorio = Math.floor(Math.random() * (200 - 100 + 1) + 100); // Intervalo entre 100 y 200 milisegundos
    setTimeout(parpadeoRapido, intervaloAleatorio);
}

// Iniciar el parpadeo rápido
parpadeoRapido();

// Obtener la referencia a la imagen DEHMI
const dehmiImage = document.querySelector('.dehmi');

// Guardar la ruta de la imagen DEHMI en hover
const hoverDehmiSrc = 'https://i.ibb.co/Rhgv0fg/DEHMI2.png';

// Crear un objeto de audio para el sonido de hover
const hoverSoundDehmi = new Audio('hover.wav');

// Añadir un evento de hover a la imagen DEHMI
dehmiImage.addEventListener('mouseenter', function () {
    // Cambiar la fuente de la imagen a la versión en hover
    dehmiImage.src = hoverDehmiSrc;

    // Reproducir el sonido de hover
    hoverSoundDehmi.play();
});

// Añadir un evento cuando se retira el mouse de la imagen DEHMI
dehmiImage.addEventListener('mouseleave', function () {
    // Volver a la fuente original de la imagen
    dehmiImage.src = 'https://i.ibb.co/ZHFhTQs/DEHMI1.png';
});

// Repetir el mismo proceso para SINBI y MYT
// Obtener la referencia a la imagen SINBI
const sinbiImage = document.querySelector('.sinbi');

// Guardar la ruta de la imagen SINBI en hover
const hoverSinbiSrc = 'https://i.ibb.co/X7MgtMJ/SINBI2.png';

// Añadir un evento de hover a la imagen SINBI
sinbiImage.addEventListener('mouseenter', function () {
    // Cambiar la fuente de la imagen a la versión en hover
    sinbiImage.src = hoverSinbiSrc;

    // Reproducir el sonido de hover
    hoverSoundDehmi.play();
});

// Añadir un evento cuando se retira el mouse de la imagen SINBI
sinbiImage.addEventListener('mouseleave', function () {
    // Volver a la fuente original de la imagen
    sinbiImage.src = 'https://i.ibb.co/qpYK2bd/SINBI1.png';
});

// Obtener la referencia a la imagen MYT
const mytImage = document.querySelector('.myt');

// Guardar la ruta de la imagen MYT en hover
const hoverMytSrc = 'https://i.ibb.co/DwFqq4d/MYT2.png';

// Añadir un evento de hover a la imagen MYT
mytImage.addEventListener('mouseenter', function () {
    // Cambiar la fuente de la imagen a la versión en hover
    mytImage.src = hoverMytSrc;

    // Reproducir el sonido de hover
    hoverSoundDehmi.play();
});

// Añadir un evento cuando se retira el mouse de la imagen MYT
mytImage.addEventListener('mouseleave', function () {
    // Volver a la fuente original de la imagen
    mytImage.src = 'https://i.ibb.co/mtFXDqX/MYT1-copia.png';
});
