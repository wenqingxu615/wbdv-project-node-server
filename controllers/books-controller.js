const bookDao = require("../daos/books-dao")


module.exports = (app) => {
    const findBookById = (req, res) => {
        const id = req.params.id
        bookDao.findBookByID(id)
            .then(response => {
                if (response.length > 0) {
                    res.send(response)
                } else {
                    res.send("0")
                }
            })

    }

    const updateBook = (req, res) => {
        bookDao.insertOrUpdateBook(req.body)
            .then(updated => res.send(updated))
    }

    app.post("/api/local/:id", findBookById);
    app.put("/api/local/:id",updateBook);
}