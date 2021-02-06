const User = require('../models/user');
const UserCtrl = require('./user.ctrl')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

getLogout = (req, res) => {
    req.logout()
    res.redirect('/')
}

verify = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
     return ticket.getPayload();
}

createAuthLogin = async (req, res, next) => {
    let token = req.body.token
    let payload = await verify(token)

    await User.findOne({googleID: payload['sub']})
        .then(docs => {
            if (docs) {
                console.log('the user exists')
                req.session.user = docs
                checkRole(req, ()=>{res.json(req.session.user)})
            } else {
                console.log('the user does NOT exist')
                let user = {
                    id: payload['sub'],
                    f_name: payload['given_name'],
                    l_name: payload['family_name'],
                    email: payload['email'],
                }
                req.session.payload = user
                UserCtrl.createUser(user, req, res, checkRole)
            }
        })
        .catch(err => {
            console.log(err)
        })
}

checkRole = (req, next) => {
    if(req.session.user.admin){
        console.log("admin")
        next()
    } else {
        console.log("regUser")
        next()
    }
}

module.exports = {
    getLogout,
    createAuthLogin,
}