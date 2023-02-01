$(document).ready(function () {

  console.log("document is ready");
  //assigns hover to add box shadow for entire tweet container
  $('section.tweet-container').hover(
    function() {
      $(this).addClass("hover");
    },
    function () {      
      $(this).removeClass("hover");
    });

  //assigns hover class for icons so color will change
  $('span.tweet-container').children().hover(
    function() {
      $(this).addClass("hover");
    },
    function() {
      $(this).removeClass("hover");
    });
});