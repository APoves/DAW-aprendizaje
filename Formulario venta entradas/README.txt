PROYECTO DE SIMULACIÓN DE COMPRA DE ENTRADAS:

  En la PAC de Desarrollo de la asignatura, se requiere al alumnado la realización de un proyecto web de simulación de un formulario venta de entradas, donde se pide, además de la realización del correspondiente código HTML y CSS para dar estructura y forma al proyecto, la confirmación y volcado de datos con Javascript del index.html a la página cofirmacion.html.


Tecnologías utilizadas: 
- HTML.
- CSS.
- JavaScript.

Distribución: 
- Formulario de compra.
- Validación de rellenado de datos y aceptación de términos y condiciones.
- Almacenamiento de datos temporal con sessionStorage.
- Página de confirmación con volcado de datos del formulario.


Estructura:
|-- index.html 
|-- confirmacion.html
|------ img/
|    |----- linkinpark.jpg
|------ css/
|    |----- styles.css
|------ js/
|    |----- script.js


Manejo de errores:
- El proyecto cuenta un sistema de validación que asegura que estén rellenos todos los datos del formulario y se hayan aceptado los términos y condiciones:
	1. Rellenado de campos del formulario.
	2. Aceptación de términos y condiciones.
En caso de no contar con algunos de los puntos anteriores completos, se mostrará un mensaje en pantalla, impidiendo continuar con el envío del formulario.
En caso de datos completos, se envían los datos del formulario, accediendo automáticamente a la página de confirmación.




Aurora Marina Poves.  Marzo 2025.