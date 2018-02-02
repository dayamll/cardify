$(document).ready(function() {

  $('#btn-github').on('click', function () {
    $(location).attr('href', 'https://github.com/margb13/cardify');
  });
  
  $('#cardify-btn').on('click', function() {
    $(this).prop('disabled', true);
    $('.cardify-mode').cardify();
  });

  $('#cardify2-btn').on('click', function() {
    $(this).prop('disabled', true);
    $('.cardify-mode').cardifyStylesInline();
  });

  $('#cardify3-btn').on('click', function() {
    $(this).prop('disabled', true);
    $('.cardify-mode').cardifyStylesBlock();
  });

  $('#cardify4-btn').on('click', function() {
    $(this).prop('disabled', true);
    $('.cardify-mode').cardifyStylesFlex();
  });

  function goingBack(btn) {
    btn.on('click', function() {
      window.location.href = '../index.html';
    });
  }

  goingBack($('#return'));
});
