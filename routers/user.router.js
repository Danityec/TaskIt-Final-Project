const {Router} = require('express');
const router = new Router();

const userController = require('../controllers/user.ctrl');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);

module.exports = {router};