

$(document).ready(function() {

  //access the textarea by id to get the value of characters by length
  $('#tweet-composer').keyup(function(event) {
    const textLength = $(this).val().length;
    const maxLength = 140;
    const textCount = maxLength - textLength;

    //reassign the counter element to show the amount of characters left
    const counter = $(this).parent().next().children().last();
    counter.html(textCount);

    //changes the class of the counter to show color of text red if negative
    if (textCount < 0) {
      $(counter).removeClass('counter');
      $(counter).addClass('negative-count');
    } else {
      $(counter).removeClass('negative-count');
      $(counter).addClass('counter');
    }

  });

});