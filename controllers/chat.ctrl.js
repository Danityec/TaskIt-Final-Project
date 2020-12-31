const Chat = require('../models/chat');

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

getChat = (req, res) => {                   // get all message by userID1 with userID2
    Chat.findOne({ _id: req.params.id })
        .then(docs => { console.log(docs); res.json(docs) })
        .catch(err => console.log(err))
}

createChat = (req, res) => {                 //send one message
    const { body } = req
    const message = new Chat();
    message.senderID = body.senderID
    message.receiverID = body.receiverID
    message.read = body.read
    message.timestamp = body.timestamp
    message.title = body.title
    message.message = body.message

    message.save()
        .then(() => res.json({ id: `${message.id}` }))
        .catch(err => console.log(err))
}

createMessage = (req, res) => {              // save all history messages

}


module.exports = {
    getChats,
    getChat,
    createChat,
    createMessage
}