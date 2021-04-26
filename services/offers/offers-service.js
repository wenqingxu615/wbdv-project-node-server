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

const deleteOffer = (offer) =>{
    return offerDao.deleteOffer(offer)
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