const offerDao = require("../../daos/offers-dao")

const findOfferByID = (bookId) =>{
    return offerDao.findOfferByID(bookId)
}

const createOffer = (offer) =>{
    return offerDao.createOffer(offer)
}

const findAllOffers = () =>{
    return offerDao.findAllOffers()
}

const deleteOffer = (username) =>{
    return offerDao.deleteOffer(username)
}

const findOfferByUsername = (username) =>{
    return offerDao.findOfferByUsername(username)
}


module.exports = {
    findOfferByID,
    createOffer,
    findAllOffers,
    deleteOffer,
    findOfferByUsername
}