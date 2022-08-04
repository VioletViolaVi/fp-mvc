const router = require("express").Router();

const Quote = require("../models/Quote");

router.get("/random", async (req, res) => {
  try {
    const quote = await Quote.showRandom();
    res.json(quote);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const quotes = await Quote.showAll();
    res.json(quotes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const quote = await Quote.show(req.params.id);
    res.json(quote);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
});

module.exports = router;
