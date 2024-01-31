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

    // Si la imagen es visible, activar el sonido
    if (luzImage.style.opacity === '1' && !sonidoActivo) {
        sonidoActivo = true;
        parpadeoSound.currentTime = 0;
        parpadeoSound.play();
    }

    // Si la imagen es invisible, detener el sonido
    if (luzImage.style.opacity === '0' && sonidoActivo) {
        sonidoActivo = false;
        parpadeoSound.pause();
        parpadeoSound.currentTime = 0;
    }

    // Configurar el próximo parpadeo después de un intervalo aleatorio
    const intervaloAleatorio = Math.floor(Math.random() * (200 - 100 + 1) + 100);
    setTimeout(() => requestAnimationFrame(parpadeoRapido), intervaloAleatorio);
}

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

/////////////////////////////////////////////////////////////////// REPRODUCTOR

document.addEventListener('DOMContentLoaded', function () {
    const audio = new Audio('c1.mp3'); // Ruta de la primera canción
    let isPlaying = false;
    let isRepeat = false;

    const playButton = document.getElementById('play');
    const backwardButton = document.getElementById('backward');
    const forwardButton = document.getElementById('forward');
    const repeatButton = document.getElementById('repeat');
    const volumeDownButton = document.getElementById('volumeDown');
    const volumeUpButton = document.getElementById('volumeUp');

    playButton.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
    });

    backwardButton.addEventListener('click', function () {
        // Cambiar a la canción anterior
        cambiarCancion('c2.mp3'); // Ruta de la segunda canción
    });

    forwardButton.addEventListener('click', function () {
        // Cambiar a la siguiente canción
        cambiarCancion('c3.mp3'); // Ruta de la tercera canción
    });

    repeatButton.addEventListener('click', function () {
        isRepeat = !isRepeat;
        // Lógica para repetir la canción actual
        // Puedes cambiar la lógica según tu implementación real
    });

    volumeDownButton.addEventListener('click', function () {
        ajustarVolumen('down');
    });

    volumeUpButton.addEventListener('click', function () {
        ajustarVolumen('up');
    });

    // Función para cambiar la canción
    function cambiarCancion(ruta) {
        audio.src = ruta;
        audio.play();
        isPlaying = true;
    }

    // Función para ajustar el volumen
    function ajustarVolumen(direccion) {
        const volumenActual = audio.volume;

        if (direccion === 'up') {
            if (volumenActual < 1) {
                audio.volume = Math.min(volumenActual + 0.1, 1);
            }
        } else if (direccion === 'down') {
            if (volumenActual > 0) {
                audio.volume = Math.max(volumenActual - 0.1, 0);
            }
        }
    }
});
