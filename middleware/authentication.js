const checkAuthenticated = (req, res, next) => {
    if (req.cookies.user) {
        next()
    } else {
        res.status(401).send('user is unauthenticated')
    }
}

module.exports = {
    checkAuthenticated
}