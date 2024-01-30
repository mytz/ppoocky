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
