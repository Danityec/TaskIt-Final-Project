const User = require('../models/user');

getUsers = (req, res) => {
    if (req.query.email) {
        User.findOne({ email: req.query.email })
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    }
    else {
        User.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    }
}

getUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
}

createUser = (req, res) => {
    const { body } = req
    const user = new User();

    if(body.firstName == null || body.firstName == "")
        res.json(null)

    else user.firstName = body.firstName

    if(body.lastName == null || body.firstName == "")
        res.json(null)

    else user.lastName = body.lastName
    
    if(body.email == null || body.firstName == "")
        res.json(null)

    else user.email = body.email
    
    user.admin = body.admin

    user.save()
        .then(() => res.json({ _id: `${user.id}` }))
        .catch(err => console.log(err))
}

updateUser = (req, res) => {
    const { body } = req
    const user = {};
    if(body.firstName == null || body.firstName == "")
        res.json(null)

    else user.firstName = body.firstName

    if(body.lastName == null || body.firstName == "")
        res.json(null)
    else user.lastName = body.lastName

    if(body.email == null || body.firstName == "")
        res.json(null)

    else user.email = body.email
    
    user.admin = body.admin

    const query = { _id: req.params.id }

    User.updateOne(query, user)
        .then(() => res.json({ _id: `${req.params.id}` }))
        .catch(err => console.log(err))
}

deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => res.json({ _id: `${req.params.id}` }))
        .catch(err => console.log(err))
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}