const boton = document.getElementById("mensaje");
let carrito = 0;

const productos = [
    {
        precio: 10,
        nombre: "Cafe",
    },
    {
        precio: 15,
        nombre: "Medialuna",
    },
    {
        precio: 20,
        nombre: "Submarino",
    },
];

boton.addEventListener("click", () => {
    let ingresaAccion = prompt(
        "Ingrese que accion desea realizar:\n1. Comprar\n2. Ver total\n3. Salir"
    );

    while (ingresaAccion !== "3") {
        switch (ingresaAccion) {
            case "1":
                comprar();
                break;
            case "2":
                verCarrito();
                break;
            default:
                alert("Ingrese una opcion valida");
                break;
        }

        ingresaAccion = prompt(
            "Ingrese que accion desea realizar:\n1. Comprar\n2. Ver total\n3. Salir"
        );
        if (ingresaAccion === null) break;
    }
    alert("Gracias por su visita!");
    carrito = 0;
});

function comprar() {
    let ingresaProducto = prompt(`Ingrese el producto que desea comprar:
1. ${productos[0].nombre}
2. ${productos[1].nombre}
3. ${productos[2].nombre}
4. Volver`);
    while (ingresaProducto !== "4") {
        if (ingresaProducto === null) return;
        const indice = parseInt(ingresaProducto) - 1;

        if (indice >= 0 && indice < productos.length) {
            validarProducto(indice);
        } else {
            alert("Ingrese una opción válida");
        }

        ingresaProducto = prompt(`Ingrese el producto que desea comprar:
1. ${productos[0].nombre}
2. ${productos[1].nombre}
3. ${productos[2].nombre}
4. Volver`);
    }
}

function verCarrito() {
    if (carrito === 0) {
        alert(`Su carrito esta vacio`);
    } else {
        alert(`El total de su compra es de: ${carrito}`);
    }
}

function validarCantidad(cantidad) {
    if (parseInt(cantidad) <= 5 && parseInt(cantidad) > 0) {
        return true;
    } else {
        alert("Ingrese una cantidad valida");
        return false;
    }
}

function validarProducto(indice) {
    const prod = productos[indice];
    let cantidad = prompt(
        `Ingrese la cantidad de ${prod.nombre} que desea comprar (Máximo 5 productos):`
    );

    while (!validarCantidad(cantidad)) {
        cantidad = prompt(
            `Ingrese la cantidad de ${prod.nombre} que desea comprar (Máximo 5 productos):`
        );
    }

    carrito += parseInt(cantidad) * prod.precio;
    alert("Su compra se ha realizado con éxito");
}
