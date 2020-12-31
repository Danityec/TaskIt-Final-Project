const Chat = require('../models/chat');
const moment = require('moment');

getChats = (req, res) => {                 // get for all message by userID1/userID2
    if (req.query.userID) {
        Chat.find({
            $or: [{userID1: req.query.userID},{userID2: req.query.userID}]
        }).sort({ _id: -1 })
            .then(docs => { console.log(docs); res.json(docs) })
            .catch(err => console.log(err))
    }
    else {
        Chat.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    }
}

getChat = (req, res) => {                   // get message by userID1 with userID2
    Chat.findOne({ _id: req.params.id })
        .then(docs => { console.log(docs); res.json(docs) })
        .catch(err => console.log(err))
}

createChat = (req, res) => {                 
    const { body } = req
    const chat = new Chat();

    if (body.userID1 != '')
        chat.userID1 = body.userID1
    else
        task.templateID = null

    if (body.userID2 != '')
        chat.userID2 = body.userID2
    else
        chat.userID2 = null

    if (body.message != '')
        chat.message = body.message
    else
        chat.message = []
   
        chat.save()
        .then(() => res.json({ id: `${chat.id}` }))
        .catch(err => console.log(err))
}

createMessage = (req, res) => {              // save all history messages
    const { body } = req

    Chat.updateOne({ _id: req.params.id }, {
        $push:{messages: {timestamp: moment().format('L') + " - " + moment().format('LT'), senderID: body.senderID ,message: body.message} }
    })
        .then(() => res.json({ id: `${req.params.messages}` }))
        .catch(err => console.log(err))
}


module.exports = {
    getChats,
    getChat,
    createChat,
    createMessage
}