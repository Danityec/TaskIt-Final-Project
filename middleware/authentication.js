const checkAuthenticated = (req, res, next) => {
    console.log('checkAuthenticated req:')
    console.log(req.cookies.user)
    if (req.cookies.user) {
        next()
    } else {
        res.status(401).send('user is unauthenticated')
    }
}

module.exports = {
    checkAuthenticated
}