const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: { type: Number },
    
}, { collection: 'users' });

const User = model('User', userSchema);
module.exports = User;