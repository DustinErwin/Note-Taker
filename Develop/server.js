//Gets access to dependencies
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//Sets app port
const app = express();
const PORT = process.env.PORT || 3000;

//Parses data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//Starts server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
