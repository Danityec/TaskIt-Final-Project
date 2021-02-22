const {Router} = require('express');
const router = new Router();

const subTaskController = require('../controllers/subtask.ctrl');

router.get('/:task', subTaskController.getSubTasks);
router.get('/:task/:id', subTaskController.getSubTask);
router.post('/:task', subTaskController.createSubTask);
router.put('/:task/:id', subTaskController.updateSubTask);
router.delete('/:task/:id', subTaskController.deleteSubTask);

module.exports = {router};