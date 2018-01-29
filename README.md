# Cardify

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Reto N° 2_
* **Desarrolladoras:** _Dayam Llerema, Lucero Hospina y Margarita Sutta._

***

## Descripción General

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

***

## Flujo de Trabajo en Equipo

Para efectos de organización en el trabajo colaborativo se han creado tres ramas en este repositorio. Cada desarrolladora usará la rama asignada para ella de la siguiente manera:

- _Dayam Llerena_: [d-plugin](https://github.com/margb13/cardify/tree/d-plugin)

- _Lucero Hospina_: [l-plugin](https://github.com/margb13/cardify/tree/l-plugin)

- _Margarita Sutta_: [m-plugin](https://github.com/margb13/cardify/tree/m-plugin)

***

## Progreso Propuesto

Se nos proponen los siguientes checklists de progreso para cada semana:

_**SEMANA 1.**_

- [X] Formar equipo.
- [X] Elegir reto.
- [x] Hacer fork de reto modelo o crear nuevo repo si has propuesto un reto no propuesto por Laboratoria.
- [x] Escribir primera versión del README.md con una descripción general de la librería así como ejemplos (snippets) de uso y configuración (si fuera necesario). 
- [ ] Crear issues y milestones que sirvan como hoja de ruta (roadmap)
- [x] Inicializar proyecto con npm init y git init.
- [x] Crear index.html con ejemplo principal de uso.

_**SEMANA 2.**_

- [ ] Agregar tests que describan la API de tu librería y los casos de uso esperados.
- [ ] Implementar funcionalidad esencial.
- [ ] Hacer code review con tus compañeras e instructorxs.

**_SEMANA 3._**

- [ ] Completar implementación de librería y ejemplo principal (usando la librería).
- [ ] Hacer code review con tus compañeras e instructorxs.
- [ ] Preparar tu demo/presentación.
- [ ] Publicar el ejemplo principal (index.html) en GitHub pages.

***

## Requisitos

Todos los retos deben incluir por los menos los siguientes archivos:

```
1. README.md con descripción del módulo, instrucciones de instalación, uso y documentación del API.
2. index.js: Librería debe exportar una función u objeto al entorno global (window) y hacer uso de features de ES6 donde sea apropiado.
3. index.html: Página web de la librería con ejemplo funcionando.
4. package.json con nombre, versión, descripción, autores, licencia, dependencias, scripts (pretest, test, ...)
5. .eslintrc con configuración para linter (ver guía de estilo de JavaScript)
6. .gitignore para ignorar node_modules u otras carpetas que no deban incluirse en control de versiones (git).
```

Hacker edition (opcional):
```
  * Si la librería está dirigida al navegador, debe adherirse al patrón UMD para poder ser usado con AMD, CommonJS y como variable global del navegador.
  * Integración continua con Travis o Circle CI
```

***

## Desarrollo del plugin

Como sabemos, jQuery es de las más potentes y utilizadas librerías de Javascript, hoy en día reconocida como el propio framework de Javascript que sin duda se caracteriza por las funciones y eventos que implementa en este lenguaje, jQuery nos proporciona gran facilidad al escribir código.

Por lo que consideramos los siguientes puntos para la creación de nuestro plugin:

### I -Momenclatura del plugin

Hay un patrón generalizado de la nomenclatura de los plugins:

  ```javascript
  jquery.nombre_plugin.js
  ```

Lógicamente, siempre debes de incluír la librería jQuery antes del código de extensión.

### II -Inicializar el plugin

La manera de inicializar el plugin de jQuery es básicamente obtener un parámetro “$” (signo de dólar), el cual representará nuestro objeto de jQuery; una vez obtenido el parámetro, extendemos su funcionalidad añadiendo “.fn.extend”

> Este método (extend) nos permite incrementar funcionalidad a jQuery, pues todo el código de nuestro plugin debe de ir definido dentro de él.

  ![inicializar](temporary-files/assets/images/screen/inicializar.png)
