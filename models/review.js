const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    templateID: { type: String, require:true  },
    userID: { type: String , require:true },
    title: { type: String , require:true },
    reviewBody: { type: String , require:true },
}, { collection: 'reviews' });

const Review = model('Review', reviewSchema);

module.exports = Review;