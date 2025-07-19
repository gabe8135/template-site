// Animação da div grafico (código que você já tinha).
window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const container = document.querySelector('.grafico');
    const rotation = 25 - (scrollPosition / (pageHeight / 5)) * 25;
    container.style.transform = 'perspective(600px) rotateX(' + (rotation > 0 ? rotation : 0) + 'deg)';
});

// Carrossel de Marcas
let indexMarcas = 0;
let isTransitioningMarcas = false;

function runCarouselMarcas() {
    const carousel = document.querySelector('.carousel-inner-marcas');
    const items = document.querySelectorAll('.carousel-item-marcas');

    if (items.length === 0) {
        return;
    }

    if (isTransitioningMarcas) {
        return;
    }

    isTransitioningMarcas = true;

    indexMarcas++;

    // Mover a primeira imagem para fora da tela
    items[0].style.transform = 'translateX(-100%)';

    // Clonar a primeira imagem e adicionar ao final
    const firstItem = items[0].cloneNode(true);
    carousel.appendChild(firstItem);

    // Remover a primeira imagem
    carousel.removeChild(items[0]);

    // Reposicionar as imagens
    items.forEach((item, i) => {
        item.style.transform = `translateX(0%)`;
    });

    isTransitioningMarcas = false;
}

// Chama a função runCarouselMarcas para que a primeira imagem seja clonada e removida.
runCarouselMarcas();



// Animação da div grafico 
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const container = document.querySelector('.grafico');
    const rotation = 25 - (scrollPosition / (pageHeight / 5)) * 25;
    container.style.transform = 'perspective(600px) rotateX(' + (rotation > 0 ? rotation : 0) + 'deg)';
});


