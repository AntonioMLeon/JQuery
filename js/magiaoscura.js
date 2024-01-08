$(document).ready(function () {
    const urlJson = '../json/magiaoscura.json'; 
    const sectionMagiaOscura = $('section'); 

    $.getJSON(urlJson, function (data) {
        const magiaoscura = data.magiaoscura; 

        $.each(magiaoscura, function (index, item) {
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

            sectionMagiaOscura.append(divProducto); 
        });

        if (window.location.href.toLowerCase().includes('magiaoscura')) {
            $('#myModal').modal('show');
        }
    });

    const modalContent = 
        `<div class="modal fade" id="myModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content bg-dark text-light">
                    <div class="modal-header">
                        <h5 class="modal-title text-warning">Advertencia</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="text-warning">No nos hacemos responsables del mal uso de estos objetos.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>`;
    
    $('body').append(modalContent);
});

function addToCart(nombre, precio) {
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    
    const nuevoProducto = { nombre: nombre, precio: precio };
    carrito.push(nuevoProducto);

    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Añadido al carrito: ' + nombre + ' - $' + precio.toFixed(2));
}


