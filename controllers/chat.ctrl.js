const Chat = require('../models/chat');
const moment = require('moment');

getChats = (req, res) => {
    if (req.query.userID) {
        Chat.find({
            $or: [{userID1: req.query.userID}, {userID2: req.query.userID}]
        }).sort({_id: -1})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    } else {
        Chat.find({})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    }
}

getChat = (req, res) => {
    Chat.findOne({_id: req.params.id})
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
}

createChat = (req, res) => {
    const {body} = req
    const chat = new Chat();

    if (body.userID1 != '' || body.userID1 != null) {
        chat.userID1 = body.userID1
    } else {
        res.sendStatus(400)
    }

    if (body.userID2 != '' || body.userID2 != null) {
        chat.userID2 = body.userID2
    } else {
        res.sendStatus(400)
    }

    if (body.message != '' || body.message != null) {
        chat.message = body.message
    } else {
        res.sendStatus(400)
    }

    chat.save()
        .then(() => res.json({id: `${chat.id}`}))
        .catch(err => console.log(err))
}

createMessage = (req, res) => {
    const {body} = req

    if (body.senderID == null || body.senderID == "") {
        res.sendStatus(400)
    }

    if (body.message == null || body.message == "") {
        res.sendStatus(400)
    }

    Chat.updateOne({_id: req.params.id}, {
        $push: {
            messages: {
                timestamp: moment().format('L') + " - " + moment().format('LT'),
                senderID: body.senderID,
                message: body.message
            }
        }
    })
        .then(() => {
            Chat.findOne({_id: req.params.id})
                .then(docs => res.json(docs))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

module.exports = {
    getChats,
    getChat,
    createChat,
    createMessage
}