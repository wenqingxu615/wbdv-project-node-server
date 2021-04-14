const mongoose = require("mongoose")
const booksSchema = mongoose.Schema({
    bookId: String,
    likedBy: [String],
    commentedBy: [{username:String, comment: String}],
    selledBy: [{username: String, price: Number}]
},{collection:"books"})

module.exports = booksSchema