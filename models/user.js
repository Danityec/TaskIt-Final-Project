const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    googleID: {type: String, require: true},
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, require: true},
    admin: {type: Boolean, default: false},
    avatar: {type: String}
}, {collection: 'users'});

const User = model('User', userSchema);

module.exports = User;