const app = require("./app");

const port = process.env.PORT || 3000;

// To do: Get the server running
app.listen(port, () => {
  console.log(`Express listening on port ${port}...`);
});
