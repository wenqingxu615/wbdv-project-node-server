const offersService = require("../services/offers/offers-service")

module.exports = (app) => {

    const findAllOffers = (req, res) => {
        offersService.findAllOffers()
            .then((offers) => {
                res.send(offers)
            })
    }

    const findOfferByID = (req, res) => {
        offersService.findOfferByID(req.params.bookId)
            .then(offer => res.send(offer))
    }


    const createOffer = (req, res) => {
        const offer = req.body;
        offersService.createOffer(offer)
                        .then((newoffer) => {
                            res.send(newoffer)
                        })
    }


    const deleteOffer = (req, res) => {
        offersService.deleteOffer(req.body)
            .then(deleted => {
                res.send(deleted)
            })
    }

    const findOfferByUsername = (req, res) => {
        offersService.findOfferByUsername(req.params.soldBy)
            .then(offer => res.send(offer))
    }


    app.post("/api/offers/create", createOffer);
    app.get("/api/offers/:bookId", findOfferByID);
    app.delete("/api/offers/delete", deleteOffer);
    app.get("/api/offers/:soldBy", findOfferByUsername);
    app.get("/api/offers",findAllOffers)
}