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

            const botonCarrito = $('<input>').addClass('btn btn-outline-light fw-bold w-80 h-40 fs-4 mb-4').attr({
                type: 'button',
                value: 'Añadir al carrito',
                onclick: 'addCarrito("' + objetoMagico.nombre + '", ' + objetoMagico.precio + ')'
                
            });

            divProducto.append(imagen, nombre, precio, descripcion, botonCarrito);

            sectionObjetosMagicos.append(divProducto);  
        });
    });
});




