const Session = require('../models/session');

const checkAuthenticated = (req, res, next) => {
    console.log("dddd")
    console.log(req.headers.user.googleID)
    console.log("dddjjjjjjjjjjjjjjjjjjjjjjjjjjjjjd")
    console.log(req)
    Session.findOne({ id: req.headers.user.googleID })
        .then(docs => {
            console.log('checkAuthenticated = good!!')
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