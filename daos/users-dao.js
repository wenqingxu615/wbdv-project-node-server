const usersModel = require("../db/users/users-model")

const findUserByUsername = (username) => {

    return usersModel.find({username})
}

const findUserByCredentials = (credentials) => {
    return usersModel.findOne({
        username: credentials.username,
        password: credentials.password
    })

}

const findAllUsers = () =>{
    return usersModel.find()
}

const createUser = (user) => {
    return usersModel.create(user)
}

module.exports = {
    findAllUsers,
    findUserByUsername,
    findUserByCredentials,
    createUser
}