const authorController = require("../Controllers/authorController");

const router = require("express").Router();

// add author
router.post("/", authorController.addAuthor);

// get all authors
router.get("/", authorController.getAllAuthors);

// get an author
router.get("/:id", authorController.getAnAuthor);

//Update an author
router.put("/:id", authorController.updateAnAuthor)

// delete an author
router.delete("/:id", authorController.deleteAnAuthor)

module.exports = router;