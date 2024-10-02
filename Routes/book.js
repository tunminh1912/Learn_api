const bookController = require('../Controllers/bookController');

const router = require('express').Router();

//Add a book
router.post("/", bookController.addAbook)

//Get all books
router.get("/", bookController.getAllbooks)

//get a book
router.get("/:id", bookController.getABook)

// Update a book
router.put("/:id", bookController.updateBook)

//Delete a book
router.delete("/:id", bookController.deleteBook)

module.exports = router;
