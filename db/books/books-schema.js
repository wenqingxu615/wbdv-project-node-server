const mongoose = require("mongoose")
const booksSchema = mongoose.Schema({
    _id: String,
    title: String,
    likedBy: [String],
    commentedBy: [{username:String, comment: String}]
    // selledBy: [{username: String, price: String}]
},{collection:"books"})

module.exports = booksSchema