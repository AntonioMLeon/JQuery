$(document).ready(function () {
    const urlJson = '../json/libros.json';  
    const sectionLibros = $('section');  

    $.getJSON(urlJson, function (data) {
        const libros = data.libros;  

        $.each(libros, function (index, libro) {  
            const divProducto = $('<div>').addClass('producto');
            const imagen = $('<img>').attr('src', libro.imagen).attr('alt', libro.nombre).addClass('img-producto img-' + index);
            const nombre = $('<h3>').text(libro.nombre);
            const precio = $('<p>').text('$' + libro.precio.toFixed(2));
            const descripcion = $('<p>').text(libro.descripcion);

            const botonCarrito = $('<input>').addClass('btn btn-outline-light fw-bold w-80 h-40 fs-4 mb-4').attr({
                type: 'button',
                value: 'Añadir al carrito',
                onclick: 'addCarrito("' + libro.nombre + '", ' + libro.precio + ')'
            });

            divProducto.append(imagen, nombre, precio, descripcion, botonCarrito);

            sectionLibros.append(divProducto);  
        });
    });
});

