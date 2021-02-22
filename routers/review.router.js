const {Router} = require('express');
const router = new Router();

const reviewController = require('../controllers/review.ctrl');

router.get('/', reviewController.getReviews);
router.get('/:id', reviewController.getReview);
router.post('/', reviewController.createReview);

module.exports = {router};