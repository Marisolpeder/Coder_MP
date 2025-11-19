// =====================================================
//   FUNCIÓN PARA EL ACORDEÓN "SOBRE MÍ"
// =====================================================
function toggleSobreMi() {
    const contenido = document.getElementById('contenidoSobreMi');
    const boton = document.querySelector('.btn-sobre-mi');
    
    if (contenido && boton) {
        contenido.classList.toggle('activo');
        boton.classList.toggle('activo');
    }
}

// =====================================================
//   EFECTO DE LLUVIA
// =====================================================
function initRain(){
    const container = document.querySelector('.rain-background');
    if(!container) {
        console.warn('No se encontró el contenedor .rain-background');
        return;
    }
    container.innerHTML = '';
    
    // Colores de los puntos del fondo original
    const colors = [
        'rgba(233, 154, 35, 0.4)',   // naranja
        'rgba(235, 46, 61, 0.5)',    // rojo
        'rgba(52, 211, 153, 0.3)',   // verde
        'rgba(251, 191, 36, 0.6)'    // amarillo
    ];
    
    const dropsCount = Math.min(Math.max(Math.floor(window.innerWidth / 8), 40), 140); // adaptativo según ancho
    for(let i=0;i<dropsCount;i++){
        const d = document.createElement('div');
        d.className = 'drop';
        const left = Math.random() * 100;                    // posición horizontal %
        const size = (Math.random() * 3) + 3;                // tamaño del círculo (3-6px)
        const duration = (Math.random() * 4) + 4;            // duración en s (4-8s, más lento)
        const delay = -Math.random() * 20;                   // arranque distribuido en s (negativo para empezar ya)
        const colorIndex = Math.floor(Math.random() * colors.length); // color aleatorio

        d.style.left = left + '%';
        d.style.width = size + 'px';
        d.style.height = size + 'px';
        d.style.background = colors[colorIndex];
        d.style.animationDuration = duration + 's';
        d.style.animationDelay = delay + 's';

        container.appendChild(d);
    }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRain);
} else {
    initRain();
}

// Regenerar al redimensionar para mantener densidad adecuada
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initRain, 300);
});

