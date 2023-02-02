/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//function to create html structure to add in to the dom
const createTweetElement = function(tweet) {

  const $newTweet = $(`
  <article class="tweet-container">
    <header class="tweet-container">
      <div><img src="${tweet.user.avatars}">
      ${tweet.user.name}
      </div>
      <div>${tweet.user.handle}</div>
    </header>
      <p class="tweet-container">
      ${tweet.content.text}
      </p>
    <footer class="tweet-container">
      ${timeago.format(tweet.created_at)}
      <span class="tweet-container">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </span>
    </footer>
  </article>
  `);

  return $newTweet;
}

//test driver code, fake data
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

//renders tweets from database into html elements and appends to the tweet section
const renderTweets = function (databaseArray) {

  databaseArray.forEach(element => {

    const $tweet = createTweetElement(element);
    const $tweetSection = $('section.tweet-container');
    $tweetSection.append($tweet);

  });
}


$(document).ready(function () {

  const $tweetForm = $('form.new-tweet');

  $tweetForm.submit(function(event) {
    event.preventDefault();

    //url encode the data from the form since the server is expecting this format
    const data = $tweetForm.serialize();
    
    //create post request with data from tweet form
    $.post('/tweets/', data, (response) => {   
    });

  });

  //make a get request and recieve the array of tweets as JSON
  const loadTweets = function () {
     $.get('/tweets')
     .then(response => {
      renderTweets(response);
     })
   };

   loadTweets();
});
