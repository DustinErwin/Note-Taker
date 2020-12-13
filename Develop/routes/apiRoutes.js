const router = require("express").Router();
const fs = require("fs");
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
  fs.writeFile("./db/db.json", JSON.stringify(noteList), {}, (e) =>
    console.log(e)
  );
});

router.delete("/notes/:id", (req, res) => {
  const noteId = parseInt(req.params.id);
  let newNoteList = [];
  console.log(noteList[1].id);
  console.log(noteId);
  for (let i = 0; i < noteList.length; i++) {
    if (noteList[i].id !== noteId) {
      newNoteList.push(noteList[i]);
    }
  }

  fs.writeFile("./db/db.json", JSON.stringify(newNoteList), {}, (e) =>
    console.log(e)
  );

  console.log(newNoteList);
});

module.exports = router;
