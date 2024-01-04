$(document).ready(function () {
    const urlJson = '../json/objetosmagicos.json';  
    const sectionObjetosMagicos = $('section');  

    $.getJSON(urlJson, function (data) {
        const objetosMagicos = data.objetosmagicos;  

        $.each(objetosMagicos, function (index, objetoMagico) {  
            const divProducto = $('<div>').addClass('producto');
            const imagen = $('<img>').attr('src', objetoMagico.imagen).attr('alt', objetoMagico.nombre).addClass('img-producto img-' + index);
            const nombre = $('<h3>').text(objetoMagico.nombre);
            const precio = $('<p>').text('$' + objetoMagico.precio.toFixed(2));
            const descripcion = $('<p>').text(objetoMagico.descripcion);

            divProducto.append(imagen, nombre, precio, descripcion);

            sectionObjetosMagicos.append(divProducto);  
        });
    });
});
