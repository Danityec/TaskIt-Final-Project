const Message = require('../models/message');

getMessages = (req, res) => {
    Message.find({})
    .then(docs =>  res.json(docs))
    .catch(err => console.log(err))
}

getMessage = (req, res) => {
    Message.findOne({ _id: req.params.id })
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

createMessage = (req, res) => {
    const { body } = req
    const message = new Message();
    message.senderID = body.senderID
    message.receiverID = body.receiverID
    message.read = body.read
    message.timestamp = body.timestamp
    message.title = body.title
    message.message = body.message

    message.save()
        .then(() => res.json({id:`${message.id}`}))
        .catch(err => console.log(err))
}


module.exports = { 
    getMessages, 
    getMessage, 
    createMessage, 
}