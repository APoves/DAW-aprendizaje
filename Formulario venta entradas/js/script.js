/* Función + if else asociado a index.html */

function login(event) {
    event.preventDefault();

    /* Variables formulario y recogida de datos */ 
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var lugar = document.getElementById("lugar").value;
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    var metodoPago = document.querySelector('input[name="metodoPago"]:checked');
    var terminos = document.getElementById("terminos").checked;


    if (nombre && fecha && lugar && cantidad && categoria && metodoPago){

        /* Almacenamiento de datos (temporal) */
        sessionStorage.setItem("nombre", nombre);
        sessionStorage.setItem("fecha", fecha);
        sessionStorage.setItem("lugar", lugar);
        sessionStorage.setItem("cantidad", cantidad);
        sessionStorage.setItem("categoria", categoria);
        sessionStorage.setItem("metodoPago", metodoPago.value); 

        window.location.href = "confirmacion.html"; /* Redirecciona
         a confirmación.html */
    } else { 
        /* Obligación a que se completen todos los campos del formulario */
        alert("Es necesario rellenar todos los datos del formulario");
    }
    
    /* Obligación a aceptar checkbox de términos y condiciones*/
    if (!terminos) {
        alert("Debes aceptar los términos y condiciones");
        return;
    }
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