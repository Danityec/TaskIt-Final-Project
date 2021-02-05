const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

getlogout = (req, res) => {
    req.logout()
    res.redirect('/')
}


createAuthLogin = (req, res, next) => {
    let token = req.body.token
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        console.log(payload)
        const userid = payload['sub'];
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
        next(createUser())
    }
    verify().catch(console.error);

};


module.exports = {
    getAuthLogin,
    createAuthLogin,

}