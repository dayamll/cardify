# Cardify

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Reto N° 2_
* **Desarrolladoras:** _Dayam Llerema, Lucero Hospina y Margarita Sutta._

***
## Descripción General:

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Flujo de Trabajo en Equipo:

Para efectos de organización en el trabajo colaborativo se han creado tres ramas en este repositorio. Cada desarrolladora usará la rama asignada para ella de la siguiente manera:

- _Dayam Llerena_: [d-plugin](https://github.com/margb13/cardify/tree/d-plugin)

- _Lucero Hospina_: [l-plugin](https://github.com/margb13/cardify/tree/l-plugin)

- _Margarita Sutta_: [m-plugin](https://github.com/margb13/cardify/tree/m-plugin)

## Progreso Propuesto:

Se nos proponen los siguientes checklists de progreso para cada semana:

SEMANA 1
- [] Formar equipo.
- [] Elegir reto.
- [] Hacer fork de reto modelo o crear nuevo repo si has propuesto un reto no propuesto por Laboratoria.
- [] Escribir primera versión del README.md con una descripción general de la librería así como ejemplos (snippets) de uso y configuración (si fuera necesario).
- [] Crear issues y milestones que sirvan como hoja de ruta (roadmap)
- [] Inicializar proyecto con npm init y git init.
- [] Crear index.html con ejemplo principal de uso.

SEMANA 2
- [] Agregar tests que describan la API de tu librería y los casos de uso esperados.
- [] Implementar funcionalidad esencial.
- [] Hacer code review con tus compañeras e instructorxs.

SEMANA 3
- Completar implementación de librería y ejemplo principal (usando la librería).
- Hacer code review con tus compañeras e instructorxs.
- Preparar tu demo/presentación.
- Publicar el ejemplo principal (index.html) en GitHub pages.

> Nota: No olvides que es una buena práctica describir tu proyecto en este
> archivo `README.md` :smiley:.

***

## Requisitos:

Todos los retos deben incluir por los menos los siguientes archivos:

``` 
 - README.md con descripción del módulo, instrucciones de instalación, uso y documentación del API.
 - index.js: Librería debe exportar una función u objeto al entorno global (window) y hacer uso de features de ES6 donde sea apropiado.
 - index.html: Página web de la librería con ejemplo funcionando.
 - package.json con nombre, versión, descripción, autores, licencia, dependencias, scripts (pretest, test, ...)
 - .eslintrc con configuración para linter (ver guía de estilo de JavaScript)
 - .gitignore para ignorar node_modules u otras carpetas que no deban incluirse en control de versiones (git).

Hacker edition (opcional):

 - Si la librería está dirigida al navegador, debe adherirse al patrón UMD para poder ser usado con AMD, CommonJS y como variable global del navegador.
   Integración continua con Travis o Circle CI

```

***
