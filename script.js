// Slider functionality
const slides = document.querySelectorAll('#hero-slider .slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Categories and Products data
const categories = [
    { id: 1, name: 'Camisetas', image: '/imagenes/camisetas.jpg' },
    { id: 2, name: 'Pantalones', image: '/imagenes/pant4.jpg' },
    { id: 3, name: 'Vestidos', image: '/imagenes/vestidos.jpg' },
    { id: 4, name: 'Accesorios', image: '/imagenes/accesorios.jpg' }
];

const products = [
    { id: 1, categoryId: 1, name: 'abrigo ataualpha', price: 19.99, image: '/imagenes/mod1.jpg' },
    { id: 2, categoryId: 1, name: 'abrigo ataualpha', price: 18.99, image: '/imagenes/mod2.jpg' },
    { id: 3, categoryId: 1, name: 'blusa huancaina', price: 24.99, image: '/imagenes/mod5.jpg' },

    { id: 4, categoryId: 2, name: 'Jeans costa', price: 39.99, image: '/imagenes/pant6.jpg' },
    { id: 5, categoryId: 2, name: 'Jeans costa', price: 39.99, image: '/imagenes/pant3.jpg' },
    { id: 6, categoryId: 2, name: 'Jeans costa', price: 39.99, image: '/imagenes/pant4.jpg' },

    { id: 7, categoryId: 3, name: 'vestido amoazonas', price: 49.99, image: '/imagenes/mod4.jpg' },
    { id: 8, categoryId: 3, name: 'vestido andino', price: 49.99, image: '/imagenes/mod3.jpg' },
    { id: 9, categoryId: 3, name: 'vestido costa', price: 49.99, image: '/imagenes/mod2.jpg' },

    { id: 10, categoryId: 4, name: 'sombreros', price: 29.99, image: '/imagenes/accesorios.jpg' },
    { id: 11, categoryId: 4, name: 'sombreros', price: 29.99, image: '/imagenes/pant2.jpg' },
    { id: 12, categoryId: 4, name: 'sombreros', price: 29.99, image: '/imagenes/perú1.webp' }
];

// Render categories
function renderCategories() {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = categories.map(category => `
        <div class="col-md-3 mb-4">
            <div class="category-item text-center p-3" onclick="showProducts(${category.id})">
                <img src="${category.image}" alt="${category.name}" class="mb-3">
                <h3>${category.name}</h3>
            </div>
        </div>
    `).join('');
}

// Render products by category
function showProducts(categoryId) {
    const productList = document.getElementById('product-list');
    const filteredProducts = products.filter(product => product.categoryId === categoryId);
    productList.innerHTML = filteredProducts.map(product => `
        <div class="col-md-4 mb-4">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Initial render
renderCategories();

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const navLinks = document.querySelectorAll('.fullscreen-nav a');

    // Función para abrir/cerrar el menú de pantalla completa
    function toggleFullscreenMenu() {
        fullscreenMenu.classList.toggle('active');
        navbarToggler.classList.toggle('active');
    }

    // Event listener para el botón de menú
    navbarToggler.addEventListener('click', toggleFullscreenMenu);

    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', toggleFullscreenMenu);
    });

    // Cambiar el estilo del navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Manejar clic en el icono del carrito
    const cartIcons = document.querySelectorAll('.cart-icon');
    cartIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            // Aquí puedes agregar la lógica para abrir el carrito o redirigir a la página del carrito
            console.log('Carrito clickeado');
        });
    });
});