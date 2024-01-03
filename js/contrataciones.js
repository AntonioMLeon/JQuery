$(document).ready(function () {
  const urlJson = '../json/contrataciones.json';
  const sectionContrataciones = $('section');

  $.getJSON(urlJson, function (data) {
      const contrataciones = data.contrataciones;

      $.each(contrataciones, function (index, contratacion) {
          const divProducto = $('<div>').addClass('producto');
          const imagen = $('<img>').attr('src', contratacion.imagen).attr('alt', contratacion.nombre).addClass('img-producto img-' + index);
          const nombre = $('<h3>').text(contratacion.nombre);
          const precio = $('<p>').text('$' + contratacion.precio.toFixed(2));
          const descripcion = $('<p>').text(contratacion.descripcion);

          
          const btnReservar = $('<input>').addClass('btn btn-outline-light fw-bold w-80 h-40 fs-4 mb-4').attr({
              type: 'button',
              value: 'Contratar',
              'data-bs-toggle': 'modal',
              'data-bs-target': '#exampleModal-' + index
          });

          const modal = $('<div>').addClass('modal fade').attr({
              id: 'exampleModal-' + index,
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
                              onclick: "alert('La contratación se ha realizado correctamente')"
                          }).text('Hacer contrato')
                      )
                  )
              )
          );

          
          divProducto.append(imagen, nombre, precio, descripcion, btnReservar, modal);

          
          sectionContrataciones.append(divProducto);
      });
  });
});

