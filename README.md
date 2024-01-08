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
                onclick: 'addCarrito("' + item.nombre + '", ' + item.precio + ')'
            });

            divProducto.append(imagen, nombre, precio, descripcion, botonCarrito);

            sectionVestimenta.append(divProducto);
        });
    });
});

```

**AddCarrito:**

Con este codigo tenemos una función con la que agregamos los productos al carrito.
Todas las pestañas con productos tienen este codigo.

```

function addCarrito(nombre, precio) {
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    
    const nuevoProducto = { nombre: nombre, precio: precio };
    carrito.push(nuevoProducto);

    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Añadido al carrito: ' + nombre + ' - $' + precio.toFixed(2));
}


```

**Carrito:**

Con este codigo mostramos todos los productos que se han añadido en el carrito y en el caso de que no haya nada añadido va a salir un mensaje que diga que no hay ningún producto en el carrito.

```

$(document).ready(function () {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const sectionCarrito = $('#carrito-productos');

    sectionCarrito.empty();
    sectionCarrito.append('<h4>Carrito de Compras</h4>');

    if (carrito.length === 0) {
        sectionCarrito.append('<p>¡Tu carrito está vacío! Agrega algunos productos.</p>');
    } else {
        let total = 0;

        $.each(carrito, function (index, producto) {
            const divProducto = $('<div>').addClass('producto-en-carrito');
            const nombre = $('<p>').text(producto.nombre);
            const precio = $('<p>').text('$' + producto.precio.toFixed(2));

            const botonEliminar = $('<button>').text('Eliminar').click(function () {
                quitarProducto(index);
            });

            divProducto.append(nombre, precio, botonEliminar);
            sectionCarrito.append(divProducto);

            total += producto.precio;
        });
```

Este codigo nos muestra la suma total del precio de todos los productos añadidos.

```
sectionCarrito.append('<h4 class="titulo-carrito">Precio total de su compra</h4>');
sectionCarrito.append('<p class="carrito-total">Total: $' + total.toFixed(2) + '</p>');
```

Con esta función podemos eliminar productos que hayamos añadido al carrito.

```
function quitarProducto(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload();
}
```
Luego llamamos a la función anterior en este botón para eliminar el producto.

```
const botonEliminar = $('<button>').text('Eliminar').click(function () {
 quitarProducto(index);
```
     

