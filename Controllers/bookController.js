const {Book,Author} = require('../Model/model');

const bookController ={
    //Add a book
    addAbook: async(req,res)=>{
        try {
            const newBook = new Book(req.body);
            const saveBook = await newBook.save();
            if(req.body.author){  //Neu co tac gia r thi tim ra tac gia do r thay the
                const author = Author.findById(req.body.author);
                await author.updateOne({$push: {books: saveBook._id}})
            }
            res.status(200).json(saveBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Get all books
    getAllbooks: async(req, res) =>{
        try {
            const allBooks = await Book.find();
            res.status(200).json(allBooks);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Get a book
    getABook: async(req, res)=>{
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Update a book
    updateBook: async(req, res)=>{
        try {
            const book = await Book.findById(req.params.id);
            await Book.updateOne({ $set: req.body });
            res.status(200).json("Updated successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Delete a book
    deleteBook: async(req, res)=>{
        try {
            // Xoa cuon sach trong author
            await Author.updateMany(
                {books: req.params.id},
                {$pull: {books: req.params.id}}
            );
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = bookController;