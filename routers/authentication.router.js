const { Router } = require('express');
const router = new Router();
const consts = require('../constants');
const { OAuth2Client } = require('google-auth-library');
const { CLIENT_ID } = consts;
const client = new OAuth2Client(CLIENT_ID);

router.post('/', (req, res) => {
    console.log(req.body)
    // token = req.body
    // async function verify() {
    //     const ticket = await client.verifyIdToken({
    //         idToken: token,
    //         audience: CLIENT_ID,  
    //     });
    //     const payload = ticket.getPayload();
    //     const userid = payload['sub'];   
    // }
    // verify().catch(console.error);
});

module.exports = { router };