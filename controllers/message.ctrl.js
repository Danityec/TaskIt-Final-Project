const Message = require('../models/message');

getMessages = (req, res) => {
    Message.find({})
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

getMessage = (req, res) => {
    Message.find({ id: req.params.id })
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

createMessage = (req, res) => {
    const { body } = req
    const message = new Message();
    message.id = body.id
    // order.price = body.price
    // order.dishId = body.dishId
    // order.restaurantId = body.restaurantId

    message.save()
        .then(() => res.json({id:`${message.id}`}))
        .catch(err => console.log(err))
}


module.exports = { 
    getMessages, 
    getMessage, 
    createMessage, 
}