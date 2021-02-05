const User = require('../models/user');

getUsers = (req, res) => {
    if (req.query.email) {
        User.findOne({ email: req.query.email })
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    } else {
        User.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    }
}

getUser = (req, res) => {
    User.findOne({ googleID: req.params.id })
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
}

createUser = (req, res) => {

    const {body} = req
    const user = new User();
    if (body.googleID == null || body.googleID == "") {
        res.sendStatus(400)
    } else {
        user.googleID = body.googleID
    }

    if (body.firstName == null || body.firstName == "") {
        res.sendStatus(400)
    } else {
        user.firstName = body.firstName
    }

    if (body.lastName == null || body.lastName == "") {
        res.sendStatus(400)
    } else {
        user.lastName = body.lastName
    }

    if (body.email == null || body.email == "") {
        res.sendStatus(400)
    } else {
        user.email = body.email
    }

    user.admin = body.admin

    user.save()
        .then(() => res.json({googleID: `${user.googleID}`}))
        .catch(err => console.log(err))
}

updateUser = (req, res) => {
    const { body } = req
    const user = {};

    if (body.firstName == null || body.firstName == "") {
        res.sendStatus(400)
    } else {
        user.firstName = body.firstName
    }

    if (body.lastName == null || body.lastName == "") {
        res.sendStatus(400)
    } else {
        user.lastName = body.lastName
    }

    if (body.email == null || body.email == "") {
        res.sendStatus(400)
    } else {
        user.email = body.email
    }

    user.admin = body.admin

    User.updateOne({ googleID: req.params.id }, user)
        .then(() => res.json({ googleID: `${req.params.id}` }))
        .catch(err => console.log(err))
}

deleteUser = (req, res) => {
    User.deleteOne({ googleID: req.params.id })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}