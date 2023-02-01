/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//function to create html structure to add in to the dom
const createTweetElement = function(tweet) {

  const $newTweet = $(`
  <article>
    <header class="tweet-container">
      <div><img src="${tweet.user.avatar}">
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
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

//test dirver code ^^^^


// $(document).ready(function () {
//   console.log("hello from client, here is new tweet")
//   const $tweet = createTweetElement(tweetData);
//   console.log($tweet);

//   $('section.tweet-container').append($tweet);
// });
