const User = require('../models/user');
const Session = require('../models/session');

getUsers = (req, res) => {
    if (req.query.email) {
        User.findOne({email: req.query.email})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    } else {
        User.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    }
}

getUser = (req, res) => {
    User.findOne({googleID: req.params.id})
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
}

createUser = (token, req, res) => {
    const user = new User();

    user.googleID = token['id']
    user.firstName = token['f_name']
    user.lastName = token['l_name']
    user.email = token['email']
    user.avatar = token['avatar']
    user.admin = false

    user.save()
        .then(() => {
            const session = new Session()
            session.id = user.googleID
            session.save()
                .then(() => {
                    User.findOne({googleID: token['id']})
                        .then(docs => res.json(docs))
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

module.exports = {
    getUsers,
    getUser,
    createUser,
}