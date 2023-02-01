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
      ${tweet.created_at}
      <span class="tweet-container">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </span>
    </footer>
  </article>
  `)

  return $newTweet;
}

//test driver code 
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

//test dirver code ^^^^
const renderTweets = function (databaseArray) {

  databaseArray.forEach(element => {

    const $tweet = createTweetElement(element);
    const $tweetSection = $('section.tweet-container');
    $tweetSection.append($tweet);

  });
}

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function () {

  //console.log("hello from client, here is new tweet")
  
  renderTweets(data)

});
