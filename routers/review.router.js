const { Router } = require('express');
const router = new Router(); 

const reviewController = require('../controllers/review.ctrl');

router.get('/', reviewController.getReviews);         
router.get('/:id', reviewController.getReview);      
router.post('/', reviewController.createReview);         
router.put('/:id', reviewController.updateReview);     
router.delete('/:id', reviewController.deleteReview);  

module.exports = { router };