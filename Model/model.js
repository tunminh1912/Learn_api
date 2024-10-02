const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'   // Quan hien mot bang Book
    }],
});

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publicDate:{
        type: String,
    },
    genres:{
        type: [String],    // Ki hieu chuoi
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'   // Quan hien mot bang Author
    },
});

let Book = mongoose.model("Book",bookSchema);
let Author = mongoose.model("Author",authorSchema);
module.exports = {Book,Author};