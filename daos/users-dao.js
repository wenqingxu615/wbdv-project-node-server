const usersModel = require("../db/users/users-model")

const findUserByUsername = (username) => {

    return usersModel.findOne({username: username})
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

const updateUser = (user) => usersModel.updateOne({_id:user._id},{$set:user})


// const addFollowing = (user, newFollowing) => usersModel.updateOne({_id:user._id}, {$set: {following:user.following.push(newFollowing)}})
//
// const addFollower = (user, newFollower) => usersModel.updateOne({_id:user._id}, {$set:{followedBy: user.followedBy.push(newFollower)}})

module.exports = {
    findAllUsers,
    findUserByUsername,
    findUserByCredentials,
    createUser,
    updateUser,

}