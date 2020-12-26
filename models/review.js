const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    uniqueID: { type: Number },
    taskTemplateID: { type: String },
    userID: { type: String},
    title: {type: String},
    message: {type: String}
    
}, { collection: 'Reviews' });

const Review = model('Review', reviewSchema);
module.exports = Review;