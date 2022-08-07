const Quotes = require("./model/Quotes"); // taken from model folder

// To do: Create a route for retrieving a random quote
app.get("/quotes/random", (req, res) => {
  try {
    const quote = Quotes.showRandomQuote();
    res.json(quote);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

// To do: Create a route for retrieving all quotes
app.get("/quotes", (req, res) => {
  try {
    const allQuotes = Quotes.showAllQuotes();
    res.json(allQuotes);
  } catch (err) {
    res.status(501).json({
      error: err.message
    });
  }

  const payload = { quotes: quotes };
  res.json(payload);
});

// To do: Refine this route and add handling for out-of-range IDs
app.get("/quotes/:id", (req, res) => {
  try {
    const quote = Quotes.showQuoteById(req.params.id);
    res.json(quote);
  } catch (err) {
    res.status(404).json({
      error: err.message
    });
  }
});
