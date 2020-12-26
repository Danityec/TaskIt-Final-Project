const User = require('../models/user');

getUsers = (req, res) => {
    User.find({})
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

getUser = (req, res) => {
    User.find({uniqueID: req.params.id })
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

createUser = (req, res) => {
    const { body } = req
    const user = new User();
    console.log(body)
    user.uniqueID = body.uniqueID
    user.firstName = body.firstName
    user.lastName = body.lastName
    user.email = body.email
    user.admin = body.admin

    user.save()
        .then(() => res.json({uniqueID: `${user.uniqueID}`}))
        .catch(err => console.log(err))
}

updateUser = (req, res) => { 
    const { body } = req
    const user = {};
    user.firstName = body.firstName
    user.lastName = body.lastName
    user.email = body.email
    user.admin = body.admin

    const query = {uniqueID: req.params.uniqueID}

    User.updateOne(query, user)
        .then(() => res.json({uniqueID:`${req.params.uniqueID}`}))
        .catch(err => console.log(err))
}

deleteUser = (req, res) => {     
    User.deleteOne({id: req.params.id})
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

module.exports = { 
    getUsers, 
    getUser, 
    createUser, 
    updateUser, 
    deleteUser
}