// Aca creo la clase del objeto producto como base para cargar los productos 

class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }

    consultarStock(cantidad) {
        return this.stock - cantidad;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Inicializo arrays para las categorias de los productos

const remeras = [];
const buzos = [];
const pantalones = [];

//Cargo el stock de productos segun su categoria

//Remeras

remeras.push(new Producto("Remera 1", 1, 1000, 10));
remeras.push(new Producto("Remera 2", 2, 2000, 20));
remeras.push(new Producto("Remera 3", 3, 3000, 30));

//Buzos

buzos.push(new Producto("Buzo 1", 4, 5000, 30));
buzos.push(new Producto("Buzo 2", 5, 6000, 20));
buzos.push(new Producto("Buzo 3", 6, 7000, 10));

//Pantalones

pantalones.push(new Producto("Pantalon 1", 7, 1000, 10));
pantalones.push(new Producto("Pantalon 2", 8, 2000, 20));
pantalones.push(new Producto("Pantalon 3", 9, 3000, 30));


// Recorro los arrays para mostrarle los productos al usuario

for (const remera of remeras) {
    alert("ID (" + remera.id + ") - " + remera.nombre);
}
for (const buzo of buzos) {
    alert("ID (" + buzo.id + ") - " + buzo.nombre);
}
for (const pantalon of pantalones) {
    alert("ID (" + pantalon.id + ") - " + pantalon.nombre);
}

// Funcion para calcular el precio final de la compra

function calcularPrecio(precioPrenda, cantidadPrenda, costoEnvio) {
    return ((precioPrenda * 1.21) * cantidadPrenda) + costoEnvio;
}

// Solicito al usuario el ID de la prenda

let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const remeraBuscada = remeras.find(remera => remera.id === prendaSeleccionada);
const buzoBuscado = buzos.find(buzo => buzo.id === prendaSeleccionada);
const pantalonBuscado = pantalones.find(pantalon => pantalon.id === prendaSeleccionada);


// Solicito al usuario la cantidad de la prenda

let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar de la prenda seleccionada:"));

// Costo de envio

const envio = 350;

// Salidas de consola indicando el precio final de la compra segun la prenda elegida

if (prendaSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (prendaSeleccionada < 4) {
    if (remeraBuscada.consultarStock(cantidad) < 0) {
        alert("No hay suficiente stock")
    } else {
        alert("El precio final de tu compra es: $" + calcularPrecio(remeraBuscada.precio, cantidad, envio));
        alert("¡Que lo disfrutes!")
        remeraBuscada.vender(cantidad);
    }
} else if (prendaSeleccionada < 7) {
    if (buzoBuscado.consultarStock(cantidad) < 0) {
        alert("No hay sufuciente stock")
    } else {
        alert("El precio final de tu compra es: $" + calcularPrecio(buzoBuscado.precio, cantidad, envio));
        alert("¡Que lo disfrutes!")
        buzoBuscado.vender(cantidad);
    }
} else if (prendaSeleccionada < 10) {
    if (pantalonBuscado.consultarStock(cantidad) < 0) {
        alert("No hay sufuciente stock")
    } else {
        alert("El precio final de tu compra es: $" + calcularPrecio(pantalonBuscado.precio, cantidad, envio));
        alert("¡Que lo disfrutes!")
        pantalonBuscado.vender(cantidad);
    }
} else {
    alert("Ingresa un ID valido");
}