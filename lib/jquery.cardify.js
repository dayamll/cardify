'use strict';

/* $.fn (nos permite extender las funciones en jQuery) */
(function ($) {
  $.fn.extend({
    cardify: function cardify() {
      /* Recorre todos los elementos encapsulados*/
      this.each(function () {
        /* Aquí se cambia el contexto, por lo que 'this' se refiere al elemento DOM por el que se está pasando*/
        $(this).find('img').wrap('<figure class="figure"></figure>');
        /* Agregar figcaption con el atributo alt de img*/
        $(this).after('<figcaption class="figure-caption">' + $(this).attr('alt') + '<figcaption>');
      });
    }
  });
})(jQuery);