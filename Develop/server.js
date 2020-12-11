//Gets access to dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

//Sets app port
const app = express();
const PORT = 3000;

//Parses data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function (req, res) {
  fs.readFile("/db/db.json", "utf8", (error, data) =>
    error ? console.error(error) : console.log(data)
  );
  console.log(res.json(notes));
  return res.json(notes);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
