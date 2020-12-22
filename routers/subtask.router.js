const { Router } = require('express');
const{ subtaskDBController} = require('../controllers/task.ctrl');

const subtaskRouter = new Router(); 


subtaskRouter.get('/',subtaskDBController.getSubasks);         
subtaskRouter.get('/:id',subtaskDBController.getSubtask);      
subtaskRouter.post('/',subtaskDBController.postSubtask);         
subtaskRouter.put('/:id',subtaskDBController.updatSubtask);     
subtaskRouter.delete('/:id',subtaskDBController.deleteSubtask);  


module.exports = { subtaskRouter };