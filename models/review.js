const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    uniqueID: { type: Schema.ObjectId },
    taskTemplateID: { type: String },
    userID: { type: String},
    title: {type: String},
    message: {type: String}
    
}, { collection: 'reviews' });

const Review = model('Review', reviewSchema);
module.exports = Review;