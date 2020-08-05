![logo](/img/Laboratoria-node.jpg)

# Markdown Links
Encuentra todos los links dentro de un archivo Markdown. Funciona cuando se ingresa una ruta relativa/ absoluta llamando directamente  a un archivo Markdown que se encuentre en la posición relativa en la que está el usuario.

## Instalación 🔧

```console
$ npm install ayn-md-links
```

## Usage ⚙

```js
const mdLinks = require("./md-links.js");

mdLinks("path", {
  options (opcionales)
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
```

## Opciones 🔑

Se puede utilizar el paquete con una serie de opciones.

- Sin opciones: al ejecutar el paquete sin opciones se genera un arreglo que contine informacion de cada link encontrado en el archivo MD:

![Ej 1](/img/ej-sinopcion.jpg)

- Validate: al ejecutar el paquete con la opción validate --v o --validate, se genera el arreglo anterior, agregando además, para cada link encontrado el status de cada uno de ellos, mediante una llamada http.

![Ej 2](/img/ej-validate.jpg)

- Stats: al ejecutar el paquete con la opción stats --s o --stats, se genera un objeto con el total de link y con la cantidad de links únicos encontrados dentro del archivo(s).

![Ej 3](/img/ej-stats.jpg)

- Stats y Validate: al ejecutar el paquete con las opciones --s --v o --stats --validate, se genera un objeto con el total de link, con la cantidad de links que se encuentran "OK" y la cantidad de los links que se encuentran "Broken".

![Ej 4](/img/ej-syv.jpg)


## Preámbulo 💥

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## Dependencias 🔗

El paquete se desarrolló en _JavaScript_, haciendo uso de las siguientes dependencias fuera de node.js:

- Módulo [chalk](https://github.com/chalk/chalk). La misma se utilizò para colocar colores a las respuestas del paquete por consola.
  Ejemplo:
  ![Codigo](/img/paletacolor-codigo.jpg)

  ![Imagen](/img/paletadecolor.jpg)


- Módulo [figlet](https://www.npmjs.com/package/figlet). Llamar al objeto figlet como una función es una forma abreviada de llamar a la función de texto. Este método le permite crear arte ASCII a partir de texto.

![Consola](/img/figlet.jpg)

- Módulo [marked](https://www.npmjs.com/package/marked). Compilador de bajo nivel para analizar el marcado sin almacenar en caché o bloquear durante largos períodos de tiempo

Tambièn se hizo uso de las siguientes dependencias dentro de node.js:

- Módulo [process](https://nodejs.org/docs/latest/api/process.html#process_process_argv) con `process.argv[]`. Para obtener lo ingresado por el usuario mediante la terminal.
- Módulo [path](https://nodejs.org/api/path.html#path_path_isabsolute_path). Para poder normalizar una ruta y obtener posteriormente la ruta absoluta.
- Módulo [fs.readFile](https://node.readthedocs.io/en/latest/api/fs/). Lee asincrónicamente todo el contenido de un archivo.
