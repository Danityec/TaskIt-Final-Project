const checkAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.status(401).send('user is unauthenticated')
    }
}

module.exports = {
    checkAuthenticated
}