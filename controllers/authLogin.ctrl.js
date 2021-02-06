const User = require('../models/user');
const UserCtrl = require('./user.ctrl')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

getLogout = (req, res) => {
    req.logout()
    res.redirect('/')
}

const verify = async (token) => {
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
                next()
                // res.json(docs)
            } else {
                console.log('the user does NOT exist')
                let user = {
                    id: payload['sub'],
                    f_name: payload['given_name'],
                    l_name: payload['family_name'],
                    email: payload['email'],
                }
                UserCtrl.createUser(user, res)
                next()
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