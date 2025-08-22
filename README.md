# ProyectoFinalGonzalez

Proyecto Final comision 90645 - Javascript

## 📁 Descripción

Simulador interactivo de **Ecommerce de Cafetería y Panadería**, desarrollado con **HTML, CSS y JavaScript**.
Permite seleccionar productos, agregarlos a un carrito y finalizar la compra mostrando notificaciones con **Toastify**.

## 🚀 Tecnologías utilizadas

* HTML5 + CSS3
* JavaScript (ES6+)
* [Toastify.js](https://apvarun.github.io/toastify-js/) para notificaciones
* [json-server](https://github.com/typicode/json-server) para simular el backend
* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para ejecutar el frontend

## 📂 Archivos principales

* `index.html` → Interfaz principal
* `main.js` → Lógica del simulador
* `db.json` → Datos de productos (servidos por json-server)

## ⚙️ Instalación y ejecución

1. Clonar este repositorio:

   ```bash
   git clone https://github.com/fgonz931/ProyectoFinalGonzalez.git
   cd ProyectoFinalGonzalez
   ```

2. Instalar json-server:

   ```bash
   npm install -g json-server
   ```

3. Levantar la db con los productos:

   ```bash
   json-server --watch db.json
   ```

4. Abrir `index.html` con Live Server en VS Code:

   * Clic derecho sobre `index.html` → **Open with Live Server**
   * Se abrirá algo como `http://127.0.0.1:5500/index.html`

5. Listo ✅ Ya podés interactuar con la aplicación:

   * Elegir productos y cantidades
   * Agregar al carrito
   * Ver total
   * Finalizar compra con notificación
