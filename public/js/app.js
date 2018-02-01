'use strict';

// LLAMANDO AL PLUGIN segun su preferencia:
$(document).ready(function () {
  // $('.cardify-mode').cardify();
  // $('.cardify-mode').cardifyStylesInline();
  // $('.cardify-mode').cardifyStylesBlock();
  $('#btn-github').on('click', function () {
    $(location).attr('href', 'https://github.com/margb13/cardify');
  });
});