const {Router} = require('express');
const router = new Router();

const chatController = require('../controllers/chat.ctrl');
const messageController = require('../controllers/chat.ctrl');

router.get('/', chatController.getChats);
router.get('/:id', chatController.getChat);
router.post('/', chatController.createChat);

router.post('/messages/:id', messageController.createMessage);

module.exports = {router};