const User = require('../models/user');

getUsers = (req, res) => {
    User.find({})
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

getUser = (req, res) => {
    User.findOne({_id: req.params.id })
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

createUser = (req, res) => {
    const { body } = req
    const user = new User();
    user.firstName = body.firstName
    user.lastName = body.lastName
    user.email = body.email
    user.admin = body.admin

    user.save()
        .then(() => res.json({_id: `${user.id}`}))
        .catch(err => console.log(err))
}

updateUser = (req, res) => { 
    const { body } = req
    const user = {};
    user.firstName = body.firstName
    user.lastName = body.lastName
    user.email = body.email
    user.admin = body.admin

    const query = {_id: req.params.id}

    User.updateOne(query, user)
        .then(() => res.json({_id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

deleteUser = (req, res) => {     
    User.deleteOne({_id: req.params.id})
        .then(() => res.json({_id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

module.exports = { 
    getUsers, 
    getUser, 
    createUser, 
    updateUser, 
    deleteUser
}