const express = require("express");
// Start the Express Server
const app = express();

// Gets root route and renders index.html
// Instead of using res.send, we use res.render when working with a templating language. 
app.get("/", function (request, response) {
  response.render("index");
});

app.listen(3000, function () {
  console.log("Example app is running on port 3000!");
});

// EJS templating language
app.set('view engine', 'ejs');
// Use CSS styles in public folder
app.use(express.static('public'));