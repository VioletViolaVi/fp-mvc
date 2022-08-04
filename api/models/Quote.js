const { Pool } = require("pg");
const db = new Pool();

class Quote {
  constructor(data) {
    this.quote = data.quote;
    this.author = data.author;

    // [this.quote, this.author] = data.split("-");
  }

  static async showAll() {
    const { rows } = await db.query("SELECT * FROM quotes");
    const quotes = rows.map((singleQuote) => new Quote(singleQuote));
    console.log("quotes:", rows);

    if (!quotes.length) {
      throw new Error("No quotes found");
    }
    return quotes;
  }

  static async showRandom() {
    /* (another way)
        // get all elements in rows
        const { rows } = await db.query("SELECT * FROM quotes");
        // create random number
        const randomId = Math.floor(Math.random() * rows.length); 
        console.log("random quote:", rows[randomId]);
        return new Quote(rows[randomId]);
    */

    const { rows } = await db.query("SELECT * from quotes ORDER BY RANDOM() LIMIT 1");
    console.log("random quote:", rows);

    if (rows[0]) {
      return new Quote(rows[0]);
    } else {
      throw new Error("Oops, something went wrong on our side");
    }
  }

  // need 'async' as 'await' is used below
  static async show(id) {
    // get all
    const { rows } = await db.query("SELECT * FROM quotes WHERE id = $1", [id]);
    console.log("quotes:", rows[0]);

    // Check that user input is in the range of allowed indexes for the quotes array
    // 'row[0]' returns a falsy value
    if (rows[0]) {
      return new Quote(rows[0]);
    } else {
      throw new Error("Quote not found");
    }
  }
}

module.exports = Quote;
