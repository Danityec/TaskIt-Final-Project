const Review = require('../models/review');

getReviews = (req, res) => {
    if (req.query.userID) {
        Review.find({userID: req.query.userID}).sort({_id: -1})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    } else if (req.query.templateID) {
        Review.find({templateID: req.query.templateID}).sort({_id: -1})
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    } else {
        res.sendStatus(400)
    }
}

getReview = (req, res) => {
    Review.findOne({_id: req.params.id})
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
}

createReview = (req, res) => {
    const {body} = req
    const review = new Review();

    if (body.templateID == null || body.templateID === "") {
        res.sendStatus(400)
    } else {
        review.templateID = body.templateID
    }

    if (body.userID == null || body.userID === "") {
        res.sendStatus(400)
    } else {
        review.userID = body.userID
    }

    if (body.title == null || body.title === "") {
        res.sendStatus(400)
    } else {
        review.title = body.title
    }

    if (body.reviewBody == null || body.reviewBody === "") {
        res.sendStatus(400)
    } else {
        review.reviewBody = body.reviewBody
    }

    review.save()
        .then(() => res.json({_id: `${review.id}`}))
        .catch(err => console.log(err))
}

module.exports = {
    getReviews,
    getReview,
    createReview
}