//console.log("hello from char counter")

$(document).ready(function() {
  console.log("document is ready");
  
  $('#tweet-composer').keyup(function(event) {
    const textLength = $(this).val().length;
    const maxLength = 140;
    const textCount = maxLength - textLength;
    //reassign the counter element to show the amount of characters left
    const counter = $(this).parent().next().children().last();
    counter.html(textCount);

    if (textCount < 0) {
      $(counter).removeClass('counter');
      $(counter).addClass('negative-count');
    } else {
      $(counter).removeClass('negative-count');
      $(counter).addClass('counter');
    }

  });


});