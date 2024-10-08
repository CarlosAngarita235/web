// Objeto con las traducciones
const translations = {
    'es': {
        'nav-home': 'Inicio',
        'nav-gallery': 'Galería y Eventos',
        'nav-contact': 'Contacto',
        'hero-title': 'DESCUBRE EL OASIS SECRETO DEL PLACER SWINGER',
        'hero-description': '<strong>Opaque LA</strong> te invita a explorar tus deseos más profundos en un ambiente sofisticado y discreto. ¡Atrévete a vivir la experiencia!',
        'btn-buy-now': 'COMPRAR AHORA',
        'form-title': 'Introduce tu código para continuar:',
        'btn-validate': 'Validar',
        'gallery-title': 'Galería y Eventos',
        'gallery-item-1': 'NOCHE DE SOLO PAREJAS',
        'gallery-item-2': 'NOCHE DE SOLO PAREJAS',
        'gallery-item-3': 'NOCHE DE SOLO PAREJAS',
        'contact-title': 'Contacto',
        'contact-description': 'Para contactar, envíanos un mensaje de texto al siguiente número:',
        'btn-send-message': 'Enviar Mensaje de Texto',
        'validation-success': 'Código exitoso, ¿quieres realizar la compra de tu boleta para vincularla con la boleta de este código? <a href="sms:+14086503684?body=Hola,%20me%20gustaría%20realizar%20el%20pago">Pagar</a>',
        'validation-error': 'Código incorrecto. Por favor, inténtalo de nuevo.',
        'countdown-event': '¡Es el día del evento!',
        'days': 'días',
        'hours': 'horas',
        'minutes': 'minutos',
        'seconds': 'segundos'
    },
    'en': {
        'nav-home': 'Home',
        'nav-gallery': 'Gallery and Events',
        'nav-contact': 'Contact',
        'hero-title': 'DISCOVER THE SECRET OASIS OF SWINGER PLEASURE',
        'hero-description': '<strong>Opaque LA</strong> invites you to explore your deepest desires in a sophisticated and discreet environment. Dare to live the experience!',
        'btn-buy-now': 'BUY NOW',
        'form-title': 'Enter your code to continue:',
        'btn-validate': 'Validate',
        'gallery-title': 'Gallery and Events',
        'gallery-item-1': 'COUPLES ONLY NIGHT',
        'gallery-item-2': 'COUPLES ONLY NIGHT',
        'gallery-item-3': 'COUPLES ONLY NIGHT',
        'contact-title': 'Contact',
        'contact-description': 'To contact us, send a text message to the following number:',
        'btn-send-message': 'Send Text Message',
        'validation-success': 'Successful code, do you want to purchase your ticket to link it with the ticket of this code? <a href="sms:+14086503684?body=Hello,%20I%20would%20like%20to%20make%20the%20payment">Pay</a>',
        'validation-error': 'Incorrect code. Please try again.',
        'countdown-event': "It's the day of the event!",
        'days': 'days',
        'hours': 'hours',
        'minutes': 'minutes',
        'seconds': 'seconds'
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);

    // Seleccionar todos los elementos que requieren traducción
    const elements = document.querySelectorAll('[data-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = translations[lang][key];

        if (translation) {
            if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
                element.placeholder = translation;
            } else if (element.tagName.toLowerCase() === 'a' && element.hasAttribute('href')) {
                element.innerHTML = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });

    // Actualizar placeholder del input de código
    const codigoInput = document.getElementById('codigoInput');
    codigoInput.placeholder = lang === 'es' ? 'Ingresa tu código aquí' : 'Enter your code here';

    // Actualizar enlace del botón de contacto
    const btnSendMessage = document.querySelector('[data-key="btn-send-message"]');
    if (btnSendMessage) {
        btnSendMessage.href = lang === 'es' ?
            'sms:+14086503684?body=Hola,%20me%20gustaría%20obtener%20más%20información' :
            'sms:+14086503684?body=Hello,%20I%20would%20like%20to%20get%20more%20information';
    }

    // Reiniciar el contador para actualizar los textos
    startCountdown();
}

// Event listeners para las banderas
document.addEventListener('DOMContentLoaded', function() {
    const flags = document.querySelectorAll('.flag');
    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.id; // 'es' o 'en'
            changeLanguage(lang);
        });
    });

    // Establecer el idioma inicial
    const savedLang = localStorage.getItem('selectedLanguage') || 'es';
    changeLanguage(savedLang);
});

function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    var menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle("active");
    var isExpanded = navLinks.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
}

function mostrarGaleria() {
    var galeria = document.getElementById('galeria');
    if (galeria.style.display === "none" || galeria.style.display === "") {
        galeria.style.display = "block";
        galeria.scrollIntoView({ behavior: 'smooth' });
    } else {
        galeria.style.display = "none";
    }
}

function mostrarFormulario() {
    var codigoForm = document.getElementById('codigoForm');
    codigoForm.style.display = 'block';
    codigoForm.scrollIntoView({ behavior: 'smooth' });
}

function validarCodigo() {
    const lang = localStorage.getItem('selectedLanguage') || 'es';
    const codigoCorrecto = "VX82QR7";
    const codigoIngresado = document.getElementById('codigoInput').value;
    const mensajeDiv = document.getElementById('mensaje');

    if (codigoIngresado === codigoCorrecto) {
        mensajeDiv.style.display = 'block';
        mensajeDiv.innerHTML = translations[lang]['validation-success'];
        mensajeDiv.classList.remove('error');
        mensajeDiv.classList.add('exito');
    } else {
        mensajeDiv.style.display = 'block';
        mensajeDiv.innerHTML = translations[lang]['validation-error'];
        mensajeDiv.classList.remove('exito');
        mensajeDiv.classList.add('error');
    }
}

// Configuración del contador regresivo
function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    const targetDate = new Date("2024-10-31T00:00:00").getTime();

    const updateCountdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const lang = localStorage.getItem('selectedLanguage') || 'es';

        if (distance < 0) {
            clearInterval(updateCountdown);
            countdownElement.innerHTML = translations[lang]['countdown-event'];
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="countdown-container">
                <div class="countdown-element">${days}<span>${translations[lang]['days']}</span></div>
                <div class="countdown-element">${hours}<span>${translations[lang]['hours']}</span></div>
                <div class="countdown-element">${minutes}<span>${translations[lang]['minutes']}</span></div>
                <div class="countdown-element">${seconds}<span>${translations[lang]['seconds']}</span></div>
            </div>
        `;
    }, 1000);
}

startCountdown();
