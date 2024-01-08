function addCarrito(nombre, precio) {
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    
    const nuevoProducto = { nombre: nombre, precio: precio };
    carrito.push(nuevoProducto);

    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Añadido al carrito: ' + nombre + ' - $' + precio.toFixed(2));
}