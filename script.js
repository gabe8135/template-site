//animação do carousel com as marcas
let index = 0;

function runCarousel() {
    const imgs = document.querySelectorAll('.carousel__img');
    index++;

    if (index >= imgs.length / 2) {
        index = 0;
    }

    imgs.forEach((img, i) => {
        img.style.transform = `translateX(${(i - index) * 250}%)`;
    });
}

setInterval(runCarousel, 2000); // Muda a imagem a cada 2 segundos


// Animação da div grafico 
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;
    const container = document.querySelector('.grafico');
    const rotation = 25 - (scrollPosition / (pageHeight / 5)) * 25;
    container.style.transform = 'perspective(600px) rotateX(' + (rotation > 0 ? rotation : 0) + 'deg)';
});


