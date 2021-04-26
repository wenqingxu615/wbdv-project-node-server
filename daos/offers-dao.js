const offersModel = require("../db/offers/offers-model")

// const insertOrUpdateOffer= (offer) => {
//     return offersModel.update({_id : bookId},{$set: book}, {upsert: true, setDefaultsOnInsert: true})
// }

const findOfferByID = (bookId) => offersModel.find({_id:bookId})

const findOfferByUsername = (username) =>  offersModel.find({soldBy: username})

const createOffer = (offer) => offersModel.create(offer)

const findAllOffers = () => offersModel.find()

const deleteOffer = (username) => offersModel.deleteOne({soldBy: username})


module.exports = {
    deleteOffer,
    // insertOrUpdateOffer,
    findOfferByUsername,
    findOfferByID,
    createOffer,
    findAllOffers
}