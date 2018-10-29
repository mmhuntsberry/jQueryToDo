if (typeof $ == 'undefined') {
  var $ = jQuery;
}

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
    $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + $(this).val() + '</li>');
    localStorage.setItem('todolist', $('ul').html());
    $(this).val('');
  }
});

// Animates hiding and displaying of input
// also changes the plus sign to minus and back again
$('.fa-plus').on('click', function() {
  $('input[type="text"]').slideDown();
  if ($(this).hasClass('fa-plus')) {
    $(this)
      .removeClass('fa-plus')
      .addClass('fa-minus');
  } else {
    $('input[type="text"]').fadeOut();
    $(this)
      .removeClass('fa-minus')
      .addClass('fa-plus');
  }
});

(function($) {
  $('ul').html(localStorage.getItem('todolist'));
})(jQuery);
