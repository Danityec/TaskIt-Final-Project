const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    senderID: { type: String , require:true },
    timestamp: { type: String , require:true },
    message: { type: String , require:true }
});

const chatSchema = new Schema({
    userID1: { type: String, require:true  },
    userID2: { type: String , require:true },
    messages: [messageSchema]
}, { collection: 'chats' });

const Chat = model('Chat', chatSchema);

module.exports = Chat;