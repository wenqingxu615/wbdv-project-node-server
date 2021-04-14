const mongoose = require("mongoose")
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
    liked: [String],
    comments: [{bookId: String, comment: String}],
    selled: [{bookId: String, price: Number}]
}, {collection: "users"})

module.exports = usersSchema