const { Router } = require('express');
const router = new Router(); 

const messageController = require('../controllers/message.ctrl');

router.get('/', messageController.getMessages);         
router.get('/:id', messageController.getMessage);      
router.post('/', messageController.createMessage);         

module.exports = { router };