const Session = require('../models/session');

const checkAuthenticated = (req, res, next) => {
    Session.findOne({ cookie: req.headers['user'] })
        .then(docs => {
            console.log(docs)
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