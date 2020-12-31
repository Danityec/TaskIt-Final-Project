const { Router } = require('express');
const router = new Router();

const SubTaskController = require('../controllers/subtask.ctrl');

router.get('/:task', SubTaskController.getSubTasks);
router.get('/:task/:id', SubTaskController.getSubTask);
router.post('/:task', SubTaskController.createSubTask);
//router.put('/subtasks/:task/:id', SubTaskController.updateSubTask);     

module.exports = { router };