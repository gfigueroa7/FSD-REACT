------- GITHUB -------

https://github.com/gfigueroa7/FSD-REACT



------- PROYECTO -------

La idea del proyecto es una página en donde vas a encontrar varias cosas para tu mascota

Cosa que este todo concentrado en un solo lugar para facilitar a los usuarios

Cualquiera se puede postular sin costo y así salir en la web

Van a ver "pagos" para apoyar a la comunidad y así poder destacar más en la web (no tengo pensado que funcione es solo visual)

También va a ver una parte de comunidad para poder compartir experiencias, tips, etc



------- DEPENDENCIAS -------

react-router-dom
Para el manejo de rutas haciendo la web navegable

react-burger-menu
Para la creación del menú estilo hamburguesa

react-modal
Para la creación de modales

react-spinners
Para la creación de spinners/loaders cuando se necesita conectar con el servidor falso

react-stars
Para la creación de calificaciones



------- ESTRUCTURA -------

index.js
Archivo inicial donde renderiza la aplicación y llama al App.js

App.js
Archivo principal donde contiene la estructura común para todas las páginas y en donde se llama a las páginas

assets 
Carpeta donde están todos los recursos del sitio como los css, iconos y las imágenes

components
Carpeta donde están todos los componentes del sitio estructurados en carpetas



------- COMPONENTS -------

Para una mejor organización se pusieron todos los componentes en diferentes carpetas

Componentes comunes/compartidos entre las páginas se pusieron en shared

Componentes que son páginas se pusieron en pages

Componentes que son detalles de una página se pusieron en pages/detail

Componentes más macros/globales se pusieron en general

Componentes de formulario se pusieron en forms

Componentes de tipo card/carta se pusieron en cards



------- SERVIDOR FALSO -------

Se está utilizando en
- Veterinaras, Tiendas y Entrenadores cuando apenas entras a alguna de estas página dispara para cargar toda la información.
- Cuando entras a un detalle de un lugar o una persona dispara para cargar toda la información.
- Cuando das clic en las estrellas dispara para guardar la puntuación.
- Cuando das clic en uno de los 3 botones que hay en la página de Ranking dispara para traer toda la información.
- Cuando se mandan los datos del formulario que hay en la página de Postularse dispara para guardar toda la información.



------- DESCRIPCION DE PAGINAS Y FUNCIONALIDADES -------

#Home
Página principal del sitio, en ella puedes encontrar información sobre la empresa y algunos contenidos que proporciona la web
También va a tener las opciones de pago, un formulario de contacto, los logos de todos los sponsors y el footer
*en las opciones de pago cuando le das en unirte, te salta un modal y un formulario para completar
 dicho formulario tiene validación de nombre (solo letras) mostrando un mensaje si algo está mal y un mensaje cuando se "manda" todo bien
 los datos no se guardan

#Veterinarias, Tiendas y Entrenadores
Son páginas con las mismas características y funcionalidades pero distinto contenido 
En ellas podrás encontrar
    - el listado de los lugares/personas con su respectiva foto, título y descripción + calificaciones + si es sponsor
    - select con distintas opciones para ordenar el listado, tales como (ascendente, descendente, mayor rating, menor rating y sponsors)
El sponsor se representa con una corona del color (gold, silver, bronze)
SOLO si sos gold entonces va a tener un link en la foto, título y texto para acceder a una página exclusiva con todo el detalle del lugar/persona
*las calificaciones son custom, el complemento solo te da las estrellas y el valor que seleccionas, lo demas se hizo todo
 podes votar pinchando las estrellas y luego las oculto para "obligar" al usuario a recargar la página
 solo al recargar vas a ver el nuevo puntaje
 se hizo asi para no volver a tener que llamar al servidor y así optimizar un poco
*el orden 'sponsors' ordenaría primero todos los gold luego silver, luego bronze y por último el resto

#Comunidad
Coming Soon

#Postularse
Contiene un texto sobre las pautas + un formulario donde dependiendo la opcion que eligas va a ser el lugar donde vas a salir inmediatamente
Se guardan todos los datos del formulario
Cuando vayas a la pagina de la opcion que pusiste (veterinaria, tienda o entrenador) ya vas a salir y podes votar y ordenar, también vas a salir en la página Ranking

#Sponsor 
Contiene un texto sobre las pautas y los mismos componentes y funcionalidades de la home (opciones de pago + los logos de todos los sponsors)

#Ranking
Van a aparecer 3 botones (Veterinarias, Tiendas o Entrenadores) 
Al seleccionar uno te va a traer toda la información detallada de las votaciones de ese lugar/persona
Dicha información se va a mostrar ordenada por la cantidad de puntos que obtuvo
Los datos a listar son la posición, nombre, puntos, votos, promedio y las estrellas
*las estrellas en esta página no son seleccionables
*la posición en caso de ser compartida por varios lo lista solo uno y luego el/los de abajo no van a tener el número y luego sigue secuencialmente
 así se evita que sí están empatados puedan discutir por quien sale primero en el listado ya que la posición es la misma
 ej: 
 1 - A
   - B
 2 - C
 3 - D
   - E
   - F
 A y B están los dos en el primer puesto
 C en el segundo
 D, E y F en el tercero

#404
Página por si accedes a una url que no exista dentro de la web
Ej: /vet o /pepe