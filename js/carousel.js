$(document).ready(function () {
    // Inicializar el carrusel
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
      interval: 3000,  // Desactivar la reproducción automática
      pause: 'hover'
    });

    // Botón Siguiente
    $('.carousel-control-next').on('click', function () {
      myCarousel.next();
    });

    // Botón Anterior
    $('.carousel-control-prev').on('click', function () {
      myCarousel.prev();
    });
  });