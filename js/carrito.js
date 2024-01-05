$(document).ready(function () {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const sectionCarrito = $('#carrito-productos');

    // Limpia el contenido actual de la sección
    sectionCarrito.empty();

    
    sectionCarrito.append('<h4>Carrito de Compras</h4>');

    
    if (carrito.length === 0) {
        sectionCarrito.append('<p>¡Tu carrito está vacío! Agrega algunos productos.</p>');
    } else {
        
        $.each(carrito, function (index, producto) {
            const divProducto = $('<div>').addClass('producto-en-carrito');
            const nombre = $('<p>').text(producto.nombre);
            const precio = $('<p>').text('$' + producto.precio.toFixed(2));

            
            const btnEliminar = $('<button>').text('Eliminar').click(function () {
                removeProduct(index);
            });

            
            divProducto.append(nombre, precio, btnEliminar);

            
            sectionCarrito.append(divProducto);
        });
    }
});


function removeProduct(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

   
    carrito.splice(index, 1);

    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    
    location.reload();
}

  
  