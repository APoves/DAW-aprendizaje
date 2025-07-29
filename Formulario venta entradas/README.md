### Simulación de proyecto web de formulario de venta de entradas 🎸.

## PROYECTO DE SIMULACIÓN DE COMPRA DE ENTRADAS:

# Sitio web: https://formularioe.netlify.app/

<br>
Proyecto realizado para la asignatura Lenguajes de Marcas y Sistemas de Gestión Empresarial.
<br>
En la PAC de Desarrollo de la asignatura, se requiere al alumnado la realización de un proyecto web de simulación de un formulario venta de entradas, donde se pide, además de la realización del correspondiente código HTML y CSS para dar estructura y forma al proyecto, la confirmación y volcado de datos con Javascript del index.html a la página cofirmacion.html.
<br>
<br>

## Tecnologías utilizadas: 
- HTML.
- CSS.
- JavaScript.
<br>
<br>

# Distribución: 
- Formulario de compra.
<br>
- Validación de rellenado de datos y aceptación de términos y condiciones.
<br>
- Almacenamiento de datos temporal con sessionStorage.
<br>
- Página de confirmación con volcado de datos del formulario.
<br>
<br>

# Estructura:

|-- index.html 
<br>
|-- confirmacion.html
<br>
|------ img/
<br>
|    |----- linkinpark.jpg
<br>
|------ css/
<br>
|    |----- styles.css
<br>
|------ js/
<br>
|    |----- script.js

<br>
<br>

# Manejo de errores:

- El proyecto cuenta un sistema de validación que asegura que estén rellenos todos los datos del formulario y se hayan aceptado los términos y condiciones:
<br>
	1. Rellenado de campos del formulario.
<br>
	2. Aceptación de términos y condiciones.
<br>
<br>
En caso de no contar con algunos de los puntos anteriores completos, se mostrará un mensaje en pantalla, impidiendo continuar con el envío del formulario.
<br>
En caso de datos completos, se envían los datos del formulario, accediendo automáticamente a la página de confirmación.

<br>
<br>
<br>
<br>

# Posibles mejoras: 

Ya que es un mini proyecto con pocos requisitos y creado como toma de contacto en un entorno ideal, es importante recordar que hay muchas posibles mejoras, entre ellas:
<br>
<br>
- Modificación del selector de fechas, impidiendo que pueda seleccionarse cualquier fecha, independientemente de si hay conciertos o no en la fecha.
<br>
- Implementación de sistema que permita seleccionar una fecha ligándola a la ciudad donde se dé el concierto en esa fecha.
<br>
- Alternancia de precios, ya que la totalidad de tipos de entradas (Pista, Grada, Normal), cuentan con un mismo precio.
<br>
- Almacenar y enviar los datos del formulario. La única forma de almacenamiento es el SessionStorage, por lo que los datos al enviar el formulario, no llegan a ningún sitio en ningún caso.
<br>
- Es posible inyectar cualquier malware en el formulario, por lo que cuenta con multitud de problemas de seguridad.

<br>
<br>
<br>
Aurora Marina Poves.  Marzo 2025.
