const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    uniqueID: { type: Number },
    senderID: { type: String },
    receiverID: { type: String},
    read: {type: Boolean},
    timestamp: {type: Date},
    title: {type, String},
    message: {type, String}  
}, { collection: 'messages' });

const Message = model('Message', messageSchema);
module.exports = Message;