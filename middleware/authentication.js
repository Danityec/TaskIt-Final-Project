const Session = require('../models/session');

const checkAuthenticated = (req, res, next) => {
    Session.findOne({id: req.headers.user})
        .then(docs => {
            if (docs !== [])
                next()
            else
                res.status(401).send('user is unauthenticated')
        })
        .catch(err => console.log(err))
}

module.exports = {
    checkAuthenticated
}