let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const visibleSlides = 4; // Quantidade de imagens visíveis ao mesmo tempo

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    const track = document.querySelector('.carousel-track');
    const slideWidth = slides[0].offsetWidth + 20; // largura do slide + margem
    
    // Se o movimento levar para além da última imagem visível, voltar ao início
    if (currentSlide > totalSlides - visibleSlides) {
        currentSlide = 0;
    }
    
    // Se o movimento for para antes da primeira imagem, ir para o final
    if (currentSlide < 0) {
        currentSlide = totalSlides - visibleSlides;
    }
    
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}