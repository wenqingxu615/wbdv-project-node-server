const mongoose = require("mongoose")
const offersSchema = mongoose.Schema({
    bookId: String,
    // soldBy: [{username: String, price: String}]
    soldBy: String,
    price: String
},{collection:"offers"})

module.exports = offersSchema