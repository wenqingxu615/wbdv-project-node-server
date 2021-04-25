const booksModel = require("../db/books/books-model")

const insertOrUpdateBook= (book) => {
    return booksModel.update({_id:book._id},{$set: book}, {upsert: true, setDefaultsOnInsert: true})
}

const findBookByID = (bookId) => booksModel.findOne({_id:bookId})

const createBook = (user) => booksModel.create(user)

const findAllBooks = () => {return booksModel.find()}

module.exports = {
    insertOrUpdateBook,
    findBookByID,
    createBook,
    findAllBooks
}