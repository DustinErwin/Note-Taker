const router = require("express").Router();
const fs = require("fs");
const noteList = require("../db/db");

router.get("/notes", (req, res) => {
  res.json(noteList);
});

router.post("/notes", (req, res) => {
  const note = { title: req.body.title, text: req.body.text };
  noteList.push(note);
  fs.writeFile("./db/db.json", JSON.stringify(noteList), {}, (e) =>
    console.log(e)
  );
  console.log(noteList);
});

router.delete("/notes/:id", (req, res) => {
  res.json(noteList);
});

module.exports = router;
