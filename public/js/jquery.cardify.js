'use strict';

(function($) {
  // Propuesta de cardify que implementa la etiqueta figure sin estilos
  $.fn.cardify = function() {
    // Ubicando todas etiquetas img del contenedor con la clase cardify-mode
    $(this).find('img').each(function() {
      // Cada etiqueta img tomara como padre una etiqueta figure
      $(this).wrap('<figure></figure>');
      // A cada padre de la etiqueta img se le pondra como ultimo hijo una etiqueta figcaption
      // A cada figcaption se le pondra como texto el atributo de su imagen correspondiente
      $(this).parent().append($(`<figcaption>${$(this).attr('alt')}</figcaption>`))
        .addClass('figure-styles');
      $('figcaption').addClass('figcaption-styles');

      // hover
      $(this).hover(
        function() {
          $(this).css('opacity', '0.2');
          $(this).next().css('opacity', '1');
        },
        function() {
          $(this).css('opacity', '1');
          $(this).next().css('opacity', '0');
        }
      );
    });
  };
  // Propuesta de estilo inline-block de figure con tamaño de imágenes redimensionado, caption arreglado.
  $.fn.cardifyStylesInline = function() {
    // Ubicando todas etiquetas img del contenedor con la clase cardify-mode
    $(this).find('img').each(function() {
      // Cada etiqueta img tomara como padre una etiqueta figure
      $(this).wrap('<figure></figure>')
        .addClass('image-styles-inline');
        
      // A cada padre de la etiqueta img se le pondra como ultimo hijo una etiqueta figcaption
      // A cada figcaption se le pondra como texto el atributo de su imagen correspondiente
      $(this).parent().append($(`<figcaption>${$(this).attr('alt')}</figcaption>`))
        .addClass('figure-styles-inline');
      $('figcaption').addClass('figcaption-styles-inline');

      // hover
      $(this).hover(
        function() {
          $(this).css('opacity', '0.2');
          $(this).next().css('opacity', '1');
        },
        function() {
          $(this).css('opacity', '1');
          $(this).next().css('opacity', '0');
        }
      );
    });
  };
  // Propuesta con el estilo default de figure con tamaño de imágenes redimensionado, caption arreglado.
  $.fn.cardifyStylesBlock = function() {
    // Ubicando todas etiquetas img del contenedor con la clase cardify-mode
    $(this).find('img').each(function() {
      // Cada etiqueta img tomara como padre una etiqueta figure
      $(this).wrap('<figure></figure>')
        .addClass('image-styles-block');

      // A cada padre de la etiqueta img se le pondra como ultimo hijo una etiqueta figcaption
      // A cada figcaption se le pondra como texto el atributo de su imagen correspondiente
      $(this).parent().append($(`<figcaption>${$(this).attr('alt')}</figcaption>`))
        .addClass('figure-styles-block');

      $('figcaption').addClass('figcaption-styles-block');
      // hover
      $(this).hover(
        function() {
          $(this).css('opacity', '0.2');
          $(this).next().css('opacity', '1');
        },
        function() {
          $(this).css('opacity', '1');
          $(this).next().css('opacity', '0');
        }
      );
    });
  };

  // Propuesta con estilo flex.
  $.fn.cardifyStylesFlex = function() {
    console.log;
    // Ubicando todas etiquetas img del contenedor con la clase cardify-mode
    $(this).find('img').each(function() {
      // Cada etiqueta img tomara como padre una etiqueta figure
      $(this).wrap('<figure></figure>')
        .addClass('image-styles-flex');

      // A cada padre de la etiqueta img se le pondra como ultimo hijo una etiqueta figcaption
      // A cada figcaption se le pondra como texto el atributo de su imagen correspondiente
      $(this).parent().append($(`<figcaption>${$(this).attr('alt')}</figcaption>`))
        .addClass('figure-styles-flex');
      $(this).parent().parent().addClass('container-flex');

      $('figcaption').addClass('figcaption-styles-flex');
      // hover
      $(this).hover(
        function() {
          $(this).css('opacity', '0.2');
          $(this).next().css('opacity', '1');
        },
        function() {
          $(this).css('opacity', '1');
          $(this).next().css('opacity', '0');
        }
      );
    });
  };
})(jQuery);