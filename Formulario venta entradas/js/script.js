function login(event) {
    event.preventDefault();

    /* Variables del formulario y datos */ 
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var lugar = document.getElementById("lugar").value;
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    var metodoPago = document.querySelector('input[name="metodoPago"]:checked');
    var terminos = document.getElementById("terminos").checked;

    /* Validación campos del formulario completos */
    if (!nombre || !fecha || !lugar || !cantidad || !categoria || !metodoPago) { 
        alert("Se deben rellenar todos los datos del formulario");
        return false;
    }

    /* Validación aceptación términos y condiciones */
    if (!terminos) {
        alert("Se deben aceptar los términos y condiciones");
        return false;
    }

    /* Almacenamiento de datos del formulario */
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("fecha", fecha);
    sessionStorage.setItem("lugar", lugar);
    sessionStorage.setItem("cantidad", cantidad);
    sessionStorage.setItem("categoria", categoria);
    sessionStorage.setItem("metodoPago", metodoPago.value);  
    window.location.href = "confirmacion.html";
}

/*  Validación y volcado de datos asociado a confirmacion.html */

    /* Recuperación de datos */
    var nombre = sessionStorage.getItem("nombre");
    var fecha = sessionStorage.getItem("fecha");
    var lugar = sessionStorage.getItem("lugar");
    var cantidad = sessionStorage.getItem("cantidad");
    var categoria = sessionStorage.getItem("categoria");
    var metodoPago = sessionStorage.getItem("metodoPago");

    /* Mostrar los datos recuperados en sus campos */
    document.getElementById("nombreValue").textContent = nombre;
    document.getElementById("fechaValue").textContent = fecha;
    document.getElementById("lugarValue").textContent = lugar;
    document.getElementById("cantidadValue").textContent = cantidad;
    document.getElementById("categoriaValue").textContent = categoria;
    document.getElementById("metodoPagoValue").textContent = metodoPago;