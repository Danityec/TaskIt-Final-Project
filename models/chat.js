const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    senderID: { type: String },
    read: {type: Boolean},
    timestamp: {type: Date},
    message: {type: String} 
});

const chatSchema = new Schema ({
    userID1: {type: String},
    userID2: {type: String},
    messages: [messageSchema]
}, { collection: 'chats' });

const Chst = model('Chst', chatSchema);

module.exports = Chst;