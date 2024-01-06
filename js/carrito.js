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

            const btnEliminar = $('<button>').text('Eliminar').click(function () {
                removeProduct(index);
            });

            divProducto.append(nombre, precio, btnEliminar);
            sectionCarrito.append(divProducto);

            total += producto.precio;
        });

        sectionCarrito.append('<h4 class="titulo-carrito">Precio total de su compra</h4>');
        sectionCarrito.append('<p class="carrito-total">Total: $' + total.toFixed(2) + '</p>');

        const btnReservar = $('<input>').addClass('btn btn-outline-light fw-bold w-80 h-40 fs-4 mb-4').attr({
            type: 'button',
            value: 'Pagar ahora',
            'data-bs-toggle': 'modal',
            'data-bs-target': '#exampleModal'
        });

        const modal = $('<div>').addClass('modal fade').attr({
            id: 'exampleModal',
            tabindex: '-1',
            'aria-labelledby': 'exampleModalLabel',
            'aria-hidden': 'true'
        });

        modal.append(
            $('<div>').addClass('modal-dialog').append(
                $('<div>').addClass('modal-content').append(
                    $('<div>').addClass('modal-header bg-dark text-white').append(
                        $('<h1>').addClass('modal-title fs-5').attr('id', 'exampleModalLabel').text('Ingresa tus datos'),
                        $('<button>').attr({
                            type: 'button',
                            class: 'btn-close',
                            'data-bs-dismiss': 'modal',
                            'aria-label': 'Close'
                        })
                    ),
                    $('<div>').addClass('modal-body bg-dark text-white').append(
                        $('<label>').attr('for', 'nombre').text('Nombre:'),
                        $('<input>').attr({
                            type: 'text',
                            id: 'nombre',
                            placeholder: 'Nombre'
                        }),
                        $('<br><br>'),
                        $('<label>').attr('for', 'apellidos').text('Apellidos:'),
                        $('<input>').attr({
                            type: 'text',
                            id: 'apellidos',
                            placeholder: 'Apellidos'
                        }),
                        $('<br><br>'),
                        $('<label>').attr('for', 'email').text('Email:'),
                        $('<input>').attr({
                            type: 'email',
                            id: 'email2',
                            placeholder: 'Email'
                        }),
                        $('<br><br>'),
                        $('<label>').attr('for', 'telefono').text('Telefono:'),
                        $('<input>').attr({
                            type: 'text',
                            id: 'telefono',
                            placeholder: 'Telefono'
                        }),
                        $('<br><br>'),
                        $('<label>').attr('for', 'codigopostal').text('Codigo postal:'),
                        $('<input>').attr({
                            type: 'text',
                            id: 'codigopostal',
                            placeholder: 'Codigo postal'
                        }),
                        $('<br><br>'),
                        $('<label>').attr('for', 'direccion').text('Dirección:'),
                        $('<input>').attr({
                            type: 'text',
                            id: 'direccion',
                            placeholder: 'Direccion'
                        })
                    ),
                    $('<div>').addClass('modal-footer bg-dark').append(
                        $('<button>').attr({
                            type: 'button',
                            class: 'btn btn-light',
                            'data-bs-dismiss': 'modal'
                        }).text('Cerrar'),
                        $('<button>').attr({
                            type: 'button',
                            class: 'btn btn-info',
                            onclick: "alert('El pago se ha realizado correctamente')"
                        }).text('Realizar pago')
                    )
                )
            )
        );

        sectionCarrito.append(btnReservar);
        sectionCarrito.append(modal);
    }
});

function removeProduct(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload();
}



  
  