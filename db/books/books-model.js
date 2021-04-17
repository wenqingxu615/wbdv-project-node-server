const mongoose = require("mongoose")
const booksSchema = require("./books-schema")
const booksModel = mongoose.model("BookModel", booksSchema)
module.exports = booksModel