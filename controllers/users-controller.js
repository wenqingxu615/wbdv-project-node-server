const usersService = require("../services/users/users-service")
const userDao = require("../daos/users-dao")
// const usersModel = require("../db/users/users-model")

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
                if(actualUser) {
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

    // const clickFollow = (req,res) => {
    //     const follower = req.params.userA;
    //     const followed = req.params.userB;
    //     userDao.addFollowing(follower,followed)
    //         .then((response) => res.send(response))
    //     userDao.addFollower(followed,follower)
    //         .then((response) => res.send(response))
    // }

    const updateUser = (req,res) =>{
        userDao.updateUser(req.body)
            .then(updated => {
                res.send(updated)
            })
    }

    const findUserByUsername = (req,res) =>{
        userDao.findUserByUsername(req.params.name)
            .then(user => res.send(user))
    }

    const profile = (req, res) => {
        const currentUser = req.session['profile']
        res.send(currentUser)
    }

    const logout = (req,res) =>{
            req.session.destroy()
            res.send(200)
        }

    app.post("/api/users/profile", profile);
    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.get("/api/users", findAllUsers);
    app.put("/api/users/profile",updateUser);
    app.get("/api/users/:name",findUserByUsername);
    // app.put("/api/users/:name",followUser)
    app.post('/api/users/logout', logout);
}