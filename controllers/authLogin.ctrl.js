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

checkRole = (req, res, next) => {
    console.log("checkRole: "+ req.session.user)
    if(req.session.user.admin){
        // admin
        // next(admin, docs)
    } else {
        // regular user
        // next(regUser, docs)
    }
}

createAuthLogin = async (req, res, next) => {
    let token = req.body.token
    let payload = await verify(token)

    await User.findOne({googleID: payload['sub']})
        .then(docs => {
            if (docs) {
                console.log('the user exists')
                req.session.user = docs
                checkRole(req, res, next)

            } else {
                console.log('the user does NOT exist')
                let user = {
                    id: payload['sub'],
                    f_name: payload['given_name'],
                    l_name: payload['family_name'],
                    email: payload['email'],
                }
                req.session.payload = user
                UserCtrl.createUser(user, res)
                // console.log("session: "+req.session.user)

                // req.session.user = docs
                // checkRole(req, res, next)
            }
        })
        .catch(err => {
            console.log(err)
        })
}


module.exports = {
    getLogout,
    createAuthLogin,
}