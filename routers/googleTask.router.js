const { Router } = require('express');
const router = new Router();

const googleTaskController = require('../controllers/googleTask.ctrl');

// task
router.post('/', googleTaskController.createTaskGoogleTask);
router.post('/:templateID', googleTaskController.createTaskFromTemplateGoogleTask);
router.put('/:id', googleTaskController.updateTaskGoogleTask);
router.delete('/:id', googleTaskController.deleteTaskGoogleTask);

//subTask
router.post('/:task', googleTaskController.createSubTaskGoogleTask);
router.put('/:task/:id', googleTaskController.updateSubTaskGoogleTask);
router.delete('/:task/:id', googleTaskController.deleteSubTaskGoogleTask);

module.exports = { router };