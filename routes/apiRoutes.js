const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const noteList = require("../db/db");

router.get("/notes", (req, res) => {
  res.send(noteList);
});

router.post("/notes", (req, res) => {
  const note = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor(Math.random() * 100000),
  };
  noteList.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteList),
    {},
    (e) => console.log(e)
  );
  res.json(noteList);
});

router.delete("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  let newNoteList = [];

  for (let i = 0; i < noteList.length; i++) {
    if (noteList[i].id !== noteId) {
      newNoteList.push(noteList[i]);
    }
  }

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(newNoteList),
    {},
    (e) => console.log(e)
  );
  res.json(noteList);
});

module.exports = router;
