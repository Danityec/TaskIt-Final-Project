const checkAuthenticated = (req, res, next) => {
    // console.log(req)
    console.log(req.cookies.user)
    if (req.cookies.user) {
        console.log("checkAuthenticated = yes")
        next()
    } else {
        console.log("checkAuthenticated = no")
        res.status(401).send('user is unauthenticated')
    }
}

const checkRole = (admin) => {
    // return (req, res, next) => {
    //     if (req.session.user.admin === admin) {
    //         console.log("checkRole = allowed");
    //         next()
    //     } else {
    //         console.log("checkRole = NOT allowed");
    //         res.status(403).send('not allowed, role does not permit')
    //     }
    // }
}

const checkOwnership = (req, res, next) => {
    // if (req.params.id === req.session.user.id) {
    //     console.log("checkOwnership = allowed");
    //     next()
    // } else {
    //     console.log("checkOwnership = NOT allowed");
    //     res.status(403).send('not allowed, user is not the owner')
    // }
    next()
}

module.exports = {
    checkAuthenticated,
    checkRole,
    checkOwnership
}

