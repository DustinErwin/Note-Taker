const noteList = require("../db/db");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    res.json(noteList);
  });

  app.post("/api/notes", (req, res) => {
    res.json(noteList);
  });
};
