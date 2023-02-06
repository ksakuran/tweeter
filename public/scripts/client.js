/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const $tweetForm = $('form.new-tweet');
  $('#form-error').hide();

  //creates html to add in the dom when no text is submitted
  const $noTextError = $(
    `<div id="form-error">
      <i class="fa-solid fa-triangle-exclamation"></i>
      <p class="error">"Error! Text input invalid, cannot submit an empty tweet."</p>
      <i class="fa-solid fa-triangle-exclamation"></i>
    </div>`);
  
  //creates html to add in the dom when text input is over character limit
  const $textLimitError = $(
    `<div id="form-error">
       <i class="fa-solid fa-triangle-exclamation"></i>
       <p class="error">"Error! Text input invalid, tweet is over character limit."</p>
       <i class="fa-solid fa-triangle-exclamation"></i>
    </div>`);
  

  $tweetForm.submit(function(event) {
    event.preventDefault();
    $('#form-error').hide();

    //send alert if textarea is empty on submit
    if (!$('#tweet-composer').val()) {

      $('form.new-tweet').prepend($noTextError);
      $('#form-error').hide();
      $('#form-error').slideDown("slow");
      setTimeout(() => {
        $('#form-error').slideUp("slow");
      }, "7000");
      
      
      return;
    }

    // send alert if textarea is more than character limit
    if ($('#tweet-composer').val().length > 140) {

      $('form.new-tweet').prepend($textLimitError);
      $('#form-error').hide();
      $('#form-error').slideDown("slow");
      setTimeout(() => {
        $('#form-error').slideUp("slow");
      }, "7000");
      
      return;
    }

    //url encode the data from the form since the server is expecting this format
    const data = $tweetForm.serialize();
 
    //create post request with data from tweet form, clear
    $.post('/tweets/', data, (response) => {

      //reset form area
      $('#tweet-composer').val("");
      $('#count-num').val(140);
      
      loadTweets();
    });
  
  });

  loadTweets();

});
