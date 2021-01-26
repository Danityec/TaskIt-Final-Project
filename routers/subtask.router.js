const { Router } = require('express');
const router = new Router();

const SubTaskController = require('../controllers/subtask.ctrl');

router.get('/:task', SubTaskController.getSubTasks);
router.get('/:task/:id', SubTaskController.getSubTask);
router.post('/:task', SubTaskController.createSubTask);
router.put('/:task/:id', SubTaskController.updateSubTask);
router.delete('/:task/:id', SubTaskController.deleteSubTask);

module.exports = { router };