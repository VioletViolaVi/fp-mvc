// importing router from express
const router = require("express").Router();
// taken from model folder
const Quotes = require("../model/Quotes");

// To do: Create a route for retrieving a random quote
router.get("/random", (req, res) => {
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
router.get("/", (req, res) => {
  try {
    const allQuotes = Quotes.showAllQuotes();
    res.json(allQuotes);
  } catch (err) {
    res.status(501).json({
      error: err.message
    });
  }
});

// To do: Refine this route and add handling for out-of-range IDs
router.get("/:id", (req, res) => {
  try {
    const quote = Quotes.showQuoteById(req.params.id);
    res.json(quote);
  } catch (err) {
    res.status(404).json({
      error: err.message
    });
  }
});

module.exports = router;
