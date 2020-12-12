//Gets access to dependencies
const express = require("express");

//Sets app port
const app = express();
const PORT = process.env.PORT || 3000;

//Parses data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing modules
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
