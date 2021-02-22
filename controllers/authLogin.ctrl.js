const User = require('../models/user');
const UserCtrl = require('./user.ctrl')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const Session = require('../models/session');

getLogout = (req, res) => {
    // res.clearCookie('user')
    // res.clearCookie('connect.sid');
    // req.session.destroy((err) => { console.log(err) });
    Session.deleteOne({ cookie: req.headers['user'] })
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))

    res.send("logout");
};

verify = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    }).catch(err => console.log(err))
    return ticket.getPayload();
}

createAuthLogin = async (req, res) => {
    let token = req.body.token
    let payload = await verify(token)

    await User.findOne({googleID: payload['sub']})
        .then(docs => {
            if (docs) {
                // req.session.user = docs
                // req.headers['user'] = docs.googleID
                // res.setHeader('user', docs.googleID)
                // res.cookie('user', docs)
                const session = new Session()
                session.cookie = docs
                session.save()
                    .then(() => res.json(docs))
                    .catch(err => console.log(err))
                // res.cookie('user-front', docs, { domain: '.task--it.herokuapp.com' })
                // res.json(docs)
            } else {
                let user = {
                    id: payload['sub'],
                    f_name: payload['given_name'],
                    l_name: payload['family_name'],
                    email: payload['email'],
                    avatar: payload['picture']
                }
                UserCtrl.createUser(user, req, res)
            }
        })
        .catch(err => console.log(err))
}

module.exports = {
    getLogout,
    createAuthLogin,
}