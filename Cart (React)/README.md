# CartApp - Carrito de compra

Aplicación sencilla de carrito de compras desarrollada con **React** y **React Router**.  
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


.
├─ README.md
├─ package.json

└─ src/
├─ CartApp.jsx
├─ assets/
│ ├─ products.png
│ ├─ cart-full.png
│ ├─ cart-empty.png
│ └─ demo.mp4
├─ routes/
│ └─ CartRoutes.jsx
├─ services/
│ └─ productService.js
├─ hooks/
│ └─ useItemsCart.js
├─ data/
│ └─ products.js
└─ components/
├─ Navbar.jsx
├─ CatalogDetails.jsx
├─ ProductCardDetails.jsx
└─ CartDetails.jsx

---

## Tecnologías utilizadas:

- **React**

- **Vite**

- **React Router DOM**

- **Bootstrap**

---

 Vista previa

- **Catálogo de productos:** → Lista de productos con botón para agregar al carrito.

- **Carrito lleno** → Tabla con productos, cantidades y total dinámico.

- **Carrito vacío** → Mensaje informativo sobre el estado del carrito de compras.

- **Vídeo demo** → demostración del funcionamiento completo del proyecto.
