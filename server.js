const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// Use CSS styles in public folder
app.use(express.static('public'));
// Body parser middleware (Express). By using body-parser we can make use of the req.body object.
app.use(bodyParser.urlencoded({
  extended: true
}));
// EJS templating language
app.set('view engine', 'ejs');

// GET root route and renders index.html
// Instead of using res.send, we use res.render when working with a templating language. 
app.get("/", function (request, response) {
  response.render("index");
});

// POST
app.post("/", function (request, response) {
  response.render("index");
  console.log(request.body.city);
});

app.listen(3000, function () {
  console.log("Example app is running on port 3000!");
});