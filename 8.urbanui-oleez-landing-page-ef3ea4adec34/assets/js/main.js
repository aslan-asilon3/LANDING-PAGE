$('.oleez-header .dropdown').hover(function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
});

$('[data-toggle="offCanvasMenu"]').click(function() {
  $('#offCanvasMenu').addClass('open');
});

$('[data-dismiss="offCanvasMenu"]').click(function() {
  $(this).parent('#offCanvasMenu').removeClass('open');
});

$('[data-toggle="searchModal"]').click(function() {
  $('#searchModal').addClass('open');
});

$('[data-dismiss="searchModal"]').click(function() {
  $(this).parent('#searchModal').removeClass('open');
});