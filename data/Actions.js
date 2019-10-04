const express = require("express");
const db = require("../data/helpers/actionModel");
const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then(data => {
      res.status(200).json({ message: `${data}` });
    })
    .catch(err => {
      console.log("Nope", err);
    });
});

router.post("/", (req, res) => {
  const action = req.body;
  db.insert(action)
    .then(data => {
      res.status(201).json({ Message: "Created" });
    })
    .catch(err => {
      console.log("Nope", err);
    });
});

router.put("/:id", (req, res) => {
  const action = req.params.id;
  db.update(action, req.body)
    .then(data => {
      if (data) {
        res.status(200).json({ message: "Updated" });
      } else {
        res.status(400).json({ message: "That is not even a thing." });
      }
    })
    .catch(err => {
      console.log("Nope", err);
    });
});

router.delete("/:id", (req, res) => {
  const action = req.params.id;
  db.remove(action)
    .then(data => {
      res.status(202).json({ message: "Destroyed" });
    })
    .catch(err => {
      console.log("Nope", err);
    });
});

module.exports = router;
