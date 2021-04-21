const usersService = require("../services/users/users-service")
const userDao = require("../daos/users-dao")

module.exports = (app) => {

    const  findAllUsers = (req,res) =>{
        usersService.findAllUsers()
            .then((users) => {
                res.send(users)
            })
    }

    const register = (req, res) => {
        const credentials = req.body;
        userDao.findUserByUsername(credentials.username)
            .then((actualUser) => {
                if(actualUser.length > 0) {
                    res.send("0")
                } else {
                    userDao.createUser(credentials)
                        .then((newUser) => {
                            req.session['profile'] = newUser
                            res.send(newUser)
                        })
                }
            })
    }

    const login = (req, res) => {
        const credentials = req.body;
        userDao.findUserByCredentials(credentials)
            .then((actualUser) => {
                if(actualUser) {
                    req.session['profile'] = actualUser
                    res.send(actualUser)
                } else {
                    res.send("0")
                }
            })
    }

    // followerUsername: the user who clicked "follow“
    // followedUsername: the user who got a new follower
    // const followUser = (req, res) => {
    //
    //     userDao.findUserByUsername(followerUsername)
    //         .then(follower => {
    //             userDao.addFollowing(follower,followedUsername)
    //         })
    // }
    //
    // const followedByUser = (followedUsername, followerUsername) => {
    //     userDao.findUserByUsername(followedUsername)
    //         .then(followed => {
    //             userDao.addFollower(followed,followerUsername)
    //         })
    // }

    const updateUser = (req,res) =>{
        userDao.updateUser(res.body)
            .then(updated => res.send(updated))
    }

    const findUserByUsername = (req,res) =>{
        userDao.findUserByUsername(res.params.username)
            .then(user => res.send(user))
    }

    const profile = (req, res) => {
        const currentUser = req.session['profile']
        res.send(currentUser)
    }

    app.post("/api/users/profile", profile);
    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.get("/api/users", findAllUsers);
    app.put("/api/users/profile",updateUser);
    app.post("/api/user/:name",findUserByUsername);
    // app.put("/api/users/:name",followUser)
    // app.put("api/users/:")
}