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
    // sold: [{bookId: String, price: String}],
    role:  {type: String, enum: ['buyer','seller']}
}, {collection: "users"})

module.exports = usersSchema