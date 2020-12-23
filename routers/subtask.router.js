const { Router } = require('express');
const router = new Router(); 

const subtaskController = require('../controllers/subtask.ctrl');

router.get('/', subtaskController.getSubtasks);         
router.get('/:id', subtaskController.getSubtask);      
router.post('/', subtaskController.createSubtask);         
router.put('/:id', subtaskController.updateSubtask);     
router.delete('/:id', subtaskController.deleteSubtask);  

module.exports = { router };