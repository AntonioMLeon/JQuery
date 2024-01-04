$(document).ready(function () {
    const urlJson = '../json/libros.json';  // Cambiado el nombre del archivo JSON
    const sectionLibros = $('section');  // Cambiado el nombre del contenedor

    $.getJSON(urlJson, function (data) {
        const libros = data.libros;  // Cambiado el nombre del array

        $.each(libros, function (index, libro) {  // Cambiado el nombre de la variable de iteración
            const divProducto = $('<div>').addClass('producto');
            const imagen = $('<img>').attr('src', libro.imagen).attr('alt', libro.nombre).addClass('img-producto img-' + index);
            const nombre = $('<h3>').text(libro.nombre);
            const precio = $('<p>').text('$' + libro.precio.toFixed(2));
            const descripcion = $('<p>').text(libro.descripcion);

            divProducto.append(imagen, nombre, precio, descripcion);

            sectionLibros.append(divProducto);  // Cambiado el nombre del contenedor
        });
    });
});