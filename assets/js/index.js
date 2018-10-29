// Adds the done class clicked li
$('li').on('click', function() {
  $(this).toggleClass('done');
});

// fades out and removes the parent li of the
// clicked on span
$('span').on('click', function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});
