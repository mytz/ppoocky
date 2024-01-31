// Obtener la referencia a la imagen de Chucky
const chuckyImage = document.querySelector('.chucky');
const originalChuckySrc = 'https://i.ibb.co/hDJfXfN/chucky1.png';
const hoverChuckySrc = 'https://i.ibb.co/S7GyCYB/chucky2.png';
const terrorSoundChucky = new Audio('terror2.wav');
let chuckyMouseOver = false;

chuckyImage.addEventListener('mouseenter', function () {
    chuckyMouseOver = true;
    chuckyImage.src = hoverChuckySrc;
    terrorSoundChucky.play();
});

chuckyImage.addEventListener('mouseleave', function () {
    chuckyMouseOver = false;
    chuckyImage.src = originalChuckySrc;
    terrorSoundChucky.pause();
    terrorSoundChucky.currentTime = 0;
});

// LUZ PAPARDEANDO

const luzImage = document.querySelector('.luz');
const parpadeoSound = new Audio('parpadeo.wav');
let sonidoActivo = false;

function parpadeoRapido() {
    // Generar un número aleatorio entre 0 y 1
    const aleatorio = Math.random();

    // Establecer la visibilidad según el número aleatorio
    luzImage.style.opacity = aleatorio > 0.5 ? 1 : 0;

    // Configurar el próximo parpadeo después de un intervalo aleatorio corto
    const intervaloAleatorio = Math.floor(Math.random() * (200 - 100 + 1) + 100); // Intervalo entre 100 y 200 milisegundos

    // Si la imagen es visible, activar el sonido
    if (luzImage.style.opacity === '1' && !sonidoActivo) {
        sonidoActivo = true;
        parpadeoSound.currentTime = 0;
        parpadeoSound.play();
    }

    setTimeout(function () {
        // La imagen se ha vuelto invisible, detener el sonido
        if (sonidoActivo) {
            parpadeoSound.pause();
            parpadeoSound.currentTime = 0;
            sonidoActivo = false;
        }
        parpadeoRapido();
    }, intervaloAleatorio);
}

// Configurar evento de transición para detectar cuando la imagen se vuelve visible
luzImage.addEventListener('transitionend', function () {
    if (luzImage.style.opacity === '1' && !sonidoActivo) {
        // La imagen se ha vuelto visible, activar el sonido
        sonidoActivo = true;
        parpadeoSound.currentTime = 0;
        parpadeoSound.play();
    }
});

// Iniciar el parpadeo rápido
parpadeoRapido();


// Obtener la referencia a la imagen DEHMI
const dehmiImage = document.querySelector('.dehmi');
const hoverDehmiSrc = 'https://i.ibb.co/Rhgv0fg/DEHMI2.png';
const hoverSoundDehmi = new Audio('hover.wav');
let dehmiMouseOver = false;

dehmiImage.addEventListener('mouseenter', function () {
    dehmiMouseOver = true;
    dehmiImage.src = hoverDehmiSrc;
    hoverSoundDehmi.play();
});

dehmiImage.addEventListener('mouseleave', function () {
    dehmiMouseOver = false;
    dehmiImage.src = 'https://i.ibb.co/ZHFhTQs/DEHMI1.png';
    hoverSoundDehmi.pause();
    hoverSoundDehmi.currentTime = 0;
});

// Repetir el mismo patrón para SINBI y MYT
const sinbiImage = document.querySelector('.sinbi');
const hoverSinbiSrc = 'https://i.ibb.co/X7MgtMJ/SINBI2.png';
const hoverSoundSinbi = new Audio('hover.wav');
let sinbiMouseOver = false;

sinbiImage.addEventListener('mouseenter', function () {
    sinbiMouseOver = true;
    sinbiImage.src = hoverSinbiSrc;
    hoverSoundSinbi.play();
});

sinbiImage.addEventListener('mouseleave', function () {
    sinbiMouseOver = false;
    sinbiImage.src = 'https://i.ibb.co/qpYK2bd/SINBI1.png';
    hoverSoundSinbi.pause();
    hoverSoundSinbi.currentTime = 0;
});

const mytImage = document.querySelector('.myt');
const hoverMytSrc = 'https://i.ibb.co/DwFqq4d/MYT2.png';
const hoverSoundMyt = new Audio('hover.wav');
let mytMouseOver = false;

mytImage.addEventListener('mouseenter', function () {
    mytMouseOver = true;
    mytImage.src = hoverMytSrc;
    hoverSoundMyt.play();
});

mytImage.addEventListener('mouseleave', function () {
    mytMouseOver = false;
    mytImage.src = 'https://i.ibb.co/mtFXDqX/MYT1-copia.png';
    hoverSoundMyt.pause();
    hoverSoundMyt.currentTime = 0;
});

