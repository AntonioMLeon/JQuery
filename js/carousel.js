$(document).ready(function () {
    
    var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
      interval: 3000,  
      pause: 'hover'
    });

    
    $('.carousel-siguiente').on('click', function () {
      carousel.next();
    });

    
    $('.carousel-anterior').on('click', function () {
      carousel.prev();
    });
  });