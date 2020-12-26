const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    uniqueID: { type: Schema.ObjectId },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    admin: { type: Boolean },

}, { collection: 'users' });

const User = model('User', userSchema);
module.exports = User;