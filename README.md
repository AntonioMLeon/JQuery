# JQuery

# Figma

![Imagen1](figma1.png)

![imagen2](figma2.png)



# Enlace Figma

https://www.figma.com/file/ZI4BhrLQrmRAw4pUO1Decl/Untitled?type=design&node-id=0%3A1&mode=design&t=J1CkLgchQ4IStOp5-1


# Funcionalida de la web:

**Carousel:**

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

**JSON:**

Con este código lo que hacemos es recoger la información del JSON, en este caso vestimenta y creamos los elementos HTML para mostrar toda la información del producto.
Además también tenemos un botón de Boostrap para añadir el elemento al carrito.
Todas las pestañas tiene este código para hacer que la información sea dinámica y tener la funcionalidad del botón.

```
$(document).ready(function () {
    const urlJson = '../json/vestimenta.json';
    const sectionVestimenta = $('section');

    $.getJSON(urlJson, function (data) {
        const vestimenta = data.vestimenta;

        $.each(vestimenta, function (index, item) {
            const divProducto = $('<div>').addClass('producto');
            const imagen = $('<img>').attr('src', item.imagen).attr('alt', item.nombre).addClass('img-producto img-' + index);
            const nombre = $('<h3>').text(item.nombre);
            const precio = $('<p>').text('$' + item.precio.toFixed(2));
            const descripcion = $('<p>').text(item.descripcion);

            const botonCarrito = $('<input>').addClass('btn btn-outline-light fw-bold w-80 h-40 fs-4 mb-4').attr({
                type: 'button',
                value: 'Añadir al carrito',
                onclick: 'addToCart("' + item.nombre + '", ' + item.precio + ')'
            });

            divProducto.append(imagen, nombre, precio, descripcion, botonCarrito);

            sectionVestimenta.append(divProducto);
        });
    });
});

```

**JSON:**

