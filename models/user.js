const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: { type: String, require:true },
    lastName: { type: String , require:true },
    email: { type: String, require:true  },
    admin: { type: Boolean },

}, { collection: 'users' });

const User = model('User', userSchema);
module.exports = User;