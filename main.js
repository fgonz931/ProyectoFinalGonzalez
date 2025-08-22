let carrito = [];

const productosDiv = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalSpan = document.getElementById("total");
const finalizarBtn = document.getElementById("finalizar");

fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .then(productos => {
        renderProductos(productos);
    })
    .catch(error => {
        console.error("Error al cargar productos:", error);
        mostrarMensaje("No se pudieron cargar los productos.", "error");
    });

function renderProductos(productos) {
    productos.forEach((producto, index) => {
        const prodDiv = document.createElement("div");
        prodDiv.classList.add("producto");

        prodDiv.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <input type="number" min="1" max="5" value="0" class="cantidad-input" id="cantidad-${index}">
            <button id="btn-${index}">Agregar</button>
        `;

        productosDiv.appendChild(prodDiv);

        document.getElementById(`btn-${index}`).addEventListener("click", () => {
            const cantidadInput = document.getElementById(`cantidad-${index}`);
            const cantidad = parseInt(cantidadInput.value);

            if (cantidad === 0) {
                mostrarMensaje("Debes elegir al menos un producto.", "error");
            } else if (cantidad > 0 && cantidad <= 5) {
                agregarAlCarrito(producto, cantidad);
                mostrarMensaje(`Agregaste ${cantidad} ${producto.nombre}(s) al carrito.`, "success");
            } else {
                mostrarMensaje("Cantidad inválida. Máximo 5 unidades.", "error");
            }
        });
    });
}

function agregarAlCarrito(producto, cantidad) {
    carrito.push({ ...producto, cantidad });
    renderCarrito();
    actualizarTotal();
}

function renderCarrito() {
    listaCarrito.innerHTML = "";
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}`;
        listaCarrito.appendChild(li);
    });
}

function actualizarTotal() {
    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    totalSpan.textContent = total;
}

finalizarBtn.addEventListener("click", () => {
    if (carrito.length === 0) {
        mostrarMensaje("Tu carrito está vacío.", "error");
    } else {
        const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
        mostrarMensaje(`¡Gracias por tu compra! Total: $${total}`, "success");
        carrito = [];
        renderCarrito();
        actualizarTotal();
    }
});

function mostrarMensaje(texto, tipo) {
    Toastify({
        text: texto,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: tipo === "success" ? "#4caf50" : "#f44336",
        stopOnFocus: true,
    }).showToast();
}

