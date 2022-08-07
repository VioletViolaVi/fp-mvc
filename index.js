const app = require("./app");

const port = process.env.PORT || 3000;

// To do: Get the server running
app.listen(port, () => {
  `Express listening on port ${port}...`;
});
