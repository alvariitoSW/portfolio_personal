// scripts/common.js

// Smooth scrolling para enlaces de navegación
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar menú móvil si existe
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Cerrar menú móvil al hacer clic en un enlace
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Efecto de navbar en scroll
function initNavbarScroll() {
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white/98', 'shadow-lg');
                navbar.classList.remove('bg-white/95');
            } else {
                navbar.classList.add('bg-white/95');
                navbar.classList.remove('bg-white/98', 'shadow-lg');
            }
        });
    }
}

// Inicialización común para todas las páginas
function initCommonFeatures() {
    // Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
        initSmoothScrolling();
        initMobileMenu();
        initNavbarScroll();
    });
}

// Función para crear favicon dinámicamente
function createFavicon(text) {
    const favicon = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%23667eea' rx='6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='12' font-family='monospace' fill='white' font-weight='bold'>${text}</text></svg>`;
    
    // Crear el elemento link para el favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = favicon;
    
    // Agregar al head
    document.head.appendChild(link);
}

// Función para crear botón de regreso a la página principal
function createBackButton() {
    const backButton = document.createElement('div');
    backButton.className = 'fixed top-4 left-4 z-50';
    backButton.innerHTML = `
        <a href="../index.html" class="inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-primary font-semibold rounded-full shadow-lg backdrop-blur-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <i class="fas fa-arrow-left"></i>
            <span>Volver al Portfolio</span>
        </a>
    `;
    document.body.appendChild(backButton);
}

// Función para crear footer común
function createCommonFooter() {
    const footer = document.createElement('footer');
    footer.className = 'bg-gray-900 text-gray-300 text-center py-6 sm:py-8 mt-8';
    footer.innerHTML = `
        <p class="text-sm sm:text-base">&copy; 2024 Mi Portfolio de Ciencia e Ingeniería de Datos. Diseñado con pasión por los datos.</p>
    `;
    document.body.appendChild(footer);
}

// Ejecutar inicialización común
initCommonFeatures();