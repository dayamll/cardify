$(document).ready(function() {
  $('#cardify-btn').on('click', function() {
    $('.cardify-mode').cardify();
  });

  $('#cardify2-btn').on('click', function() {
    $('.cardify-mode').cardifyStylesInline();
  });

  $('#cardify3-btn').on('click', function() {
    $('.cardify-mode').cardifyStylesBlock();
  });

  function goingBack(btn) {
    btn.on('click', function() {
      window.location.href = '../index.html';
    });
  }

  goingBack($('#return'));
  goingBack($('#return2'));
  goingBack($('#return3'));
});
