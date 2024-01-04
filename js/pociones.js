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

            divProducto.append(imagen, nombre, precio, descripcion);

            sectionPociones.append(divProducto); 
        });
    });
});
