const express = require("express");
const cors = require("cors");
const quotesController = require("./controller/quotes");
const indexController = require("./controller/index");

const app = express();

// .use() is middleware
app.use(cors());
// allows us to use all stuff, e.g. router.get("..."), in controller/quotes.js
app.use("/quotes", quotesController);
app.use("/", indexController);

module.exports = app;
