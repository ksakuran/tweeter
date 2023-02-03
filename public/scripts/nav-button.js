$(document).ready( function() {
  
  $('section.new-tweet').hide();

  $('#arrows').on("click", function () {
    
    if ($('section.new-tweet').is(':visible')) {
      $('section.new-tweet').slideUp();
    } else {
      $('section.new-tweet').slideDown();
    }

  });

});