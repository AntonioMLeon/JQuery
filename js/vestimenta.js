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

            divProducto.append(imagen, nombre, precio, descripcion);

            sectionVestimenta.append(divProducto);
        });
    });
});

  