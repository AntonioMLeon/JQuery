
$(document).ready(function () {
    // Inicializar el carrusel
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
      interval: false  // Desactivar la reproducción automática
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