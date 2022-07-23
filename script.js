const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let quote,
  apiQuotes = [];

// Shows Loading Spinner
function showLoading() {
  quoteContainer.hidden = true;
  loader.hidden = false;
}

// Removes Loading Spinner
function showLoaded() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Picks a random quote
function newQuote(data) {
  showLoading();
  try {
    quote = data[Math.floor(Math.random() * data.length)];
  } catch (error) {
    quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  }

  // If the quote has no author
  if (!quote.author) {
    quoteAuthor.innerText = "Anonymous";
  } else {
    quoteAuthor.innerText = quote.author;
  }
  quoteText.innerText = quote.text;

  // Show the quotes container only after the new quote is loaded
  showLoaded();
}

// Gets quotes from API
async function getQuotes() {
  showLoading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote(apiQuotes);
  } catch (error) {
    // Gets quotes from local JS array object
    getNewQuote();
  }
}

function getNewQuote() {
  newQuote(localQuotes);
}

// Tweet Quote Functionality
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
}

// On Load
getQuotes();

//Event Listeners
twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", getNewQuote);
