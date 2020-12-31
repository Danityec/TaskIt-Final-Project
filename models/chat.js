const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    senderID: { type: String },
    timestamp: {type: String},
    message: {type: String} 
});

const chatSchema = new Schema ({
    userID1: {type: String},
    userID2: {type: String},
    messages: [messageSchema]
}, { collection: 'chats' });

const Chat = model('Chat', chatSchema);

module.exports = Chat;