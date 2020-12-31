const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    admin: { type: Boolean },

}, { collection: 'users' });

const User = model('User', userSchema);
module.exports = User;