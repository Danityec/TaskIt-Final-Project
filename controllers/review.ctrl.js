const Review = require('../models/review');

getReviews = (req, res) => {
    if (req.query.userID) {
        Review.find({ userID: req.query.userID }).sort({ _id: -1 })
            .then(docs => res.json(docs) )
            .catch(err => console.log(err))
    }

    else if (req.query.templateID) {
        Review.find({ templateID: req.query.templateID  }).sort({ _id: -1 })
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    }

    else {
        Review.find({}).sort({ _id: -1 })
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    }
}

getReview = (req, res) => {
    Review.findOne({ _id: req.params.id })
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
}

createReview = (req, res) => {
    const { body } = req
    const review = new Review();

    if(body.templateID == null || body.templateID == "")
        res.json(null)

    else review.templateID = body.templateID

    if(body.userID == null || body.userID == "")
        res.json(null)

    else review.userID = body.userID
    
    if(body.title == null || body.title == "")
        res.json(null)

    else review.title = body.title
    
    if(body.reviewBody == null || body.reviewBody == "")
        res.json(null)

    else review.reviewBody = body.reviewBody

    review.save()
        .then(() => res.json({ _id: `${review.id}` }))
        .catch(err => console.log(err))
}

updateReview = (req, res) => {
    const { body } = req
    const review = {};

    if(body.title == null || body.title == "")
        res.json(null)

    else review.title = body.title

    if(body.reviewBody == null || body.reviewBody == "")
        res.json(null)

    else review.reviewBody = body.reviewBody


    const query = { _id: req.params.id }

    Review.updateOne(query, review)
        .then(() => res.json({ _id: `${req.params.id}` }))
        .catch(err => console.log(err))
}


deleteReview = (req, res) => {
    Review.deleteOne({ _id: req.params.id })
        .then(() => res.json({ _id: `${req.params.id}` }))
        .catch(err => console.log(err))
}

module.exports = {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
}