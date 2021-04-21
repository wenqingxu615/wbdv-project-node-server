const userDao = require("../../daos/users-dao")

const findAllUsers = () =>{
    return userDao.findAllUsers()
}



module.exports = {
    findAllUsers,
}