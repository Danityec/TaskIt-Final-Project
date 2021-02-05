const { Router } = require('express');
const router = new Router();
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

const authLoginController = require('../controllers/authLogin.ctrl');

// router.get('/', authLoginController.getAuthLogin);

// router.post('/', (req, res) => {
//     let token = req.body.token
//     async function verify() {
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//             // Or, if multiple clients access the backend:
//             //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//         });
//         const payload = ticket.getPayload();
//         console.log(payload)
//         const userid = payload['sub'];
//         // If request specified a G Suite domain:
//         // const domain = payload['hd'];
//         res.json(payload)

//       }
//       verify().catch(console.error);
     
// });




module.exports = { router };