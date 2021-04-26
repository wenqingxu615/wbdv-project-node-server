const mongoose = require("mongoose")
const booksSchema = require("../books/books-schema")
const usersSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    country: String,
    postalCode: String,
    aboutMe: String,
    following: [String],
    followedBy: [String],
    liked: [booksSchema],
    comments: [{book:booksSchema, comment: String}],
    sold: [String],
    role:  {type: String, enum: ['buyer','seller']}
}, {collection: "users"})

module.exports = usersSchema