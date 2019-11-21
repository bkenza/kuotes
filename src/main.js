const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

// Get quote from endpoint
function getQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayQuote(data.message);
    })
    .catch(function () {
      console.log("An error occurred");
    });
}

// display quote
function displayQuote(quote) {
  const quoteText = document.querySelector('.quote-text');
  quoteText.textContent = quote;

  const tweetButton = document.querySelector('.tweet');
  tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
}

// toggle contrast of the website
function changeTheme() {
  document.body.classList.toggle('light-theme');
}

const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

const changeThemeButton = document.getElementById('change-theme-btn');
changeThemeButton.addEventListener('click', changeTheme)



getQuote();
