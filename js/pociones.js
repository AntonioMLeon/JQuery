$(document).ready(function () {
    const urlJson = '../json/pociones.json'; 
    const sectionPociones = $('section'); 

    $.getJSON(urlJson, function (data) {
        const pociones = data.pociones; 

        $.each(pociones, function (index, item) {
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

            sectionPociones.append(divProducto); 
        });
    });
});

function addCarrito(nombre, precio) {
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    
    const nuevoProducto = { nombre: nombre, precio: precio };
    carrito.push(nuevoProducto);

    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Añadido al carrito: ' + nombre + ' - $' + precio.toFixed(2));
}
