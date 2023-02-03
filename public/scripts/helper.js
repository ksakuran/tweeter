/**** HELPER FUNCTIONS FOR CLIENT.JS ****/ 

//function to create html structure to add in to the dom

const createTweetElement = function(tweet) {
  //function to prevent cross site scripting
  //tried to leave outside this function but it wasn't working

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  const $newTweet = $(`
  <article class="tweet-container">
    <header class="tweet-container">
      <div><img src="${tweet.user.avatars}">
      ${tweet.user.name}
      </div>
      <div>${tweet.user.handle}</div>
    </header>
      <p class="tweet-container">
      ${escape(tweet.content.text)}
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
};

//renders tweets from database into html elements and appends to the tweet section
const renderTweets = function(databaseArray) {

  const $tweetSection = $('section.tweet-container');
  //clear the section so that the database isn't repeating for every get request
  $tweetSection.empty();

  databaseArray.forEach(element => {
    const $tweet = createTweetElement(element);
    $tweetSection.prepend($tweet);
  });

};


//make a get request and recieve the array of tweets as JSON
const loadTweets = function() {
  $.get('/tweets')
    .then(response => {
      renderTweets(response);
    });
};