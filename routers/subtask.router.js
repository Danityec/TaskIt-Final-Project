const { Router } = require('express');
const router = new Router();

const SubTaskController = require('../controllers/subtask.ctrl');

router.get('/:task', SubTaskController.getSubTasks);
router.get('/:task/:id', SubTaskController.getSubTask);
router.post('/:task', SubTaskController.createSubTask);

module.exports = { router };