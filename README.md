# JQuery

# Figma

![Imagen1](figma1.png)

![imagen2](figma2.png)



# Enlace Figma

https://www.figma.com/file/ZI4BhrLQrmRAw4pUO1Decl/Untitled?type=design&node-id=0%3A1&mode=design&t=J1CkLgchQ4IStOp5-1


# Funcionalida de la web:

**Carousel**

Con este codigo lo que hacemos es inicializar el carousel, controlar el tiempo que tarda en pasar a la siguiente imagen y la posibilidad de pulsar click para ir ala siguiente imagen o a la anterior.

```
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
```
