const Review = require('../models/review');

getReviews = (req, res) => {
    Review.find({})
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

getReview = (req, res) => {
    Review.find({ id: req.params.id })
    .then(docs => res.json(docs))
    .catch(err => console.log(err))
}

createReview = (req, res) => {
    const { body } = req
    const review = new Review();
    review.id = body.id
    // order.price = body.price
    // order.dishId = body.dishId
    // order.restaurantId = body.restaurantId

    review.save()
        .then(() => res.json({id:`${review.id}`}))
        .catch(err => console.log(err))
}

updateReview = (req, res) => { 
    const { body } = req
    const review = {};
    review.id = body.id
    review.name = body.name
    review.status = body.status
    
    const query = {id: req.params.id}

    Review.updateOne(query, review)
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

deleteReview = (req, res) => {     
    Review.deleteOne({id: req.params.id})
        .then(() => res.json({id:`${req.params.id}`}))
        .catch(err => console.log(err))
}

module.exports = { 
    getReviews, 
    getReview, 
    createReview, 
    updateReview, 
    deleteReview
}