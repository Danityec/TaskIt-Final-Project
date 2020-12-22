const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: { type: Number },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    password: { type: String },

}, { collection: 'users' });

const User = model('User', userSchema);
module.exports = User;