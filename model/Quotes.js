const quotesData = require("../data/quotes");

class Quotes {
  constructor(dataParam) {
    // [this.quote, this.author] = data.split("_"); - quicker way than those below:
    const dataProcess = dataParam.split("-");
    this.quote = dataProcess[0];
    this.author = dataProcess[1];
  }

  static showRandomQuote() {}

  static showAllQuotes() {}

  static showQuoteById(idParam) {
    // Check that user input is in the range of allowed indexes for the quotesData array
    if (idParam >= 1 && idParam <= quotesData.length) {
      const response = new Quotes(quotesData[idParam - 1]);
      return response;
    } else {
      throw new Error("Quote not found");
    }
  }
}

// function getRandomQuote() {
//   //Generate a random integer between 0 and length of the quotesData array.
//   const randomId = Math.floor(Math.random() * quotesData.length);
//   return quotesData[randomId];
// }

module.exports = Quotes;
