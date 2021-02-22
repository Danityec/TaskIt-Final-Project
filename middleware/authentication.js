const Session = require('../models/session');

const checkAuthenticated = (req, res, next) => {
    console.log('checkAuthenticated req:')
    console.log(req.headers)

    Session.findOne({ cookie: req.headers['user'] })
        .then(docs => {
            if (docs !== [])
                next()
            else
                res.status(401).send('user is unauthenticated')
        })
        .catch(err => console.log(err))

    //
    // if (req.cookies.user) {
    //     next()
    // } else {
    //     res.status(401).send('user is unauthenticated')
    // }
}

module.exports = {
    checkAuthenticated
}