const { Schema, model } = require('mongoose');
const User = require('../models/user');

const sessionSchema = new Schema({
    cookie: { type: User }
}, { collection: 'sessions' });

const Session = model('Session', sessionSchema);

module.exports = Session;