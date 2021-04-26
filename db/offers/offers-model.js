const mongoose = require("mongoose")
const offersSchema = require("./offers-schema")
const offersModel = mongoose.model("offersModel", offersSchema)
module.exports = offersModel