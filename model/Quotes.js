const quotes = require("../data/quotes");

function getRandomQuote() {
  //Generate a random integer between 0 and length of the quotes array.
  const randomId = Math.floor(Math.random() * quotes.length);
  return quotes[randomId];
}

// Check that user input is in the range of allowed indexes for the quotes array
if (id >= 1 && id <= quotes.length) {
  res.json({ id: id, quote: quotes[id - 1] });
} else {
  res.status(404).json({ code: 404, error: "Quote not found" });
}
