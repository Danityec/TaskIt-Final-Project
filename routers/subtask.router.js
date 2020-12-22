const { Router } = require('express');
const{ subtaskController} = require('../controllers/task.ctrl');

const subtaskRouter = new Router(); 

subtaskRouter.get('/',subtaskController.getSubtasks);         
subtaskRouter.get('/:id',subtaskController.getSubtask);      
subtaskRouter.post('/',subtaskController.createSubtask);         
subtaskRouter.put('/:id',subtaskController.updatSubtask);     
subtaskRouter.delete('/:id',subtaskController.deleteSubtask);  


module.exports = { subtaskRouter };