/*** RAIN - Main JavaScript * Contiene: Efecto de lluvia, Acordeón,  Videos y Formularios.*/

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. INICIAR EFECTO DE LLUVIA
    initRain();

    // 2. CARRUSEL DE VIDEOS 
    const carousel = document.getElementById('carouselExampleIndicators');
    if (carousel) {
        setupVideoCarousel(carousel);
    }

    // 3. FORMULARIO SERVICIOS 
    const formServicios = document.querySelector('#seccion-servicios-form form');
    if (formServicios) {
        setupFormularioServicios(formServicios);
    }
});

// =====================================================
//  FUNCIONES
// =====================================================

// --- ACORDEÓN "SOBRE MÍ" ---
function toggleSobreMi() {
    const contenido = document.getElementById('contenidoSobreMi');
    const boton = document.querySelector('.btn-sobre-mi');
    
    if (contenido && boton) {
        contenido.classList.toggle('activo');
        boton.classList.toggle('activo');
    }
}

// --- EFECTO DE LLUVIA ---
function initRain(){
    const container = document.querySelector('.rain-background');
  
    if(!container) return; 

    container.innerHTML = '';
    const colors = ['rgba(233, 154, 35, 0.4)', 'rgba(235, 46, 61, 0.5)', 'rgba(52, 211, 153, 0.3)', 'rgba(251, 191, 36, 0.6)'];
    
    const dropsCount = Math.min(Math.max(Math.floor(window.innerWidth / 8), 40), 140);
    
    for(let i=0; i<dropsCount; i++){
        const d = document.createElement('div');
        d.className = 'drop';
        const left = Math.random() * 100;
        const size = (Math.random() * 3) + 3;
        const duration = (Math.random() * 4) + 4;
        const delay = -Math.random() * 20;
        const colorIndex = Math.floor(Math.random() * colors.length);

        d.style.left = left + '%';
        d.style.width = size + 'px';
        d.style.height = size + 'px';
        d.style.background = colors[colorIndex];
        d.style.animationDuration = duration + 's';
        d.style.animationDelay = delay + 's';

        container.appendChild(d);
    }
}

// Regenerar lluvia al redimensionar
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initRain, 300);
});

// --- CONFIGURACIÓN VIDEOS CARRUSEL ---
function setupVideoCarousel(carouselElement) {
    const videos = carouselElement.querySelectorAll('video');
    
   
    if (videos.length > 0) {
        videos[0].play().catch(e => console.log('Autoplay bloqueado por navegador:', e));
    }
    
    carouselElement.addEventListener('slid.bs.carousel', function(event) {
        // Pausar todos
        videos.forEach(v => {
            v.pause();
            v.currentTime = 0;
        });
       
        const activeSlide = event.relatedTarget;
        const activeVideo = activeSlide.querySelector('video');
        if (activeVideo) {
            activeVideo.play().catch(e => console.log('Autoplay bloqueado:', e));
        }
    });
}

// --- CONFIGURACIÓN FORMULARIO SERVICIOS ---
function setupFormularioServicios(formElement) {
    const tiempoInputs = document.querySelectorAll('input[name="tiempo"]');
    const tiempoHidden = document.getElementById('tiempo-seleccionado');
    
  
    formElement.addEventListener('submit', function(e) {
        const tiempoSeleccionado = document.querySelector('input[name="tiempo"]:checked');
        if (tiempoSeleccionado) {
            tiempoHidden.value = tiempoSeleccionado.value;
        }
    });
    
    
    tiempoInputs.forEach(input => {
        input.addEventListener('change', function() {
            tiempoHidden.value = this.value;
        });
    });
}