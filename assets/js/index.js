// Adds the done class clicked li
// listens for a li click inside a ul.  This is for dynamicChildren.
$('ul').on('click', 'li', function() {
  $(this).toggleClass('done');
});

// fades out and removes the parent li of the
// clicked on span
// listens for a span click in a ul.  This is for dynamicChildren
$('ul').on('click', 'span', function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

// listens for the enter keypress
// then appends a new li to the ul
$('input[type="text"]').on('keypress', function(e) {
  if (event.which === 13) {
    console.log($(this).val());
    $('ul').append('<li><span>X</span> ' + $(this).val() + '</li>');
    $(this).val('');
  }
});
