#  Markdown Links

##  Índice

* [ 1. Preámbulo ] (# 1-preámbulo)
* [ 2. Resumen del proyecto ] (# 2-resumen-del-proyecto)
* [ 3. Objetivos de aprendizaje ] (# 3-objetivos-de-aprendizaje)
* [ 4. Consideraciones generales ] (# 4-consideraciones-generales)
* [ 5. Criterios de aceptación mínimos del proyecto ] (# 5-criterios-de-aceptación-mínimos-del-proyecto)
* [ 6. Entregables ] (# 6-entregables)
* [ 7. Edición hacker ] (# 7-edición hacker)
* [ 8. Pistas, tips y lecturas complementarias ] (# 8-pistas-tips-y-lecturas-complementarias)
* [ 9. Lista de verificación ] (# 9-lista de verificación)

***

##  1. Preámbulo

[ Markdown ] (https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre desarrolladores. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md` ).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos / ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han creado crear una
herramienta usando [ Node.js ] (https://nodejs.org/), que lea y analice archivos
en formato `Markdown` , para verificar los enlaces que contengan y reportar
algunas estadísticas.

! [ md-links ] (https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

##  2. Resumen del proyecto

[ Node.js ] (https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [ motor de JavaScript V8 de Chrome ] (https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa
que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el
sistema archivos, con el entorno ( _proceso_ , _env_ , _stdin / stdout / stderr_ ), ...

En este proyecto crearás una herramienta de línea de comando (CLI) así como tu
propia librería (o biblioteca - library) en JavaScript.

##  3. Objetivos de aprendizaje

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrolladores porque te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otros desarrolladores. Debes tener especial
prácticas en peculiaridades del lenguaje, convenciones y buenas prácticas.

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

###  JavaScript

* [] Uso de condicionales (if-else | switch | operador ternario)
* [] Uso de funciones (parámetros | argumentos | valor de retorno)
* [] Matrices manipulables (filtro | mapa | ordenar | reducir)
* [] Objetos manipulables (clave | valor)
* [] Módulos Uso ES ([ `import` ] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
El | [`export`] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [] [ Uso de devoluciones de llamada. ] (https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [] [ Consumo de Promesas. ] (https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
* [] [ Creación de Promesas. ] (https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)

###  Nodo

* [] Uso de sistema de archivos. ([ fs ] (https://nodejs.org/api/fs.html), [ ruta ] (https://nodejs.org/api/path.html))
* [] Instalar y usar módulos. ([ npm ] (https://www.npmjs.com/))
* [] Creación de módulos. [ (CommonJS) ] (https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [] [ Configuración de package.json. ] (https://docs.npmjs.com/files/package.json)
* [] [ Configuración de npm-scripts ] (https://docs.npmjs.com/misc/scripts)
* [] Uso de CLI (Interfaz de línea de comandos - Interfaz de Línea de Comando)

###  Prueba

* [] [ Testeo unitario. ] (https://jestjs.io/docs/es-ES/getting-started)
* [] [ Testeo asíncrono. ] (https://jestjs.io/docs/es-ES/asynchronous)
* [] Uso de Mocks manuales.

###  Estructura del código y guía de estilo

* [] Organizar y dividir el código en módulos (Modularización)
* [] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [] Uso de linter (ESLINT)

###  Git y GitHub

* [] Uso de comandos de git (add | commit | pull | status | push)
* [] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [] Colaboración en Github (sucursales | solicitudes de extracción | | etiquetas)
* [] Organización en Github (proyectos | números | etiquetas | hitos)

###  HTTP

* [] Verbos HTTP ([ http.get ] (https://nodejs.org/api/http.html#http_http_get_options_callback))

###  Fundamentos de programación

* [] [ Recursión. ] (https://www.youtube.com/watch?v=lPPgY3HLlhQ)

***

##  4. Consideraciones generales

* Este proyecto se debe "resolver" en duplas.

* La librería y script ejecutable (herramienta de línea de comando -
  CLI) debe estar implementado en JavaScript para ser ejecutada con
  Node.js. ** Está permitido usar librerías externas ** .

* Tu módulo debe ser instalable a través de `npm install <github-user> / md-links` . Este
  módulo debe incluir tanto un _ejecutable_ que pueden invocar en la línea de
  comando como una interfaz que necesitamos importar con `require` para usarlo
  programáticamente.

* Los exámenes unitarios deben cubrir un mínimo del 70% de declaraciones ,
  _funciones_ , _líneas_ y _ramas_ . Te recomendamos explorar [ Jest ] (https://jestjs.io/)
  para tus pruebas unitarias.

* Para este proyecto no está permitido utilizar `async / await` .

* Para este proyecto es opcional el uso de ES Módulos `(importación / exportación)` , en el
  caso que opta utilizarlo deberás crear un script de `build` en el` package.json`
  Que los transforme en `requires` y ` module.exports` con ayuda de Babel.

##  5. Criterios de aceptación mínimos del proyecto

Para comenzar este proyecto tendremos que hacer un _fork_ y _clonar_ este
repositorio

Antes de comenzar un codear, es necesario crear un plan de acción. Esto debería
quedará detallado en el `README.md` de tu repo y en trello. Además, puedes usar una serie de _issues_ y _milestones_ en github para priorizar y organizar el trabajo, y para poder hacer
seguimiento de tu progreso.

Dentro de cada _milestone_ se crearán y asignarán los _issues_ que cada quien
considera necesario.

###  Archivos del proyecto

*  `README.md` con descripción del módulo, instrucciones de instalación / uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  desarrollador que pueda usar su librería pueda hacerlo sin inconvenientes.
*  `index.js` : Desde este archivo debes exportar una función ( ` mdLinks` ).
*  `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, guiones (pretest, test, ...)
*  `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
*  `.eslintrc` con configuración para linter. Este archivo no
  se debe cambiar.
*  `.gitignore` para ignorar` node_modules` u otras carpetas que no deban
  incluirse en control de versiones ( `git` ).
*  `test / md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks ()` . Tu inplementación debe pasar estos tets.

###  API de JavaScript

El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks (ruta, opciones)`

#####  Argumentos

*  `ruta` : Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse como relativa al directorio desde donde se invoca
  nodo - _ directorio de trabajo actual_ ).
*  `opciones` : Un objeto con las siguientes propiedades:
  -  ` validar`: Booleano que determina si se desea validar los enlaces
    encontrados.

#####  Valor de retorno

La función debe retornar una promesa ( `Promise` ) que resuelva a un arreglo
( `Array` ) de objetos ( ` Object` ), donde cada objeto representa un enlace y contiene
las siguientes propiedades:

*  `href` : URL encontrada.
*  `text` : Texto que apareció dentro del enlace ( ` <a> ` ).
*  `file` : Ruta del archivo donde se encuentra el enlace.

####  Ejemplo

`` `js
const  mdLinks  =  require ( " enlaces md " );
mdLinks ( " ./some/example.md " )
  . entonces ( enlaces  => {
    // => [{href, texto, archivo}]
  })
  . captura ( consola . error );
mdLinks ( " ./some/example.md " , {validar :  verdadero })
  . entonces ( enlaces  => {
    // => [{href, texto, archivo, estado, ok}]
  })
  . captura ( consola . error );
mdLinks ( " ./some/dir " )
  . entonces ( enlaces  => {
    // => [{href, texto, archivo}]
  })
  . captura ( consola . error );
`` `

###  CLI (Interfaz de línea de comandos - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutar de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [opciones]`

Por ejemplo:

`` `sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
`` `

El comportamiento por defecto no debe validar si las URL respondieron ok o no,
solo debe identificar el archivo markdown (a partir de la ruta que recibe como
argumento), analizar el archivo Markdown e imprimir los enlaces que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del enlace (truncado a 50 caracteres).

####  Opciones

##### `- validar`

Si pasamos la opción `--validate` , el módulo debe hacer una petición HTTP para
averiguar si el enlace funciona o no. Si el enlace resulta en una redirección a una
URL que responde ok, entonces consideraremos el enlace como ok.

Por ejemplo:

`` `sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
`` `

Vemos Que El _output_ En Este Caso INCLUYE La palabra `OK` o `fail` Despues De
la URL, así como el estado de la respuesta recibida a la petición HTTP a dicha
URL

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicos sobre los enlaces.

`` `sh
$ md-links ./some/example.md --stats
Total: 3
Único: 3
`` `

Podemos tambien combinar `--stats` y ` --validate` párrafo Obtener Estadísticas Que
necesiten de los resultados de la validación.

`` `sh
$ md-links ./some/example.md --stats --validate
Total: 3
Único: 3
Roto: 1
`` `

##  6. Entregables

Módulo instalable a través de `npm install <github-user> / md-links` . Este módulo debe
incluir tanto un ejecutable como una interfaz que incluya importar con `require`
para usarlo programáticamente.

##  7. Funcionalidad extra o "Edición Hacker"

Las secciones llamadas _Hacker Edition_ son ** opcionales ** . Si alcanzaste los objetivos de aprendizaje y el tiempo restante, intenta realizar la edición hacker. Así podrás
profundizar y / o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Puedes agregar la propiedad `línea` a cada objeto` enlace` indicando en qué línea
  del archivo se encontró el enlace.
* Puedes agregar más estadísticas.
* Integración continua con Travis o Circle CI.

***

##  8. Pistas, consejos y lecturas complementarias

###  Preguntas frecuentes

####  ¿Cómo hago para que mi módulo sea _instalable_ desde GitHub?

Para que el módulo sea instalable desde GitHub solo tiene que:

* Estar en un repo público de GitHub
* Contener un `package.json` válido

Con el comando `npm install githubname / reponame` podemos instalar directamente
desde GitHub. Ver [ docs oficiales de `npm install` acá ] (https://docs.npmjs.com/cli/install).

Por ejemplo, el [ `course-parser` ] (https://github.com/Laboratoria/course-parser)
que usamos para la currícula no está publicada en el registro público de NPM,
así que lo instalamos directamente desde GitHub con el comando `npm install
Laboratoria / curso-analizador » .

###  Sugerencias de implementación

La implementación de este proyecto tiene varias partes: leer del sistema de
archivos, recibir argumentos a través de la línea de comando, analizar texto,
hacer consultas HTTP, ... y todas estas cosas pueden enfocarse de muchas formas,
tanto usando librerías como implementando en VanillaJS.

Por poner un ejemplo, el _parseado_ (análisis) del markdown para extraer los
enlaces podría plantearse de las siguientes maneras (todas válidas):

* Usando un _módulo_ como [ markdown-it ] (https://github.com/markdown-it/markdown-it),
  que nos devuelve un arreglo de _tokens_ que podemos mover para identificar
  Los enlaces.
* Siguiendo otro camino completamente, podríamos usar
  [ expresiones regulares (`RegExp`) ] (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions).
* También podríamos usar una combinación de varios _módulos_ (podría ser válido
  transformar el markdown a HTML usando algo como [ marcado ] (https://github.com/markedjs/marked)
  y de ahí extraer los enlaces con una librería de DOM como [ JSDOM ] (https://github.com/jsdom/jsdom)
  o [ Cheerio ] (https://github.com/cheeriojs/cheerio) entre otras).
* Usando un _custom renderer_ de [ marcado ] (https://github.com/markedjs/marked)
  ( `nuevo marcado. Renderer ()` ).

Además, puedes buscar librerías para crear una interfaz más amigable con el usuario.

No dudes en consultar a tus compañeras, entrenadores y / o el [ foro de la comunidad ] (http://community.laboratoria.la/c/js)
si tienes dudas existenciales con respecto a estas decisiones. No existe una
"única" manera correcta : guiño :


###  Talleres de Tutoriales / NodeSchool

* [ learnyounode ] (https://github.com/workshopper/learnyounode)
* [ how-to-npm ] (https://github.com/workshopper/how-to-npm)
* [ promete-no-lastimarás ] (https://github.com/stevekane/promise-it-wont-hurt)

###  Otros recursos

* [ Acerca de Node.js - Documentación oficial ] (https://nodejs.org/es/about/)
* [ Sistema de archivos Node.js - Documentación oficial ] (https://nodejs.org/api/fs.html)
* [ Node.js http.get - Documentación oficial ] (https://nodejs.org/api/http.html#http_http_get_options_callback)
* [ Node.js - Wikipedia ] (https://es.wikipedia.org/wiki/Node.js)
* [ ¿Qué es exactamente Node.js? - freeCodeCamp ] (https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [ ¿Qué es Node.js y para qué sirve? - drauta.com ] (https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
* [ ¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube ] (https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [ ¿Simplemente qué es Node.js? - IBM Developer Works, 2011 ] (https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
* [ Node.js y npm ] (https://www.genbeta.com/desarrollo/node-js-y-npm)
* [ Módulos, librerías, paquetes, frameworks ... ¿requisitos es la diferencia? ] (http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
* [ Asíncronía en js ] (https://carlosazaustre.es/manejando-la-asincronia-en-javascript/)
* [ NPM ] (https://docs.npmjs.com/getting-started/what-is-npm)
* [ Página del publicador ] (https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [ Crear módulos en Node.js ] (https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [ Leer un archivo ] (https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [ Leer un directorio ] (https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
* [ Ruta ] (https://nodejs.org/api/path.html)
* [ Línea de comando CLI ] (https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
  [ Línk roto ] (https://medium.com/neetscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)

##  9. Lista de verificación

###  General

* [] Puede instalarse a través de `npm install --global <github-user> / md-links`

### `README.md`

* [] Un tablero con el backlog para la implementación de la librería.
* [] Documentación técnica de la librería.
* [] Guía de uso e instalación de la librería

###  API `mdLinks (ruta, opciones)`

* [] El módulo exporta una función con la interfaz (API) esperada.
* [] Implementa soporte para archivo individual
* [] Implementa soporte para mandos
* [] Implementa `options.validate`

###  CLI

* [] Expone ejecutable `md-links` en el camino (configurado en` package.json` )
* [] Se intentó sin errores / output esperado
* [] Implementa `--validate`
* [] Implementa `--stats`

###  Pruebas / pruebas

* [] Pruebas unitarias cubren un mínimo del 70% de declaraciones, funciones,
  líneas, y ramas.
* [] Pruebas Pasa (y linters) ( `prueba npm` ).
