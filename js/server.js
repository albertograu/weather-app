const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("Node works");
});

app.listen(3000, function() {
  console.log("Example app is running on port 3000!");
});
