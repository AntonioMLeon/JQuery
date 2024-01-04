$(document).ready(function () {
    
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
      interval: 3000,  
      pause: 'hover'
    });

    
    $('.carousel-control-next').on('click', function () {
      myCarousel.next();
    });

    
    $('.carousel-control-prev').on('click', function () {
      myCarousel.prev();
    });
  });