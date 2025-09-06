# CartApp - Carrito de compra

Aplicación sencilla de carrito de compras desarrollada con **React** y **React Router**.  
<br>
Permite navegar entre un catálogo de productos y un carrito, agregar y eliminar productos, y calcular el total de la compra.

---

## Características:

- **Catálogo**: muestra una lista de productos disponibles.  
- **Carrito**: permite agregar productos, modificar cantidades y eliminarlos uno a uno.  
- **Persistencia**: los productos se guardan en `sessionStorage`.  
- **Navegación**: incluye barra de navegación y rutas con React Router.  
- **Total dinámico**: cálculo automático del precio total con `reduce`.

---

## Estructura del proyecto:

- **`CartApp.jsx`** → Componente principal de la aplicación.  
- **`CartRoutes.jsx`** → Define las rutas (`/catalog`, `/cart`, `/`).  
- **`productService.js`** → Servicio para obtener productos y calcular el total.  
- **`components/`**  
  - `Navbar.jsx` → Barra de navegación.  
  - `CatalogDetails.jsx` → Lista los productos del catálogo.  
  - `ProductCardDetails.jsx` → Tarjeta individual de producto.  
  - `CartDetails.jsx` → Vista del carrito con tabla de productos.  
- **`hooks/useItemsCart.js`** → Custom Hook para gestionar el estado del carrito (añadir/eliminar).  
- **`data/products.js`** → Lista de productos de ejemplo.

---

## Tecnologías utilizadas:

- **React**
- **Vite**
- **React Router DOM**
- **Bootstrap**

---

## Vista previa del proyecto y funcionamiento:

<div align="center">

### Catálogo de productos:
<img src="https://raw.githubusercontent.com/APoves/DAW-aprendizaje/main/Cart%20(React)/src/assets/products.png" alt="Productos" width="600" style="margin: 10px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">

### Carrito lleno:
<img src="https://raw.githubusercontent.com/APoves/DAW-aprendizaje/main/Cart%20(React)/src/assets/cart-full.png" alt="Carrito lleno" width="600" style="margin: 10px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">

### Carrito vacío:
<img src="https://raw.githubusercontent.com/APoves/DAW-aprendizaje/main/Cart%20(React)/src/assets/cart-empty.png" alt="Carrito vacío" width="600" style="margin: 10px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">

</div>

---

## Demo en vídeo

<div align="center">
<video width="600" controls style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <source src="https://raw.githubusercontent.com/APoves/DAW-aprendizaje/main/Cart%20(React)/src/assets/demo-CartApp.mp4" type="video/mp4">
</video>
</div>