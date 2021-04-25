const bookDao = require("../daos/books-dao")


module.exports = (app) => {
    const findBookById = (req, res) => {
        const id = req.params.id
        bookDao.findBookByID(id)
            .then(book => res.send(book))

    }

    const createBook = (req,res) => {
        const newBook = req.body
        bookDao.findBookByID(newBook._id)
            .then(response =>
                {
                    if (response){
                        res.send("0")
                    }else {
                        bookDao.createBook(newBook)
                            .then(actualBook => res.send(actualBook))
                    }
                }
            )
    }

    const updateBook = (req, res) => {
        bookDao.insertOrUpdateBook(req.body)
            .then(updated => res.send(updated))
    }
    const findAllBook = (req,res) => {
        bookDao.findAllBooks()
            .then(books => res.send(books))
    }
    app.get("/api/local/:id", findBookById);
    app.put("/api/local/:id",updateBook);
    app.post("/api/local/:id/create",createBook);
    app.get("/api/local",findAllBook);
}